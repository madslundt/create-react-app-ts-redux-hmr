import * as React from 'react';
import MailItem, { IMail } from '@Components/MailItem/mailItem';
import { IDispatchProps, IStateProps } from './mailboxContainer';
import { RouteComponentProps } from 'react-router';

type IProps = IStateProps & IDispatchProps & RouteComponentProps<{}>;

class MailboxPage extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);
    }

    componentDidMount() {
        this.props.actions.fetchMails();
    }

    render() {
        const { payload } = this.props.mailbox;

        return (
            <div className="row">
                <ul>
                    {payload.map((mail: IMail) => (
                        <li key={mail.id}>
                            <MailItem {...mail} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default MailboxPage;
