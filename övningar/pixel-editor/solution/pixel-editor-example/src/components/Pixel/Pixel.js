import { useState } from 'react';
import './pixel.css';

function Pixel({ color }) {
    const [pixelColor, setPixelColor] = useState("#000")
    const [oldColor, setOldColor] = useState(pixelColor)
    const [canChangeColor, setCanChangeColor] = useState(true)

    function onClick() {
        setPixelColor(color)
        setCanChangeColor(false)
    }

    function onMouseOver() {
        setOldColor(pixelColor);
        setPixelColor(color);
    }

    function onMouseLeave() {
        if (canChangeColor) {
            setPixelColor(oldColor);   
        }

        setCanChangeColor(true);
    }

    return (
        <article
            className='pixel'
            onClick={ onClick }
            onMouseOver={ onMouseOver }
            onMouseLeave={ onMouseLeave }
            style={{ backgroundColor: pixelColor }}>
        </article>
    )
}

export default Pixel;