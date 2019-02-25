import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Icon,
  Header,
  Divider,
  Popup,
  Button
} from 'semantic-ui-react';
import ls from 'local-storage';
import _ from 'lodash';

import CityButton from './CityButton';

class SavedCities extends Component {
  state = {
    savedCities: ls.get('savedCities') || []
  };

  listHistory = () => {
    const colors = [
      'red',
      'orange',
      'yellow',
      'olive',
      'green',
      'teal',
      'blue',
      'violet',
      'purple',
      'pink',
      'brown',
      'grey'
    ];

    return this.state.savedCities.map((val, i) => {
      const colorIndex = i >= colors.length - 1 ? colors.length - 1 : i;

      return <CityButton key={val.city} color={colors[colorIndex]} cityName={val.city} countryName={val.country} />;
    });
  };

  addCity = city => {
    let { savedCities } = this.state;

    // No duplicates
    if (!_.includes(savedCities, city.city)) {
      savedCities = [...savedCities, city];

      this.setState({ savedCities });

      ls.set('savedCities', savedCities);
    }
  };

  removeCity = city => {
    let savedCities = ls.get('savedCities');
    savedCities = _.remove(savedCities, city);

    this.setState({ savedCities });

    ls.set('savedCities', this.state.savedCities);
  };

  handleClick = e => {
    e.preventDefault();

    this.addCity(this.props.city);
  };

  render() {
    return (
      <Container>
        <Divider horizontal>
          <Header as="h4">
            <Icon name="save" />
            Saved cities
          </Header>
        </Divider>
        {this.listHistory()}
        <Popup
          trigger={<Button onClick={this.handleClick} icon="add" />}
          content="Add the current city to list"
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(SavedCities);
