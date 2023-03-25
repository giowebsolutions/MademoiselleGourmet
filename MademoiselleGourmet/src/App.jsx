import '../src/assets/styles/App.scss'
import 'normalize.css';
import Header from './template/Header';
import Card from './components/Card';
import Home from './pages/Home';
import Footer from './template/Footer';


function App() {


  return (
    <div className="App">
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default App
