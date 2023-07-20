import { useState } from 'react';
import './ToggleComponent.css'

const ToggleComponent = () => {

    const [visible, setVisible] = useState(false);

    const toggleFunc = () => {
        setVisible(!visible)
    }

    return (
        <div className='toggleComponent'>
            <h1>Toggle Component</h1>
            <button onClick={toggleFunc}>Toggle Text</button>
            {visible && <p>Button clicked..!</p>}
            
        </div>
    );
};

export default ToggleComponent;