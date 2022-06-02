import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>
          </Route>
            <Route path="nav">
              {/* <Route path="about" element={<About/>}/>
              <Route path="services" element={<Services/>}/>
              <Route path="blog" element={<Blog/>}/>
              <Route path="contact" element={<Contact/>}/> */}
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
