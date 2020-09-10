import React from 'react';
import ReactDOM from 'react-dom';

import Application from './Application';

import './styles.css';
import GrudgeContextProvider from './GrudgeContext';

const rootElement = document.getElementById('root');

ReactDOM.render(
    <GrudgeContextProvider>
        <Application />
    </GrudgeContextProvider>
    , rootElement);
