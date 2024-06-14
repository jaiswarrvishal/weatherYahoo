import './App.css';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './PageNotFound';
import AllProducts from './AllProducts';
import Home from './Home';
import Mapping from './components/Mapping';
import YahooWeatherApp from './YahooWeatherApp';
import AppWeather from './AppWeather';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/all-products' element={<AllProducts />} />
        <Route path='/mapping' element={<Mapping students={["veer", "heer", "niheer"]} age="28" />} />
        <Route path='/weather-app' element={<YahooWeatherApp />} />
        <Route path='/app-weather' element={<AppWeather />} />
      </Routes>
    </div>
  );
}

export default App;
