import React, { useState, useEffect, useContext, useRef } from 'react';
import ModesDropDown from './modes-dropdown';
import UserInput from './user-input';

import styles from './styles.module.scss';
import PlayButton from './play-button';
import GameTable from './game-table';
import { AppContext } from '../../context/app/provider';
import { baseUrl } from '../../constants/baseUrl';
import { endpoints } from '../../constants/endpoints';

const LeftContainer = () => {
    const {
        mode: {
            field,
            delay,
        },
        user,
    } = useContext(AppContext);
    // let interval;

    const [isStarted, setIsStarted] = useState(false);
    const [tableArray, setTableArray] = useState([]);
    const [status, setStatus] = useState('');
    // const [currentIndex, setCurrentIndex] = useState(0);
    const currIndex = useRef(0);

    const taskResolution = (period) => {
        return new Promise((resolve, reject) => {
            setStatus('inProgress');
            const copiedArr = [...tableArray];
            copiedArr.forEach((item, i) => {
                const j = Math.floor(Math.random() * (i + 1));
                [copiedArr[i], copiedArr[j]] = [copiedArr[j], copiedArr[i]];
            });
            let currIndex = 0;

            const interval = setInterval(() => {
                const currItem = copiedArr[currIndex];
                setTableArray(state => {
                    const prev = [...state];
                    prev[currItem.number].color = 'red';
                    return prev;
                });
                setTimeout(() => {
                    setTableArray(state => {
                        const prev = [...state];
                        const color = prev[currItem.number].color;
                        if(color !== 'green') {
                            prev[currItem.number].color = 'blue';
                        }
                        return prev;
                    });
                }, period);
                currIndex++;
                if(currIndex === copiedArr.length) {
                    clearInterval(interval);
                    setStatus('done');
                    resolve('done');
                }
            }, period);
        });
      };

    const clickButton = () => {
        setIsStarted(start => !start);
        taskResolution(300).then(done => {
            if(done) {
                let computerCount = 0;
                let userCount = 0;
                tableArray.forEach(item => {
                    if(item.color === 'green') {
                        userCount++;
                    } else {
                        computerCount++;
                    }
                });
                const now = new Date();
                const options = {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                };
                const date = now.toLocaleDateString("en-US", options)
                const data = {
                    winner: computerCount > Math.floor((tableArray.length - 1) / 2)
                        ? 'Computer'
                        : user,
                    date: `${userCount}:${computerCount}; ${date}`
                }
                const fetchUrl = baseUrl + endpoints.winners;
                fetch(fetchUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data),
                })
            }
        });
    }


    useEffect(() => {
        if(field) {
            const tableData = Array(field ** 2)
                .fill(0)
                .map((it, index) => ({
                    number: it + index,
                    color: null,
                }));
            setTableArray(tableData);
        }
    }, [field]);

    const onItemClick = item => {
        if(field && item.color && item.color !== 'blue') {
            setTableArray(state => {
                const prev = [...state];
                prev[item.number].color = 'green';
                return prev;
            });
        }
    };

    return (
        <div className={styles['left-container']}>
            <div className={styles['left-container-header']}>
                <ModesDropDown />
                <UserInput />
                <PlayButton isStarted={isStarted} onClick={clickButton} />
            </div>
            <GameTable
                tableArray={tableArray}
                onItemClick={onItemClick}
                width={field * 30}
            />
        </div>
    );
};

export default LeftContainer;
