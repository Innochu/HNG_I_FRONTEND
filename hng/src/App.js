
import './App.css';
import LoginForm from "./LoginForm";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      
      <Routes>
      
        <Route path="/" element={<LoginForm />} />
      
      </Routes>
    </>
  );
}

export default App;
