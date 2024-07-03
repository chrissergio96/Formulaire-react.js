import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './component';
import Form from './form';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
      <Form/>
       
      </header>
    </div>
  );
}

export default App;
