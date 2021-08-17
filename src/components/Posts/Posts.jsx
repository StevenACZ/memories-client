// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Material UI
import { Grid, CircularProgress } from '@material-ui/core';

// Styles
import useStyles from './Styles';

// Components
import Post from './Post/Post.jsx';

function Posts() {
	const classes = useStyles();
	const posts = useSelector(state => state.posts);

	console.log(posts);

	return !posts.length ? (
		<CircularProgress />
	) : (
		<Grid className={classes.mainContainer} alignItems="stretch" spacing={3}>
			{posts.map(post => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post {...post} />
				</Grid>
			))}
		</Grid>
	);
}

export default Posts;
