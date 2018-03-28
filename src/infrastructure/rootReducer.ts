import { combineReducers } from 'redux';
import MailContainer from '@Components/MailContainer/mailContainerReducer';

interface IReducer {
    readonly MailContainer: typeof MailContainer;
}

const rootReducer = combineReducers({
    MailContainer
});

export default rootReducer;

export {
    IReducer
};