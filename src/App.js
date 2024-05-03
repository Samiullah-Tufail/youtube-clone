import "./App.css";
import Header from "./Components/Header";
import VideoPlay from "./Components/VideoPlay";
import Home from "./Components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VideoSearchResult from "./Components/VideoSearchResult";
import CategoryVideos from "./Components/CategoryVideos";
import Page404 from "./Components/Page404";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path={`/video/:id`} element={<VideoPlay />} />
          <Route exact path="/search/:query" element={<VideoSearchResult />} />
          <Route exact path={`/:category`} element={<CategoryVideos />} />
          <Route exact path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
