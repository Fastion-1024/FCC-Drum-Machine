// Hooks
import { useState } from 'react';
import useToggle from '../../hooks/useToggle';
import useLocalStorage from '../../hooks/useLocalStorage';
// Components
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import VolumeSlider from '../VolumeSlider/VolumeSlider';
// Data
import { keybinds, bankOne, bankTwo } from '../../lib/Data';

const DrumMachine = () => {
    const [buttons, setButtons] = useLocalStorage('keybinds', keybinds);
    const [activeBank, toggleActiveBank] = useToggle(bankOne, bankTwo);
    const [power, togglePower] = useToggle();
    const [display, setDisplay] = useState('');
    const [volume, setVolume] = useState(50);

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
        setDisplay(value);
    };

    return (
        <section id='drum-machine'>
            <Display value={display} />
            <button onClick={togglePower}>{power ? 'Turn Off' : 'Turn On'}</button>
            <button onClick={toggleActiveBank} disabled={!power}>
                {activeBank.name}
            </button>
            <VolumeSlider value={volume} update={setVolume} disabled={!power} />
            <DrumPad {...{ buttons, activeBank, power, volume, updateDisplay }} />
        </section>
    );
};

export default DrumMachine;
