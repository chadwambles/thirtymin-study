import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Dashboard from "./Dashboard";

const code = new URLSearchParams(window.location.search).get("code");
//if proper authorization checks are passed then proceed to dashboard
//if not redirect to login component
function App() {
  return code ? <Dashboard code={code} /> : <Login />;
}

export default App;
