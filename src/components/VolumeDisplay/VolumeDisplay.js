import './VolumeDisplay.css';
const VolumeDisplay = ({ value, disabled }) => {
    const current = value / 10;

    const getClassName = (index) => {
        if (disabled) return 'volume-indicator disabled';
        return `${index < current ? 'volume-indicator active' : 'volume-indicator'}`;
    };

    return (
        <div id='volume'>
            <span className={getClassName(0)} />
            <span className={getClassName(1)} />
            <span className={getClassName(2)} />
            <span className={getClassName(3)} />
            <span className={getClassName(4)} />
            <span className={getClassName(5)} />
            <span className={getClassName(6)} />
            <span className={getClassName(7)} />
            <span className={getClassName(8)} />
            <span className={getClassName(9)} />
        </div>
    );
};

export default VolumeDisplay;
