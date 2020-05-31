import React from 'react';
import AppProvider from '../context/app/provider';
import LeftContainer from './left-container';
import RightContainer from './right-container';

const App = () => (
    <AppProvider>
        <>
            <LeftContainer />
            <RightContainer />
        </>
    </AppProvider>
);

export default App;
