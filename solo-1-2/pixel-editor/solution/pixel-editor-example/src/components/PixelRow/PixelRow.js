import Pixel from "../Pixel/Pixel";

function PixelRow({ width, pixelColor }) {
    let pixels = [...Array(width).keys()];

    return (
        <section>
            { pixels.map((pixel) => {
                return <Pixel key={ pixel } width={ width } color={ pixelColor } />
            })}
        </section>
    )
}

export default PixelRow;