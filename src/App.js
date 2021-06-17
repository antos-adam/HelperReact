import './App.css';
import { Route, Switch } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import Content from "./components/Content";
import Header from "./components/Header";
import Home from './components/Home';
import Setup from './components/Setup';

const history = createBrowserHistory();

function App() {
	return (
		<div className="App">
			<BrowserRouter history={history}>
				<Header />
				<Content>
					<Switch>
						<Route exact path="/" component={Home} />
            <Route exact path="/setup" component={Setup} />
					</Switch>
				</Content>
			</BrowserRouter>
		</div>
	);
}

export default App;