import React from 'react';
import '../App.css';


function ListItem(props) {
	return (
		<li className="hvr-grow" onClick={() => props.onClick(props.movie)}>
			<div>{props.movie.Title}</div>
			<div className="Content">{props.movie.Year}</div>
			<div className="Content">{props.movie.Type}</div>
		</li>
	);
}
  
function NumberList(props) {
	const movies = props.movies;
	if(movies === 'LESS_THAN_3') {
		return (
			<div className="error">Enter atleast 3 characters for search</div>
		)
	}
	if (!movies) {
		return (
			<div className="error">There is no movie that matches this criteria</div>
		)
	}
	const listItems = movies.map((movie) =>
		<ListItem key={movie.Title} value={movie.Title} onClick={props.onClick} movie={movie} />
	);
	return (
			<ul>
			{listItems}
			</ul>
	);
}

class Movie extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}
	
	onClick = (movie) => {
		this.props.onMovieClick(movie);
		console.log('movie', movie);
	}

  render() {
		const { moviesList } = this.props;
		console.log(moviesList, this.props);
    return (
      <div className="App">
				<NumberList movies={moviesList} onClick={this.onClick}></NumberList>
      </div>
    );
  }
}



export default Movie;
