
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
  return (
      <div className="App">
        <div className="App-content">
          <div className="App-header">
            <Header/>
          </div>
          <div className="App-main">
            <Main/>
          </div>
          <Footer/>
        </div>
      </div>
  );
}

export default App;
