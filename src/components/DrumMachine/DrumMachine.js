// Components
import { useGlobalContext } from '../../hooks/context';
import useProgressSlider from '../../hooks/useProgressSlider';
import Display from '../Display/Display';
import DrumPad from '../DrumPad/DrumPad';
import ToggleButton from '../ToggleButton/ToggleButton';
// Stylsheets
import './DrumMachine.css';

const DrumMachine = () => {
    const { power, togglePower, activeBank, toggleActiveBank, volume, setVolume, updateDisplay } =
        useGlobalContext();

    const [volumeProgressRef] = useProgressSlider();

    return (
        <section id='drum-machine'>
            <Display />
            <ToggleButton
                id='power'
                name={'Power'}
                checked={power}
                onChange={() => {
                    togglePower();
                    updateDisplay(power ? 'Goodbye' : 'Hello');
                }}
            />
            <ToggleButton
                id='bank'
                name={'Bank'}
                checked={activeBank.name === 'Bank 2'}
                onChange={toggleActiveBank}
                disabled={!power}
            />
            <input
                className='volume-slider styled-slider slider-progress'
                type='range'
                min={0}
                max={100}
                step={10}
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                disabled={!power}
                ref={volumeProgressRef}
            />
            <DrumPad />
        </section>
    );
};

export default DrumMachine;
