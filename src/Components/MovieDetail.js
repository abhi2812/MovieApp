import React from 'react';
import '../Grid.css';

class MovieDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataFetched: false,
      retMovie: {}
    }
	}
  
  componentWillMount() {
    this.getMovieByTitle();
  }

  getMovieByTitle = () => {
    const url = 'https://www.omdbapi.com/?apikey=5d8a111c&t='+ this.props.movie.Title +'&r=json';
		fetch(url).then(results => {
			return results.json();
		}).then(data => {
			this.setState({
        retMovie: data,
        dataFetched: true
			})
		})
  } 

  onClick = () => {
    this.props.toggle();
  }

  render() {
    const { movie } = this.props;
    console.log(this.state);
    const { dataFetched, retMovie } = this.state; 
    return (
      <div>
        {dataFetched && <div className="site">
          <div className="one">{movie.Title}<br /><button onClick={this.onClick}>Go Back</button></div>
          <div className="two"><img src={movie.Poster}/></div>
          <div className="three"><b>Plot:</b><br/>{this.state.retMovie.Plot}</div>
          <div className="four"><b>Actors:</b><br/>{retMovie.Actors}</div>
          <div className="five"><b>Cast:</b><br/>{retMovie.Awards}</div>
         <div className="six"><b>Writer:</b><br/>{retMovie.Writer}</div>
        </div>}
      </div>
    );
  }
}



export default MovieDetail;
