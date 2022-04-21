import './App.css';
import Main from './pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import NotFound from './components/404/404';


function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
