import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Rr from './Rr';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Rr />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
