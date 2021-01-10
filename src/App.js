import './App.css';
import { CarouselData } from './components/CarouselData';
import ImageCarousel from './components/ImageCarousel';

function App() {
  return (
    <div className="App">
      <ImageCarousel slides={CarouselData} />
    </div>
  );
}

export default App;
