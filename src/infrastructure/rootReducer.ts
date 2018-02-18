import { combineReducers } from 'redux';
import Mailbox from '@Components/Mailbox/mailboxReducer';

interface IReducer {
    readonly Mailbox: typeof Mailbox;
}

const rootReducer = combineReducers({
    Mailbox
});

export default rootReducer;

export {
    IReducer
};