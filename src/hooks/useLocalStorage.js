import { useState, useEffect } from 'react';

const useLocalStorage = (key, initialState) => {
    // Initialise state from either parameter or localStorage
    const [state, setState] = useState(() => {
        const retrieved = localStorage.getItem(key);
        return retrieved ? JSON.parse(retrieved) : initialState;
    });

    // Save state to local storage on change.
    useEffect(() => {
        if (state) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [state]);

    return [state, setState];
};

export default useLocalStorage;
