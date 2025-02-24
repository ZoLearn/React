import loader from '../../assets/graphics/loader.png';
import './Loader.scss';

function Loader() {
    return (
        <section className="loader">
            <img src={ loader } alt="loading..." />
            <p>Ditt Kaffe bryggs...</p>
        </section>
    )
}

export default Loader;