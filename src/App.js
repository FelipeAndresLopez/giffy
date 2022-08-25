import './App.css';

import { GifList } from './components/GifList';
import { Route, Link } from 'wouter';
import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<section className="App-content">
				<Link to="/">🏠 Inicio</Link>
				<Route
					path="/"
					component={Home}
				/>
				<Route
					path="/gif/:keyword"
					component={GifList}
				/>
			</section>
		</div>
	);
}

export default App;
