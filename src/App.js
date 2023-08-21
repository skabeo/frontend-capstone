import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/pages/Home';
import LogIn from './components/session/LogIn';
import Logout from './components/session/LogOut';
import SignUp from './components/session/SignUp';
import Reservations from './components/pages/Reservations';
import AddProperties from './components/pages/AddProperties';
import Delete from './components/pages/Delete';

import PersistLogin from './components/session/PersistLogin';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';
import Sidebar from './components/Sidebar';
import Details from './components/pages/Details';
import ReserveForm from './components/pages/ReserveForm';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
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
              path="/property/:id"
              element={(
                <PrivateRoute>
                  <Details />
                </PrivateRoute>
          )}
            />
            <Route
              path="/reserve"
              element={(
                <PrivateRoute>
                  <ReserveForm />
                </PrivateRoute>
          )}
            />
            <Route
              path="/reservations"
              element={(
                <PrivateRoute>
                  <Reservations />
                </PrivateRoute>
          )}
            />
            <Route
              path="/add"
              element={(
                <PrivateRoute>
                  <AddProperties />
                </PrivateRoute>
          )}
            />
            <Route
              path="/delete"
              element={(
                <PrivateRoute>
                  <Delete />
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
    </div>
  );
}

export default App;
