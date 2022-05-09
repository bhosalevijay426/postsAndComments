import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Posts from './components/Posts';
import Comments from './components/Comments';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [allPosts, setPosts] = React.useState(null);
  const [comments, setComments] = React.useState(null);
  const [selectedPost, setSelectedPost] = React.useState(null);
  const [title, setTitle] = React.useState("")
  const [body, setBody] = React.useState("")

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then(response => {
      if (response.ok) return response.json()
      throw response;
    }).then(data => {
      setPosts(data);
    }).catch(error => {
      console.log(error);
    })

  }, []);
  const handlePostClick = (item) => {
    setSelectedPost(item);
    fetch("https://jsonplaceholder.typicode.com/comments?postId=" + item.id).then(response => {
      if (response.ok) return response.json()
      throw response;
    }).then(data => {
      setComments(data);
    }).catch(error => {
      console.log(error);
    })
  }
  const addPost = () => {
    if (title !== "") {
      let post = {
        "userId": 1,
        "id": allPosts.length + 1,
        "title": title,
        "body": body
      }
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
      }).then(response => {
        setPosts([...allPosts,post])
        alert("Post Created");
      })
    }
    else {
      alert("Please add some title");
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Posts and Comments
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div className='postsAndComments'>
        <Posts className="posts" onPostClick={(post) => handlePostClick(post)} allPosts={allPosts}></Posts>
        <Comments className="comments" selectedPost={selectedPost} allComments={comments}></Comments>
      </div>
      <div className='spacer'></div>
      <div className='addPost'>
        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={e => setTitle(e.target.value)}
        />
        <TextField
          className='postComment'
          id="filled-multiline-static"
          label="Post"
          multiline
          rows={4}
          onChange={e => setBody(e.target.value)}
        />
        <Button variant="contained" onClick={addPost}>Add Post</Button>
      </div>
    </>
  );
}

export default App;
