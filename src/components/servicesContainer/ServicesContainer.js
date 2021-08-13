import axios from 'axios';
import React from 'react';

import Filters from './filters/Filters';
import Services from './services/Services';
import { StlJobContainer } from '../../styles/styles'

const { url, headers } = {
  url: 'https://labeninjas.herokuapp.com/jobs',
  headers: {
    headers: {
      Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
    },
  },
};

export class ServicesContainer extends React.Component {
  state = {
    jobs: [],
    minInputValue: '',
    maxInputValue: '',
    searchInputValue: '',
    orderInputValue: '',
  };

  componentDidMount() {
    this.getAllJobs();
  }

  getAllJobs = async () => {
    const {
      data: { jobs: job },
    } = await axios.get(url, headers);
    this.setState({ jobs: job });
    this.props.getJobs(this.state.jobs);
  };

  onChangeMinInput = ({ target }) =>
    this.setState({ minInputValue: +target.value });

  onChangeMaxInput = ({ target }) =>
    this.setState({ maxInputValue: +target.value });

  onChangeSearchInput = ({ target }) =>
    this.setState({ searchInputValue: target.value });

  onChangeOrderInput = ({ target }) =>
    this.setState({ orderInputValue: target.value });

  render() {
    const {
      onChangeMinInput,
      onChangeMaxInput,
      onChangeSearchInput,
      onChangeOrderInput,
    } = this;
    const { minInputValue, maxInputValue, searchInputValue, orderInputValue } =
      this.state;
    return (
      <StlJobContainer>
        <Filters
          onChangeMinInput={onChangeMinInput}
          onChangeMaxInput={onChangeMaxInput}
          onChangeSearchInput={onChangeSearchInput}
          onChangeOrderInput={onChangeOrderInput}
        />
        <Services
          getServices={this.props.getServices}
          jobs={this.state.jobs}
          minInputValue={minInputValue}
          maxInputValue={maxInputValue}
          searchInputValue={searchInputValue}
          orderInputValue={orderInputValue}
          setStateDetalhes={this.props.setStateDetalhes}
        />
      </StlJobContainer>
    );
  }
}

export default ServicesContainer;
