import React from 'react';


import styles from './styles.module.scss';

const PlayButton = ({
    isStarted,
    isFieldChosen,
    onClick,
}) => (
    <button
        onClick={onClick}
        className={styles['play-button']}
        disabled={isFieldChosen}
    >
        {
            isStarted
                ? 'Play again'
                : 'Play'
        }
    </button>
);

export default PlayButton;
