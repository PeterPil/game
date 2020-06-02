import React, { useContext, useState, useEffect, useMemo } from 'react';
import { AppContext } from '../../../context/app/provider';


import styles from './styles.module.scss';
import TableItem from './TableItem';
import { baseUrl } from '../../../constants/baseUrl';
import { endpoints } from '../../../constants/endpoints';
import { statuses } from '../../../constants/statuses';
import { colors } from '../../../constants/colors';

const GameTable = ({
    isStarted,
    playAgainCount,
}) => {
    const {
        mode: {
            field,
            delay,
        },
        user,
        status,
        setStatus,
    } = useContext(AppContext);

    const [tableArray, setTableArray] = useState([]);
    const [winner, setWinner] = useState('');

    const onItemClick = item => {
        if(isStarted && item.color && item.color !== colors.RED) {
            setTableArray(state => {
                const prev = [...state];
                prev[item.number].color = colors.GREEN;
                return prev;
            });
        }
    };

    useEffect(() => {
        if(status === statuses.IN_PROGRESS) {
            updateUsers();
        }
    })

    const updateUsers = async () => {
        let computerCount = 0;
        let userCount = 0;
        tableArray.forEach(item => {
            if(item.color === colors.GREEN) {
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
        // await fetch(fetchUrl, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(data),
        // });
        await setStatus(statuses.DONE);
        await setWinner(data.winner);
    }

    useEffect(() => {
        if(playAgainCount || field) {
            const tableData = Array(field ** 2)
                .fill(0)
                .map((it, index) => ({
                    number: it + index,
                    color: null,
                }));
            setTableArray(tableData);
        }
    }, [playAgainCount, field]);

    useEffect(() => {
        let interval;
        let currIndex = 1;
        if(playAgainCount > 0) {
            console.log(playAgainCount)
            clearInterval(interval);
            currIndex = 1;
        }
        if(isStarted) {
            setStatus(statuses.START);
            setWinner('');
            const copiedArr = [...tableArray];
            copiedArr.forEach((item, i) => {
                const j = Math.floor(Math.random() * (i + 1));
                [copiedArr[i], copiedArr[j]] = [copiedArr[j], copiedArr[i]];
            });
            const firstItem = copiedArr[0];
            setTableArray(state => {
                const prev = [...state];
                prev[firstItem.number].color = colors.BLUE;
                return prev;
            });
            interval = setInterval(() => {
                const currItem = copiedArr[currIndex];
                const prevItem = copiedArr[currIndex - 1];
                setTableArray(state => {
                    const prev = [...state];
                    prev[currItem.number].color = colors.BLUE;
                    let color = prev[prevItem.number].color;
                        if(color !== colors.GREEN) {
                            prev[prevItem.number].color = colors.RED;
                        }
                    return prev;
                });
                
                currIndex++;
                if(currIndex === copiedArr.length) {
                    setTableArray(state => {
                        const prev = [...state];
                    let color = prev[currItem.number].color;
                        
                        if(color !== colors.GREEN) {

                            prev[currItem.number].color = colors.RED;
                        }
                        return prev;
                    });
                    clearInterval(interval);
                    currIndex = 1;
                    setStatus(statuses.IN_PROGRESS);
                }
            }, delay);
        }
        return () => {
            clearInterval(interval);
            currIndex = 1;
        }
    }, [isStarted, playAgainCount])

    const winnerResult = useMemo(() => winner
        ? `The winner is ${winner}`
        : 'Who win the game',
        [winner]
    )

    return (
        <div className={styles['table-container']}>
            <p className={styles.winner}>
                { winnerResult }
            </p>
            <div className={styles.table} style={{ width: field * 30 }}>
                { tableArray.map(item => <TableItem onClick={onItemClick} item={item} />)}
            </div>
        </div>
    );
};

export default GameTable;
