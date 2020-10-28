import logo from './logo.svg';
import './App.css';
import TestimonialCarousel from './TestimonialCarousel.js';

function App() {
  return (
    // <div className='App'>
    <div>
      <TestimonialCarousel
          content={{ backgroundColor: '#ff7c7c', title: 'Slide 1' }}
      />
    </div>
  );
}

export default App;