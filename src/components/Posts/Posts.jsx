// React
import React from 'react';

// Styles
import useStyles from './Styles';

// Components
import Post from './Post/Post.jsx';

function Posts() {
	const classes = useStyles();

	return (
		<div>
			<h1>Posts</h1>
			<Post />
		</div>
	);
}

export default Posts;
