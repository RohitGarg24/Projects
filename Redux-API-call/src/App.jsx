
import './App.css'

import PostsMainPage from './PostsLi/PostsMainPage';
import SinglePost from './PostsLi/SinglePost';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
 
  return (
    
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
