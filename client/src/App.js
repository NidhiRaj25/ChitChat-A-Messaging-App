import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AccountProvider from "./context/AccountProvider";
// import { BrowserRouter as Routes, Router, Route } from "react-router-dom";
// import Loginform from "./components/account/Loginform";
// import Signup from "./components/account/Signup";
// import Home from "./components/account/Home";
function App() {
  const clientId =
    "23836588601-5m8e4gh2m8cd50in91t2otkj99aqoqtr.apps.googleusercontent.com";

  return (

    
    <GoogleOAuthProvider clientId={clientId} className="App">
      {/* <div>
        <Router>
          <Routes>
            <Route path="/" element={<Loginform />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div> */}

      {/* wrapping whole project with AccountProvider  */}
      {/* to wrapping the messenger we have to forword the messenger(children) */}
      <AccountProvider>
        <Messenger />
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;

// WE CAN PASS DATA to COMPONENTS in TWO WAYS:
// 1. AS A PROP 2. FORWARD CHILDREN
