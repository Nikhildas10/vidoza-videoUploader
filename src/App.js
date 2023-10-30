import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Header from './components/Header';
import Footer from './components/Footer';
import History from './pages/History';
import Singcat from './pages/Singcat';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Landing></Landing>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/history' element={<History></History>}></Route>
        <Route path='/category' element={<Singcat></Singcat>}></Route>
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
