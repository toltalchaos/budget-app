import './App.css';
import Main from './pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import NotFound from './components/404/404';
import { AuthProvider } from './components/authentication/auth';
import Login from './components/authentication/login';
import HeaderSection from './components/header/header';


function App() {
  return (
    // https://blog.logrocket.com/react-router-v6/#:~:text=Creating%20the%20first%20route%20with%20React%20Router%20v6,first%20component%20to%20import%20from%20the%20react-router-dom%20library.
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
