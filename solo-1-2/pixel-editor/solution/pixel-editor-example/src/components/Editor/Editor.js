import { useState } from 'react';
import { TwitterPicker } from 'react-color';
import './editor.css'

import DrawingPanel from '../DrawingPanel/DrawingPanel';

function Editor() {
    const [panelWidth, setPanelWidth] = useState(16);
    const [panelHeight, setPanelHeight] = useState(16);
    const [configuration, setConfiguration] = useState(true);
    const [pixelColor, setPixelColor] = useState("#9900EF")

    function initializeDrawing() {
        setConfiguration(!configuration);
    }

    function selectPixelColor(color) {
        console.log(color);
        setPixelColor(color.hex);
    }

    return (
        <section className='editor'>
            <h1>Pixel Editor</h1>
            { configuration && <h2>Ange dimensioner</h2> }
            { configuration &&
            <form>
                <section>
                    <input type="text" placeholder="Bredd"
                    className='editor__input'
                    defaultValue={ panelWidth }
                    onChange={ (event) => { setPanelWidth(event.target.value ) } } />
                </section>
                <section>
                    <input type="text" placeholder="Höjd"
                    className='editor__input'
                    defaultValue={ panelHeight }
                    onChange={ (event) => { setPanelHeight(event.target.value ) } }  />
                </section>

                <button className="editor__button" onClick={ initializeDrawing }>Börja rita</button>
            </form>
            }
            { !configuration && <TwitterPicker className="editor__color-picker"
                                    color={ pixelColor } onChangeComplete={ selectPixelColor } /> }
            { !configuration && 
                <DrawingPanel width={ panelWidth } height={ panelHeight } pixelColor={ pixelColor }/>
            }
        </section>
    )
}

export default Editor;