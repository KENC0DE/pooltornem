import "./App.css";
import Dashboard from "./Dashboard";
import Landingpage from "./Landingpage";
import Register from "./Register";
import Login from "./Login";
import PlayerTable from "./PlayerTable";
import Contact from "./Contact";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Outlet,
  useLocation,
} from "react-router-dom";
import Tournament from "./Tournament";
import Dashheader from "./Dashheader";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/match" element={<Outlet />}>
            <Route index element={<Tournament />} />
          </Route>
          <Route path="/players" element={<Outlet />}>
            <Route index element={<PlayerTable />} />
          </Route>
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/register" element={<Outlet />}>
            <Route index element={<Register />} />
          </Route>
          <Route path="/login" element={<Outlet />}>
            <Route index element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
