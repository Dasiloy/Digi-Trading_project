// To get Reactstrap to work properly
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss'
import '../styles/buttons.scss'
import "../styles.scss";

import type { AppProps } from 'next/app'
import React from "react";
import { Provider } from "react-redux";
import {persistStore} from  "redux-persist";
import {PersistGate} from "redux-persist/integration/react";

import store from "../redux/configureStore";

const persistor = persistStore(store);

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Provider store={store} >
            <PersistGate loading={null} persistor={persistor}>
                <Component {...pageProps} />
            </PersistGate>
        </Provider>
    )
}

export default MyApp
