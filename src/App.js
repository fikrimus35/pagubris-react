import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthRoute from "./routes/AuthRoute";
import { MENU_LIST } from "./utils/constants";
import PrivateRoute from "./routes/PrivateRoute";
import Timeline from "./pages/Timeline";

const App = () => {
  return (
    <Router>
      <Navbar list={MENU_LIST} />
      <Switch>
        {/* <Route path="/linimasa" component={Timeline} /> */}
        <PrivateRoute path="/linimasa" component={Timeline} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
        {/* <Route path="*" component={Home} /> */}
      </Switch>
    </Router>
  );
};

export default App;
