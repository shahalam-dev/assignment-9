import { onAuthStateChanged } from "@firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "../firebase";
import { ProtectRoute } from "../protected-route";
import Cards from "./Cards";
import ContactUs from "./ContactUs";
import Dashboard from "./Dashboard";
import Destination from "./Destination";
import Header from "./Header";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";

const AuthContext = createContext();
export const useAuth = () => {
  return useContext(AuthContext);
};

const App = () => {
  const [user, setUser] = useState(false);
  const [error, setError] = useState("");
  const value = {
    user,
    setUser,
    error,
    setError,
  };

  //===============
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, [user]);
  //===============

  return (
    <AuthContext.Provider value={value}>
      <Router>
        <Container>
          <Header />
          <Switch>
            <Route exact path="/">
              <Cards />
            </Route>
            {/* <Route path="/destination/:id" component={Destination} /> */}
            <Route path="/signup" component={SignUpForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/contact-us" component={ContactUs} />
            <ProtectRoute path="/destination/:id" component={Destination} />
            <ProtectRoute path="/dashboard" component={Dashboard} />
          </Switch>
        </Container>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
