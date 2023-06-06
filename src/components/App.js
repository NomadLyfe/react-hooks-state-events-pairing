import React from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import Liker from "./Liker.js";
import Content from "./Content.js";


function App() {
  return (
    <div className="App">
      <Content video={video}/>
      <Liker video={video}/>
      <Comments video={video}/>
    </div>
  );
}

export default App;
