import "./App.css";
import { Switch, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { WelcomePage } from "./pages/WelcomePage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <RegisterPage />
      </Route>
      <Route path="/welcomePage/:name">
        <WelcomePage />
      </Route>
    </Switch>
  );
}

export default App;
