import * as React from 'react';
import MailItem, { IMail } from '@Components/MailItem/mailItem';
import { IDispatchProps, IStateProps } from './mailContainer';
import { RouteComponentProps } from 'react-router';
import PageControl from '@Components/PageControl/pageControl';
import MailViewer from '@Components/MailViewer/mailViewer';

type IProps = IStateProps & IDispatchProps & RouteComponentProps<{}>;

const PAGE_SIZE = 10;

class MailContainerPage extends React.Component<IProps, any> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            page: 0,
            currentMail: null
        };

        this.gotoPage = this.gotoPage.bind(this);
        this.viewMail = this.viewMail.bind(this);
    }

    componentDidMount() {
        this.props.actions.fetchMails();
    }

    gotoPage(page: number) {
        this.setState({
            page: page
        });
    }

    viewMail(mail: IMail) {
        this.setState({
            currentMail: mail
        });
    }

    render() {
        const { payload } = this.props.mailContainer;
        const { page, currentMail } = this.state;

        const pageLength = Math.ceil(payload.length / PAGE_SIZE);

        return (
            <div>
                <ul>
                    {payload
                        .slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)
                        .map((mail: IMail) => (
                        <li
                            onClick={() => this.viewMail(mail)}
                            key={mail.id}
                            style={{cursor: 'pointer'}}
                        >
                            <MailItem {...mail} />
                        </li>
                    ))}
                </ul>

                <MailViewer {...currentMail} />

                <PageControl
                    currentPage={page}
                    totalPages={pageLength}
                    gotoPage={this.gotoPage}
                />
            </div>
        );
    }
}

export default MailContainerPage;