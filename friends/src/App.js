import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendsProfile from "./components/FriendsProfile";
import { PrivateRoute } from "./components/PrivateRoute";
import EditFriend from "./components/EditFriend";
import AddFriend from "./components/AddFriend";


function App() {
  


  return (
    <Router>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/friends/addfriend" component={AddFriend}/>
          <PrivateRoute path="/friends/edit/:id" component={EditFriend}/>
          <PrivateRoute path="/friends" component={FriendsProfile} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
