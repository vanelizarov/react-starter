import '../scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './components/app';

class Aggregator {

    constructor() {

        const appContainer = document.getElementById('app');

        ReactDOM.render(
            <AppContainer>
                <App />
            </AppContainer>,
            appContainer
        );

        if (module.hot) {

            module.hot.accept('./components/app', () => {
                require('./components/app');

                ReactDOM.render(
                    <AppContainer>
                        <App />
                    </AppContainer>,
                    appContainer
                );

            });

        }
    }

}

export default new Aggregator();
