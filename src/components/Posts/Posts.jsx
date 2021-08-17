// React
import React from 'react';

// Redux
import { useSelector } from 'react-redux';

// Styles
import useStyles from './Styles';

// Components
import Post from './Post/Post.jsx';

function Posts() {
	const classes = useStyles();
	const posts = useSelector(state => state.posts);

	console.log(posts);

	return (
		<div>
			<h1>Posts</h1>
			<Post />
		</div>
	);
}

export default Posts;
