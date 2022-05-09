import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ArticleIcon from '@mui/icons-material/Article';
import Divider from '@mui/material/Divider';

function Posts(props) {
    return (
        <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    All Posts
                </Typography>
            }
        >
            <Divider />
            <div className="postsBody">
            {
                props.allPosts && props.allPosts.map(post => {
                    return <>
                        <ListItemButton key={post.id} onClick={()=>props.onPostClick(post)}>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary={post.title} />
                        </ListItemButton>
                        <Divider />
                    </>
                })}
                </div>
        </List>
    );
}

export default Posts;
