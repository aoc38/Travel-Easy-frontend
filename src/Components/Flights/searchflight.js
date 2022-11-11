import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FlightForm from './flight-form';
import FlightList from './flightlist';
import './searchflight.css';

class SearchFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showList: false,
            passengers: [1,2,3,4,5]
        }

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }
    onSearch = () => {
        this.setState({showList : true});
    }

    handleChange = (event) => {
      this.setPassengers(event.target.value);
    };

    render() {
        return (
            <div>
                <div className="row">

               <div className="col-md-3 border-right ml-4"><FlightForm onSearchFilterList={this.onSearch}  onPassengersChange={this.handleChange}/></div>
               <div className="col-md-8 scroll-vertical mt-3">{!this.state.showList ? <FlightList /> : ''}</div>
               </div>
            </div>
        );
    }
}

SearchFlight.propTypes = {

};

export default SearchFlight;