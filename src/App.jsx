import { Outlet } from "react-router-dom";
import "./App.css";
import SmoothScroll from "./Components/SmoothScroll";

function App() {
  return (
    <SmoothScroll>
      <div>
        <Outlet />
      </div>
    </SmoothScroll>
  );
}

export default App;
