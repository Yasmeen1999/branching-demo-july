import "./style.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import Admin from "./components/Admin"
import Product from "./components/Products"

import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Navbar />

      <div>
        <Switch>
          <Route path='/products' component={Product} />
          <Route path='/admin' component={Admin} />
          <Route path='/' component={Home} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
