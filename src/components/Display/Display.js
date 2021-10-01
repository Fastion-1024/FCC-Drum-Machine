import './Display.css';
import VolumeDisplay from '../VolumeDisplay/VolumeDisplay';
import ToggleDisplay from '../ToggleDisplay/ToggleDisplay';
import { useGlobalContext } from '../../hooks/context';

const Display = () => {
    const { display, volume, power, activeBank } = useGlobalContext();

    return (
        <div id='display-container'>
            <VolumeDisplay value={volume} disabled={!power} />
            <ToggleDisplay disabled={!power} activeBankName={activeBank.name} />
            <h2 id='display'>{display}</h2>
        </div>
    );
};

export default Display;
