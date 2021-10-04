import './ToggleButton.css';
const ToggleButton = ({ id, name, checked, onChange, disabled = false }) => {
    return (
        <div id={id} className='toggle-button-container'>
            <label className='switch-label' htmlFor={`${id}-checkbox`}>
                {name}
            </label>
            <label className='switch' disabled={disabled}>
                <input
                    id={`${id}-checkbox`}
                    type='checkbox'
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className='slider' />
            </label>
        </div>
    );
};

export default ToggleButton;
