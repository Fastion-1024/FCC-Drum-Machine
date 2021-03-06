// Hooks
import React, { useContext, useState, useRef } from 'react';
import useToggle from './useToggle';
import useLocalStorage from './useLocalStorage';
// Data
import { keybinds, bankOne, bankTwo } from '../lib/Data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [buttons, setButtons] = useLocalStorage('keybinds', keybinds);
    const [activeBank, toggleActiveBank] = useToggle(bankOne, bankTwo);
    const [power, togglePower] = useToggle(false, true);
    const [display, setDisplay] = useState('');
    const [volume, setVolume] = useState(50);
    const timeoutRef = useRef(null);

    const resetKeybinds = () => {
        setButtons(keybinds);
    };

    const updateKeybind = (oldKey, newKey) => {
        const index = buttons.findIndex((btn) => btn.value === oldKey.value);
        if (index) {
            setButtons([...buttons].splice(index, 1, newKey));
        }
    };

    const updateDisplay = (value) => {
        // Clear old timeout and ref
        if (timeoutRef && timeoutRef.current) {
            clearTimeout(timeoutRef.current);
            timeoutRef.current = null;
        }

        setDisplay(value);
        timeoutRef.current = setTimeout(() => {
            updateDisplay('');
        }, 3000);
    };

    return (
        <AppContext.Provider
            value={{
                buttons,
                activeBank,
                toggleActiveBank,
                power,
                togglePower,
                display,
                volume,
                setVolume,
                updateDisplay,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export default AppProvider;
