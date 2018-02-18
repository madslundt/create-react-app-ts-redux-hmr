import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import MailboxPage from './mailboxPage';
import MailboxActions from './mailboxActions';
import { IReducer } from '@infrastructure/rootReducer';
import { initialState } from './mailboxReducer';
import { IMail } from '@Components/MailItem/mailItem';

interface IStateProps {
    mailbox: typeof initialState;
}

interface IDispatchProps {
    actions: typeof MailboxActions;
}

const mapStateToProps = (state: IReducer) => ({
    mailbox: state.Mailbox,
});

const mapDispatchToProps = (dispatch: Dispatch<IMail[]>) => ({
    actions: bindActionCreators(MailboxActions, dispatch),
});

const MailboxContainer = connect<{}, IDispatchProps, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(MailboxPage);

export default MailboxContainer;

export {
    IStateProps,
    IDispatchProps,
};
