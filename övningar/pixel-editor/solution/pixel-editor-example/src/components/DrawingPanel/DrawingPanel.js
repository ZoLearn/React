import PixelRow from "../PixelRow/PixelRow";
import './drawingPanel.css';

function DrawingPanel({ width, height, pixelColor }) {
    let pixelRows = [...Array(height).keys()];

    return (
        <section className="drawing-panel">
            { pixelRows.map((pixelRow) => {
                return <PixelRow key={ pixelRow } width={ width } pixelColor={ pixelColor } />
            })}
        </section>
    )
}

export default DrawingPanel;