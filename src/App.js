import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import Product from "./components/Product";
import Home from "./components/Home";
import Admin from "./components/Admin";
function App() {
  return (
    <div>
      <Navbar />
      <div>
        <Switch>
          <Route path="/products" component={Product} />
          <Route path="/admin" component={Admin} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
