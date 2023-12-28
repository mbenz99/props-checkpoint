import logo from './logo.svg';
import './App.css';
import PlayerList from './component/PlayerList';


import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <>
    <div className='p-5 d-flex flex-column align-items-center bg-dark fs-2 text-light'> <PlayerList /> </div>
    
    </>
  );
}

export default App;
