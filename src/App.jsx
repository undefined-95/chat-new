import './App.css';
import { AuthPage } from './pages/authentication';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/home-page';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/authentication" element={<AuthPage />} />
        <Route path="/home" element={<HomePage />} />
        {/*<Route path="*" element={<Navigate to="/authentication" />} />*/}
      </Routes>
    </div>
  );
}

export default App;
