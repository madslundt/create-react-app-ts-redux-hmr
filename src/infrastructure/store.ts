import { Store, createStore, applyMiddleware, Middleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '@infrastructure/rootReducer';
import { initialState as mailboxInitialState } from '@Components/Mailbox/mailboxReducer';

const customLoggerMiddleware: Middleware = state => next => (action: any) => {
    console.log(1, state);
    console.log(2, action);
    return next(action);
};

const initialState: any = {
    Mailbox: mailboxInitialState,
};

const configureStore = (): Store<any> => {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger, customLoggerMiddleware)
    );

    if (process.env.NODE_ENV !== 'production') {
        if (module.hot) {
            module.hot.accept('./rootReducer', () => {
                store.replaceReducer(rootReducer);
            });
        }
    }

    return store;
};

export default configureStore;