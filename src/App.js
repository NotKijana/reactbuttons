import { useState, useEffect } from 'react';
import './styles/Global.scss';
import Title from './components/title/Title';
import Header from './components/header/Header';
import Burgers from './components/burgers/Burgers';
import Footer from './components/footer/Footer';


function App() {
  const [isDarkmode, setDarkmode] = useState(window.matchMedia('prefers-color-scheme: dark'));

  useEffect(() => {
    const checkDarkMode = () => {
      if(window.matchMedia('prefers-color-scheme: dark')) {
        setDarkmode(true)
      } else {
        setDarkmode(false)
      }
    }
    checkDarkMode();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const newColorScheme = e.matches ? true : false;
      setDarkmode(newColorScheme);
    });
  }, [])
  return (
    <div className={`App ${!isDarkmode && 'light'}`}>
      <Title />
      <Header />
      <Burgers />
      <Footer />
    </div>
  );
}

export default App;