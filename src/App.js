import './App.css';
import Main from './pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import NotFound from './components/404/404';
import { AuthProvider } from './components/authentication/auth';
import Login from './components/authentication/login';
import HeaderSection from './components/header/header';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={[<HeaderSection/>,<Main/>]}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
