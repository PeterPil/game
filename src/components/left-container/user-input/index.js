import React, { useContext } from 'react';

import styles from './styles.module.scss';
import { AppContext } from '../../../context/app/provider';

const UserInput = () => {
    const {
        user,
        setUser,
    } = useContext(AppContext);

    const changeValue = ({ target: { value }}) => {
        setUser(value);
    }

    return (
        <div className={styles['user-input']}>
            <input
                type="text"
                placeholder="Enter your name"
                value={user}
                autoComplete="off"
                onChange={changeValue}
            />
        </div>
    )
}

export default UserInput;
