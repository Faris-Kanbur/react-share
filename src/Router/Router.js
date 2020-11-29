import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Signup from '../page/Signup';
import Signin from '../page/Signin';
import Navbar from '../components/Navbar'


function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Signin path ="/register" components={Signup} />
          <Signup path ="/login" components={Signin} />
      </Switch>
     
    </Router>
  );
}

export default AppRouter;
