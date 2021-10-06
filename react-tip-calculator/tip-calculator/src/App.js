import logo from './logo.svg';
import './App.css';
import TipCalculator from './TipCalculator';
import AppHeader from './Shared/header';
import NavBar from './Shared/navbar';

function App(props) {
  return (
    <div className="App">
      <AppHeader />
      <NavBar width={props.wid} />
        <TipCalculator />
      
    </div>
  );
}

export default App;
