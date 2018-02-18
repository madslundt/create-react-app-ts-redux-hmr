import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import App from './app';
import registerServiceWorker from '@infrastructure/registerServiceWorker';
import configureStore from '@infrastructure/store';

const store = configureStore();

const render = (App: React.ComponentType) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App />
            </Provider>
        </AppContainer>,
        document.getElementById('root') as HTMLElement
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./app', () => {
        render(App);
    });
}

registerServiceWorker();
