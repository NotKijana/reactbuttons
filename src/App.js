import './App.css';
import ButtonsContainer from './Containers/ButtonsContainer'
import Header from './Header/Header';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="App_welcome">
        <h2 className="App_welcome--main">
          Simple CSS-animated hamburgers
        </h2>
        <p className="App_welcome--sub">
          Click (or tap) each one to see the magic
        </p> 
      </div>
      <main className="App_container">
        <ButtonsContainer name="disappear" />
        <ButtonsContainer name="collapse" />
        <ButtonsContainer name="spin" />
        <ButtonsContainer name="stand" />
        <ButtonsContainer name="minus" />
        <ButtonsContainer name="basic" />
      </main>
    </div>
  );
}

export default App;