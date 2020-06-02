import React from 'react';
import AppProvider from '../context/app/provider';
import LeftContainer from './left-container';
import RightContainer from './right-container';

import styles from './styles.module.scss';

const App = () => (
    <AppProvider>
        <div className={styles.container}>
            <LeftContainer />
            <RightContainer />
        </div>
    </AppProvider>
);

export default App;
