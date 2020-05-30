import React from 'react';
import ModesDropDown from './modes-dropdown';
import UserInput from './user-input';

import styles from './styles.module.scss';

const LeftContainer = () => (
    <div className={styles['left-container']}>
        <ModesDropDown />
        <UserInput />
    </div>
);

export default LeftContainer;
