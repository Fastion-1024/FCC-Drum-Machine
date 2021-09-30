const VolumeSlider = ({ initialValue, min = 0, max = 100, step = 1, update, disabled }) => {
    return (
        <div>
            <input
                type='range'
                min={min}
                max={max}
                step={step}
                value={initialValue}
                onChange={(e) => update(e.target.value)}
                disabled={disabled}
            />
        </div>
    );
};

export default VolumeSlider;
