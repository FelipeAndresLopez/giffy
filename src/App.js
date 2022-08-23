import './App.css';

import { GifList } from './components/GifList';
import { Route, Link } from 'wouter';

function App() {
	return (
		<div className="App">
			<section className="App-content">
				<Link to="/gif/colombia">Gif de colombia</Link>
				<Link to="/gif/goku">Gif de Gokú</Link>
				<Link to="/gif/rick">Gif de Rick</Link>
				<Route
					path="/gif/:keyword"
					component={GifList}
				/>
			</section>
		</div>
	);
}

export default App;
