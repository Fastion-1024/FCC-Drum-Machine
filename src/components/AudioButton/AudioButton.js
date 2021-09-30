import { useRef, useEffect } from 'react';
import './AudioButton.css';

const AudioButton = ({
    value,
    keybind,
    audioName,
    audioSource,
    disabled,
    volume,
    updateDisplay,
}) => {
    const audioRef = useRef(null);

    const playSound = () => {
        if (audioRef) {
            audioRef.current.volume = volume / 100;
            audioRef.current.currentTime = 0;
            audioRef.current.play();
        }
    };

    const handleClick = () => {
        playSound();
        updateDisplay(audioName);
    };

    const handleKeyDown = (e) => {
        if (e.code === keybind && !disabled) {
            e.preventDefault();
            playSound();
            updateDisplay(audioName);
        }
    };

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [volume, disabled]);

    return (
        <button id={audioName} className='drum-pad' onClick={handleClick} disabled={disabled}>
            <audio id={value} className='clip' preload='auto' src={audioSource} ref={audioRef} />
            {value}
        </button>
    );
};

export default AudioButton;
