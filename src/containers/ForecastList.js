import React, { Component } from 'react';
import { connect } from 'react-redux';
import SparkLinesForecast from '../components/chart';
import GoogleMap from '../components/googlemap';

class Forecastfirst extends Component {
    
    renderWeather(data) {
        const name = data.city.name;
        const first = data.list[0];

        const tempF = data.list.map( forecast => forecast.main.temp - 273.15 );
        const pressureF = data.list.map ( forecast => forecast.main.pressure );
        const humidityF = data.list.map ( humidity => humidity.main.humidity );
        
        const tempSpark = SparkLinesForecast({forecast: tempF, color: "blue", unit: String.fromCharCode(8451)});
        const pressureSpark = SparkLinesForecast({forecast: pressureF, color: "red", unit: "hPa"});
        const humiditySpark = SparkLinesForecast({forecast: humidityF, color: "green", unit: "%"});
        const { lon, lat } = data.city.coord;

        return (
        <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td><td>{tempSpark}</td><td>{pressureSpark}</td><td>{humiditySpark}</td>
        </tr>
        )
    }    
    
    render() {

        return (
            <table className="table table-hover">
            <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature</th>
                    <th>Pressure</th>
                    <th>Humidity</th>
                </tr>
            </thead>
            <tbody>
                {this.props.weather.map(data => this.renderWeather(data))}
            </tbody>
            </table>
        );
    }
}

// syntactic sugar 
// function mapStateToProps(state) {
function mapStateToProps({weather}) {
    return {
        weather
    }

}

export default connect(mapStateToProps,null)(Forecastfirst);