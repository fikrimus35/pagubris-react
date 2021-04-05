import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import AuthRoute from "./routes/AuthRoute";
import { MENU_LIST } from "./utils/constants";
import PrivateRoute from "./routes/PrivateRoute";
import Timeline from "./pages/Timeline";
import PostThread from "./pages/PostThread";
import ViewAnswer from "./pages/ViewAnswer";
import PostAnswer from "./pages/PostAnswer";
import Completed from "./pages/Completed";
import Category from "./pages/Category";

const App = () => {
  return (
    <Router>
      <div className="">
        <Navbar list={MENU_LIST} />
      </div>
      <Switch>
        <PrivateRoute path="/kategori" component={Category} />
        <PrivateRoute path="/telah-selesai" component={Completed} />
        <PrivateRoute path="/answer" component={ViewAnswer} />
        <PrivateRoute path="/post-answer" component={PostAnswer} />
        <PrivateRoute path="/post-thread" component={PostThread} />
        <PrivateRoute path="/linimasa" component={Timeline} />
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={SignUp} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
