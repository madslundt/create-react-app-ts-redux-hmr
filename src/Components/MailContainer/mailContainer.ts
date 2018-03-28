import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import MailContainerPage from './mailContainerPage';
import MailContainerActions from './mailContainerActions';
import { IReducer } from '@infrastructure/rootReducer';
import { initialState } from './mailContainerReducer';
import { IMail } from '@Components/MailItem/mailItem';

interface IStateProps {
    mailContainer: typeof initialState;
}

interface IDispatchProps {
    actions: typeof MailContainerActions;
}

const mapStateToProps = (state: IReducer) => ({
    mailContainer: state.MailContainer,
});

const mapDispatchToProps = (dispatch: Dispatch<IMail[]>) => ({
    actions: bindActionCreators(MailContainerActions, dispatch),
});

const MailContainerContainer = connect<{}, IDispatchProps, {}, any>(
    mapStateToProps,
    mapDispatchToProps
)(MailContainerPage);

export default MailContainerContainer;

export {
    IStateProps,
    IDispatchProps,
};
