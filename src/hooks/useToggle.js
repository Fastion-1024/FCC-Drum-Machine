import { useCallback, useState } from 'react';

// Hook
// Will toggle between the two parameters.
// Defaults to booleans if no parameters are passed.
const useToggle = (initialState = true, toggleState = false) => {
    const [state, setState] = useState(initialState);

    // Define and memorize toggler function in case we pass down the component,
    // This function changes the state between the two parameters or boolean values.
    const toggle = useCallback(() => {
        setState((state) => (state === initialState ? toggleState : initialState));
    }, []);

    return [state, toggle];
};

export default useToggle;
