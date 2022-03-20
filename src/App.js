import { useState } from 'react';
import './styles/index.scss';
import Burger from './components/Burger';


function App() {
  const [isDarkmode, setDarkmode] = useState(true);

  return (
    <div className={`App ${!isDarkmode && 'light'}`}>

        <header className='header'>
          <h1 className="title">
            <div className='burger inner'>
              <div className={'topping one'}></div>
              <div className={'topping two'}></div>
              <div className={'topping three'}></div>
            </div>
            
            <span className='txt-xl'>amburgers</span>
          </h1>
          <button onClick={() => setDarkmode(!isDarkmode)} className='hidden' />

          <div className="header_sub txt-center">
            <h2 className="txt-xl">
              Simple CSS-animated hamburgers
            </h2>
            <p className="txt-l">
              Click (or tap) each one to see the magic
            </p> 
          </div>
        </header>

        <main className="burgers">
          <Burger type="disappear" />
          <Burger type="collapse" />
          <Burger type="spin" />
          <Burger type="stand" />
          <Burger type="minus" />
          <Burger type="arrow" />
          <Burger type="arrowAlt" />
          <Burger type="slide" />
          <Burger type="spilled" />
          <Burger type="basic" />
        </main>
    </div>
  );
}

export default App;