import './App.css';

import Row from './Row';
import requests from "./request";

function App() {
  return (
    <div className="app">
    <Row 
    title = "Netflix Originals"
    fetchUrl = {requests.fetchNetflixOriginals}
    />
    <Row 
    title = "Trending Now"
    fetchUrl = {requests.fetchTrending}
    />
    </div>
  );
}

export default App;


// 71e613e42481abebfa7d59225dedc583

// https://api.themoviedb.org/3/movie/550?api_key=71e613e42481abebfa7d59225dedc583

// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MWU2MTNlNDI0ODFhYmViZmE3ZDU5MjI1ZGVkYzU4MyIsInN1YiI6IjVmZDVlOGNmZTljMGRjMDAzZDVlMmI1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uNqE_Qgdv1y1F42dLnY9OrIEAn5214smQfXhZDHOH0s