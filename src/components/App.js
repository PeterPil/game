import React from 'react';
import AppProvider from '../context/app/provider';
import LeftContainer from './left-container';

const App = () => (
    <AppProvider>
        <>
            <LeftContainer />
        </>
    </AppProvider>
);

export default App;
