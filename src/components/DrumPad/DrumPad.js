import React from 'react';
import { useGlobalContext } from '../../hooks/context';
import AudioButton from '../AudioButton/AudioButton';
import './DrumPad.css';

const DrumPad = () => {
    const { buttons, activeBank, power, volume, updateDisplay } = useGlobalContext();

    return (
        <div className='drum-pad-container'>
            {buttons.map((btn, index) => {
                return (
                    <AudioButton
                        key={index}
                        value={btn.value}
                        keybind={btn.code}
                        audioSource={activeBank.bank[index].url}
                        audioName={activeBank.bank[index].name}
                        updateDisplay={updateDisplay}
                        disabled={!power}
                        volume={volume}
                    />
                );
            })}
        </div>
    );
};

export default DrumPad;
