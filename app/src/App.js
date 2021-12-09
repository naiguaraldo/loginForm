import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from './routes/Home'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
