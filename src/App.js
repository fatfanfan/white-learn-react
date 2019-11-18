import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

function Welcome() {
  return <div>Welcome</div>
}
function Home() {
  return <div>Home</div>
}
function About() {
  let match = useRouteMatch(0);
  return(

    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>

 
  )


      <Switch>
        <Route path={`${match.path}/:Id`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  )
}

function Topic() {
  let { Id } = useParams();
  return <div>{ Id }</div>

}
export default function App() {
  return(
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/welcome">welcome</Link></li>
          <li><Link to="/about">about</Link></li>
        </ul>



        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>

    </Router>
  )
}
