import { useNavigate } from 'react-router-dom';
import './Home.scss';
import logo from '../assets/graphics/airbean-landing.svg';
import { useEffect } from 'react';

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/menu');
    }, 1500);
  }, []);

  return (
    <main
      className='home'
      onClick={() => {
        navigate('/menu');
      }}
    >
      <img src={logo} alt='Logo' />
    </main>
  );
}

export default Home;
