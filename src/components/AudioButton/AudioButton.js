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
    const didMountRef = useRef(false);

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

    /* 
        We use a ref to prevent the animation tied to the on off classes
        from firing until after the first render.
    */
    const getClassNames = () => {
        if (didMountRef.current) {
            return `${disabled ? 'drum-pad off' : 'drum-pad on'} `;
        } else {
            didMountRef.current = true;
            return 'drum-pad disabled';
        }
    };

    return (
        <button
            id={audioName}
            // className={`${disabled ? 'drum-pad disabled' : 'drum-pad'} `}
            className={getClassNames()}
            onClick={handleClick}
            disabled={disabled}
        >
            <audio id={value} className='clip' preload='auto' src={audioSource} ref={audioRef} />
            {value}
        </button>
    );
};

export default AudioButton;
