import React, { Component } from 'react';
import { connect }  from 'react-redux';
import { fetchWeather } from '../actions';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.fetchWeather(this.state.term);
        this.setState({ term: ''});
    }

    render() {
        return (
        <form onSubmit={this.onFormSubmit} className="input-group">
            <input 
                className="form-control" 
                value={this.state.term} 
                onChange={this.onInputChange}
                placeholder="Get a five-day forecast in your favorite cities" />
            <span className="input-group-btn">
                <button type="submit" className="btn btn-secondary">Submit</button>
            </span>
        </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchWeather: (city) => dispatch(fetchWeather(city))
    }
}

export default connect(null,mapDispatchToProps)(SearchBar);