import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route
              path='/chat'
              element={
                <PrivateRoute><Chat /></PrivateRoute>
              }
            />

          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
