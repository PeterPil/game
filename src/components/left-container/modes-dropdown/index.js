import React, { useContext, useState, useRef } from 'react';
import { AppContext } from '../../../context/app/provider';

import styles from './styles.module.scss';
import DropDownBody from './DropDownBody';

const ModesDropDown = () => {
    const {
        mode: {
            name,
        }
    } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(open => !open);
    };

    return (
        <div className={styles['modes-dropdown']} ref={dropdownRef}>
            <div className={styles['modes-dropdown-header']} onClick={toggleDropdown}>
                { name || 'Pick game mode'}
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
