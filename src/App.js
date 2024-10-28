import "./App.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Navbar } from "./components/navbar";
import { Router } from "./Routes/Router";
import { Footer } from "./components/footer";
import CarouselComponent from "./components/carousel";
import MovieList from "./components/Movielist";

function App() {
  return (
    <div>
      <Navbar />
      <CarouselComponent />
      <MovieList />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
