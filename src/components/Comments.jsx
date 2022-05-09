import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';

function Comments(props) {


    return (
        <Card sx={{ maxWidth: 345 }}>
            {props.selectedPost ? <><CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.selectedPost.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.selectedPost.body}
                </Typography>
            </CardContent>
                <div className='commentsBody'>
                    {
                        props.allComments && props.allComments.map(comment => {
                            return <>
                                <ListItem>
                                    <ListItemIcon>
                                        <CommentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={comment.email}>
                                    </ListItemText>
                                    </ListItem>
                                    <span className="commentBody">{comment.body}</span>
                                <Divider />
                            </>
                        })}
                </div>
            </>
                :
                <></>
            }
        </Card>

    );
}

export default Comments;
