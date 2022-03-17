import { useState } from 'react';
import './styles/index.scss';
import BurgerContainer from './components/BurgerContainer';
import Burger from './components/Burger';


function App() {
  const [isDarkmode, setDarkmode] = useState(true);

  return (
    <div className={`App ${!isDarkmode && 'light'}`}>
        <header>
              <Burger currentClass="header_button open" burgerType='header' />
              <h1 className="">amburgers</h1>
              <button onClick={() => setDarkmode(!isDarkmode)} />
        </header>

        <div className="">
          <h2 className="">
            Simple CSS-animated hamburgers
          </h2>
          <p className="">
            Click (or tap) each one to see the magic
          </p> 
        </div>

        <main className="">
          <BurgerContainer burgerType="disappear" />
          <BurgerContainer burgerType="collapse" />
          <BurgerContainer burgerType="spin" />
          <BurgerContainer burgerType="stand" />
          <BurgerContainer burgerType="minus" />
          <BurgerContainer burgerType="basic" />
        </main>
    </div>
  );
}

export default App;