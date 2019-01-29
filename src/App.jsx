import React, { Component, Suspense } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import BottomNav from './components/BottomNav';
import Nav from './components/TopNav';
import styles from './App.module.scss';
import { Redirect } from 'react-router-dom';

const PictureHeader = React.lazy(() => import('./components/PictureHeader'));

const Song = {
	number: Number,
	title: String,
	verse: Array(String),
	chorus: String,
	author: String
  };

export const MainContext = React.createContext();

class App extends Component {
	state = {
		width: window.innerWidth,
		path: '/',
		pages: {
			HOME: '/',
			INDEX: '/songs',
			FAVOURITES: '/favourites',
			HISTORY: '/history',
			SETTINGS: '/settings'
		},
		title: '',
		subtitle: '',
		activeIndex: 0,
		navigate: false,
		songDisplay: "",
		songList: Array(Song),
		filteredList: Array(<div key={1} />),
		setProp: (prop, value) => {
			this.setProp(prop, value);
		},
		changePath: (path) => {
			this.changePath(path);
		},
	}

	changePath(path) {
		this.setState({ 
			navigate: !this.navigate,
			path: path,
		})
	}

	setProp(props) {
		this.setState({...props});
	}

	componentWillMount() {
		window.addEventListener('resize', this.handleWindowSizeChange);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.handleWindowSizeChange);
	}

	handleWindowSizeChange = () => {
		this.setState({ width: window.innerWidth });
	}

	render() {
		const { width, navigate } = this.state;
		const isMobile = width <= 960;

		if (navigate) {
			this.setState({ navigate: false });
			return <Redirect to={this.state.path} push={true} />
		}

		return (
			<div className={styles.app}>
				<CssBaseline />
				<MainContext.Provider value={this.state}>
					<section className={styles.app_body}>
						<Nav />
						
						<main className={styles.app_inner}>
							<Suspense fallback={<div>Loading...</div>}>
								<PictureHeader 
									title={this.state.title}
									subtitle={this.state.subtitle}
								/>
							</Suspense>
							{this.props.children}
						</main>
						
						{/* Bottom Navigation on mobile */}
						{isMobile ? <BottomNav /> : null}
					</section>
				</MainContext.Provider>
			</div>
		);
	}
}

export default App;