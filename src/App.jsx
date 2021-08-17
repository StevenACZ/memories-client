// React
import React, { useEffect } from 'react';

// Redux
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';

// Image
import memories from './images/memories.png';

// Material UI
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// Styles
import useStyles from './Styles';

// Components
import Posts from './components/Posts/Posts.jsx';
import Form from './components/Form/Form.jsx';

const App = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar className={classes.appBar} position="static" color="inherit">
				<Typography className={classes.heading} variant="h2" align="center">
					Memories
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="memories"
					height="60"
				/>
			</AppBar>

			<Grow in>
				<Container>
					<Grid
						container
						justifyContent="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
