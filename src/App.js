import './App.css';
import Main from './pages/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom'
import NotFound from './components/404/404';
import { AuthProvider } from './components/authentication/auth';


function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}/>
        {/* <Route path="/login" element={<Login />}/> */}
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
   </AuthProvider>
  );
}

export default App;
