import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/AdminDashboard/Dashboard/Dashboard';
import Summary from './Pages/AdminDashboard/Summary/Summary';
import ManageEmployee from './Pages/AdminDashboard/ManageEmployee/ManageEmployee';
import CreateEmployee from './Pages/AdminDashboard/CreateEmployee/CreateEmployee';
import UpdateEmployee from './Pages/AdminDashboard/ManageEmployee/UpdateEmployee/UpdateEmployee';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route exact path="/dashboard" element={<Summary />}>
            </Route>
            <Route path="/dashboard/manageEmployee" element={<ManageEmployee />}>
            </Route>
            <Route path="/dashboard/createEmployee" element={<CreateEmployee />}>
            </Route>
          </Route>
          <Route path="/employee/update/:updateId" element={<UpdateEmployee />} />
          <Route path="/home" element={<Home />}>
          </Route>
          <Route exact path="/" element={<Home />}>
          </Route>
          {/* <Route path="/dashboard" element={<Dashboard />}>
          </Route> */}
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
