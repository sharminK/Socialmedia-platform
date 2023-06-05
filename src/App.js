import "./App.css";
import Auth from "./container/auth/Auth";
import Home from "./container/home/Home";
import Profile from "./container/profile/Profile";

function App() {
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <Home />
      {/* <Profile /> */}
      {/* <Auth /> */}
    </div>
  );
}

export default App;
