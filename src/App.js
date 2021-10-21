import './App.css';
import Buttons from "./buttons"


function App() {
  return (
    <div className="App">
      <main className="App_container">
        <Buttons name="disappear" />
        <Buttons name="collapse" />
        <Buttons name="spin" />
        <Buttons name="stand" />
        <Buttons name="minus" />
        <Buttons name="basic" />
      </main>
    </div>
  );
}

export default App;