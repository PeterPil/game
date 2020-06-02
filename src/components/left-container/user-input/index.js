import React, { useContext } from 'react';
import { AppContext } from '../../../context/app/provider';

import styles from './styles.module.scss';

const UserInput = () => {
    const {
        user,
        setUser,
    } = useContext(AppContext);

    const changeValue = ({ target: { value }}) => {
        setUser(value);
    };

    return (
        <div className={styles['user-input']}>
            <input
                type="text"
                placeholder="Enter your name"
                className={styles.input}
                value={user}
                autoComplete="off"
                onChange={changeValue}
            />
        </div>
    );
};

export default UserInput;
