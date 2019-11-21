import React from 'react';
import '../App.css';

function ListItem(props) {
	console.log('li',props.movie);
	return <li className="Rap" onClick={() => props.onClick(props.movie)}>{props.value}</li>;
}
  
function NumberList(props) {
	const movies = props.movies;
	const listItems = movies.map((movie) =>
		<ListItem key={movie.Title} value={movie.Title} onClick={props.onClick} movie={movie} />
	);
	return (
			<ul>
			{listItems}
			</ul>
	);
}

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			list: [],
			movies: []
    }
	}
	
	componentDidMount() {
		for(let i = 1; i<=1; i++) {
			const url = 'https://www.omdbapi.com/?i=tt3896198&apikey=5d8a111c'+ '&page='+ {i};
			fetch(url).then(results => {
				return results.json();
			}).then(data => {
				let movie = data;
				this.setState((prevState) => {
					return {
						movies: [...prevState.movies, movie]
					}
				})
				console.log(this.state.movies);
				return movie;
			})
		}
	}

	componentWillUnmount() {
		this.state.movies.forEach(movie => {
			console.log(movie);
		});
	}
  render() {
		const { movies } = this.props;
    return (
      <div className="App">
				<NumberList numbers={movies}></NumberList>
      </div>
    );
  }
}



export default List;
