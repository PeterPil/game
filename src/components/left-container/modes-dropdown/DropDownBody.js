import React, { useContext, useEffect } from 'react';
import { AppContext } from '../../../context/app/provider';

import styles from './styles.module.scss';

const DropDownBody = ({
    dropdownRef,
    toggleDropdown,
}) => {
    const {
        modes,
        setMode,
    } = useContext(AppContext);

    const handleOutSideClick = (e) => {
        if(e.target.contains(dropdownRef)) {
            toggleDropdown();
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleOutSideClick);
        return () => {
            document.removeEventListener('click', handleOutSideClick);
        }
    }, []);

    const onItemClick = (mode) => () => {
        setMode(mode);
        toggleDropdown();
    }

    return (
        <div className={styles['modes-dropdown-body']}>
            { modes.map(mode => (
                <div
                    className={styles['modes-dropdown-item']}
                    onClick={onItemClick(mode)}
                    key={mode.name}
                >
                    { mode.name}
                </div>
            ))}
        </div>
    );
};

export default DropDownBody;
