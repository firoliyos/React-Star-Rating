import './App.css'
import StarRating from './components/star-rating/index'
 function App() {
  return (
    <div className="App">
      <h1>Star Rating App</h1>
      <StarRating noOfStars={10}
      />
    </div>
  );
}

export default App;
