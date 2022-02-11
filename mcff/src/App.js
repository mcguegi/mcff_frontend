import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Router>
      <Header></Header>
        <Routes>
          <Route path="/chats">
            Chats
          </Route>
          <Route path="/">
            Home
          </Route>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
