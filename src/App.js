import './App.css';
import ButtonsContainer from './buttonsContainer';
import Header from "./header";


function App() {
  return (
    <div className="App">
      <Header />
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