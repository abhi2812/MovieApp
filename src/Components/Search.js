import React from 'react';
import '../App.css';

class Search extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
			inputValue: ''
		}
	}
	
	onSearch = () => {
		if(this.state.inputValue.length <=2) {
			this.props.searched('LESS_THAN_3');
		}
		const url = 'https://www.omdbapi.com/?apikey=5d8a111c&s='+ this.state.inputValue +'&r=json';
		fetch(url).then(results => {
			return results.json();
		}).then(data => {
			this.setState({
				movies: data.Search
			})
			this.props.searched(data.Search);
		})
	}



	updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  render() {
		
    return (
      <div align="center">
				<input type="text" placeholder="Search for movie/tv show" name="search" align="center"
				value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
				<button onClick={this.onSearch}>Search</button>
  		</div>
    );
  }
}



export default Search;
