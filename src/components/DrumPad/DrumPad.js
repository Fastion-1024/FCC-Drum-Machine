import React from 'react';
import AudioButton from '../AudioButton/AudioButton';

const DrumPad = ({ buttons, activeBank, power, volume, updateDisplay }) => {
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
