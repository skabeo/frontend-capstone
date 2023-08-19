import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/session/LogIn';
import Logout from './components/session/LogOut';
import SignUp from './components/session/SignUp';
// import LandingPage from './components/LandingPage';
import PersistLogin from './components/session/PersistLogin';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route element={<PersistLogin />}>
          <Route
            path="/"
            element={(
              <PrivateRoute>
                <Home />
              </PrivateRoute>
          )}
          />
          <Route
            path="/signout"
            element={(
              <PrivateRoute>
                <Logout />
              </PrivateRoute>
          )}
          />
          <Route
            path="/signin"
            element={(
              <PublicRoute>
                <LogIn />
              </PublicRoute>
          )}
          />
          <Route
            path="/signup"
            element={(
              <PublicRoute>
                <SignUp />
              </PublicRoute>
          )}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
