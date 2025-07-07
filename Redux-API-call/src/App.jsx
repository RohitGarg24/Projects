
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PostsMainPage from './PostsLi/PostsMainPage';
import SinglePost from './PostsLi/SinglePost';
import EditPostForm from './PostsLi/EditPostForm';
function App() {
 
  return (
    
    <Router>
      
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsMainPage />}></Route>
          <Route path="/posts/:postId" element={<SinglePost />} />
          <Route path="/editPost/:postId" element={<EditPostForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
