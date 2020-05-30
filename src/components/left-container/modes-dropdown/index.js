import React, { useContext, useState } from 'react';
import { AppContext } from '../../../context/app/provider';

const ModesDropDown = () => {
    const {
        modes,
        setMode,
    } = useContext(AppContext);
    const [currentValue, setCurrentValue] = useState('');

    const changeValue = ({ target: { value }}) => {
        const mode = modes.find(({ name }) => name === value) || {};
        setCurrentValue(value);
        setMode(mode);
    }

    return (
        <div>
            <select
                value={currentValue}
                onChange={changeValue}
            >
                {modes.map(({ name }) => (
                    <option value={name} key={name}>
                        {name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default ModesDropDown;
