import _ from "lodash";
import cities from "../apis/world-cities_json.json";
import React, { Component } from "react";
import { Search } from "semantic-ui-react";
import { connect } from "react-redux";

import { setCity } from "../actions";

class CitySearch extends Component {
  state = {
    value: ""
  };

  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    const city = result.title;
    const country = result.description;

    this.setState({ value: city });
    this.props.setCity(city, country);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.title);

      this.setState({
        isLoading: false,
        results: _.slice(_.filter(cities, isMatch), 0, 5) // 5 results
      });
    }, 300);
  };

  render() {
    const { isLoading, value, results } = this.state;

    return (
      <Search
        loading={isLoading}
        onResultSelect={this.handleResultSelect}
        onSearchChange={_.debounce(this.handleSearchChange, 500, {
          leading: true
        })}
        results={results}
        value={value}
        selectFirstResult
        placeholder="Search for a city..."
        size="large"
        input={{ fluid: true }}
        fluid
      />
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {
    setCity
  }
)(CitySearch);
