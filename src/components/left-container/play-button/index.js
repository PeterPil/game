import React from 'react';


// import styles from './styles.module.scss';

const PlayButton = ({
    isStarted,
    onClick,
}) => (
    <button onClick={onClick}>
        {
            isStarted
                ? 'Play again'
                : 'Play'
        }
    </button>
);

export default PlayButton;
