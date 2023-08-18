import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LogIn from './components/session/LogIn';
import LogOut from './components/session/LogOut';
import SignUp from './components/session/SignUp';
// import LandingPage from './components/LandingPage';
import PersistLogin from './components/session/PersistLogin';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
  return (
    <div className="App">
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
                <LogOut />
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
        {/* <Route path="/" element={<Home />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/properties" element={<LandingPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
