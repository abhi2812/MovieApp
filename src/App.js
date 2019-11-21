import React from 'react';
import './App.css';
import Search from './Components/Search';
import Movie from './Components/Movie';
import MovieDetail from './Components/MovieDetail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearched: false,
      moviesList: [],
      displayMovie: false,
      defaultMovies: []
    }
  }

  componentWillMount() {
    this.getDefaultMovies();
  }

  getDefaultMovies = () => {
    const url = 'https://www.omdbapi.com/?apikey=5d8a111c&s='+ 'men' +'&r=json';
		fetch(url).then(results => {
			return results.json();
		}).then(data => {
			this.setState({
        isSearched: false,
				defaultMovies: data.Search
			})
		})
  }

  searched = (moviesList) => {
    this.setState({
      isSearched: true,
      moviesList
    });
  }

  toggle = () => {
    this.setState({
      displayMovie: false
    })
  }

  onMovieClick = (movie) => {
    this.setState({
      displayMovie: true,
      movie
    })
  }

  render() {
    const { isSearched, moviesList, displayMovie, movie, defaultMovies } = this.state;
    const movies = isSearched ? moviesList : defaultMovies; 
    return (
      <div className="Total">
        {!displayMovie && <div className="App"><header className="App-header">
          <div className="Heading">Movie List</div>
          <Search searched={this.searched}/>
          <div align="center"><button onClick={this.getDefaultMovies}>Default</button></div>
          <Movie moviesList={movies} onMovieClick={this.onMovieClick}/>
        </header></div>}
        {displayMovie && <MovieDetail movie={movie} toggle={this.toggle}/>
        }
      </div>
    );
  }
}


export default App;
