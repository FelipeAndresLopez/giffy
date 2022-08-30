import './App.css';

import { SearchResults } from './pages/SearchResults';
import { Route, Link } from 'wouter';
import Home from './pages/Home';
import { GifDetails } from './pages/GifDetails';
import { StaticContext } from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';

function App() {
	return (
		<StaticContext.Provider value={{
			name: 'andres',
			webPage: 'felipeandreslopez.com'
		}}>
			<div className="App">
				<section className="App-content">
					<Link to="/">🏠 Home</Link>
					<GifsContextProvider>
						<Route
							path="/"
							component={Home}
						/>
						<Route
							path="/gif/:id"
							component={GifDetails}
						/>
						<Route
							path="/search/:keyword"
							component={SearchResults}
						/>
					</GifsContextProvider>
				</section>
			</div>
		</StaticContext.Provider>
	);
}

export default App;
