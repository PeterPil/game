import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../../../context/app/provider';
import DropDownBody from './DropDownBody';

import styles from './styles.module.scss';

const ModesDropDown = () => {
    const {
        mode: {
            name,
        },
    } = useContext(AppContext);

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(open => !open);
    };

    return (
        <div className={styles['modes-dropdown']} ref={dropdownRef}>
            <div className={styles['modes-dropdown-header']} onClick={toggleDropdown}>
                <p className={styles['header-text']}>{ name || 'Pick game mode'}</p>
                <div className={styles['header-icon']}/>
            </div>
            {
                isOpen && (
                    <DropDownBody
                        toggleDropdown={toggleDropdown}
                        dropdownRef={dropdownRef && dropdownRef.current}
                    />
                )
            }
        </div>
    );
}

export default ModesDropDown;
