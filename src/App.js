import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';

function App() {
	return (
		<>
		<Header />
		<main className='main'>
			<Home />
		</main>
		<About />
		</>
  	);
}

export default App;
