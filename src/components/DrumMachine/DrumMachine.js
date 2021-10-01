// Components
import { useGlobalContext } from '../../hooks/context';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
// Stylsheets
import './DrumMachine.css';

const DrumMachine = () => {
    const { power, togglePower, activeBank, toggleActiveBank, volume, setVolume } =
        useGlobalContext();

    return (
        <section id='drum-machine'>
            <Display />
            <button id='power' onClick={togglePower}>
                {power ? 'Turn Off' : 'Turn On'}
            </button>
            <button id='bank' onClick={toggleActiveBank} disabled={!power}>
                {activeBank.name}
            </button>
            <input
                className='volume-slider styled-slider slider-progress'
                type='range'
                min={0}
                max={100}
                step={10}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                disabled={!power}
            />
            <DrumPad />
        </section>
    );
};

export default DrumMachine;
