// React
import React from 'react';

// Image
import memories from './images/memories.png';

// Material UI
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';

// Components
import Posts from './components/Posts/Posts.jsx';
import Form from './components/Form/Form.jsx';

const App = () => {
	return (
		<Container maxWidth="lg">
			<AppBar position="static" color="inherit">
				<Typography variant="h2" align="center">
					Memories
				</Typography>
				<img src={memories} alt="memories" heigth="60" />
			</AppBar>

			<Grow in>
				<Container>
					<Grid
						container
						justify="space-between"
						alignItems="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Posts />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
