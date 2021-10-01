import React from 'react';

const ToggleDisplay = ({ disabled, activeBankName }) => {
    const getClassName = (id) => {
        if (disabled) return 'bank-indicator disabled';
        return `${activeBankName === id ? 'bank-indicator active' : 'bank-indicator'}`;
    };

    return (
        <div id='toggle-display-container'>
            <h4 className={getClassName('Bank 1')}>Bank1</h4>
            <h4 className={getClassName('Bank 2')}>Bank2</h4>
        </div>
    );
};

export default ToggleDisplay;
