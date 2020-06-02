import React, { useState, useEffect, useContext } from 'react';
import ModesDropDown from './modes-dropdown';
import UserInput from './user-input';

import styles from './styles.module.scss';
import PlayButton from './play-button';
import GameTable from './game-table';
import { AppContext } from '../../context/app/provider';

const LeftContainer = () => {
    const {
        mode: {
            field,
        },
    } = useContext(AppContext);

    const [isStarted, setIsStarted] = useState(false);
    const [playAgainCount, setPlayAgainCount] = useState(0);

    const clickButton = () => {
        setIsStarted(true);
        if(isStarted) {
            setPlayAgainCount(count => count += 1);
        }
    }

    useEffect(() => {
        if(field) {
            setIsStarted(false);
            setPlayAgainCount(0);
        }
    }, [field]);

    return (
        <div className={styles['left-container']}>
            <div className={styles['left-container-header']}>
                <ModesDropDown />
                <UserInput />
                <PlayButton
                    isStarted={isStarted}
                    onClick={clickButton}
                    isFieldChosen={!field}
                />
            </div>
            <GameTable
                isStarted={isStarted}
                playAgainCount={playAgainCount}
            />
        </div>
    );
};

export default LeftContainer;
