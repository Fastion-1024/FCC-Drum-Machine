import { useRef, useEffect } from 'react';

const useProgressSlider = () => {
    const ref = useRef();

    useEffect(() => {
        // Make sure ref is not null
        if (ref && ref.current) {
            console.log('FIRED 1');
            ref.current.style.setProperty('--value', ref.current.value);
            ref.current.style.setProperty('--min', ref.current.min == '' ? '0' : ref.current.min);
            ref.current.style.setProperty('--max', ref.current.max == '' ? '100' : ref.current.max);
            ref.current.addEventListener('input', () => {
                console.log('FIRED 2');
                ref.current.style.setProperty('--value', ref.current.value);
            });
        }

        return () => {
            ref.current.removeEventListener('input', () => {
                console.log('FIRED 2');
                ref.current.style.setProperty('--value', ref.current.value);
            });
        };
    }, [ref]);

    return [ref];
};

export default useProgressSlider;
