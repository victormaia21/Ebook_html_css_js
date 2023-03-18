import './App.css';
import Header from './components/Header'
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom'
import Main from './pages/Main/Main';
import Curso from './pages/Curso/Curso';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/material' element={<Curso/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
