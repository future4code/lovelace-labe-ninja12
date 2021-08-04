import axios from 'axios'
import React from 'react'

import Filters from './filters/Filters'
import Services from './services/Services'

const { url, headers } = {
  url: 'https://labeninjas.herokuapp.com/jobs',
  headers: {headers: {
    Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
  },}
};

export class ServicesContainer extends React.Component {
  state = {
    jobs: [],
  }

  componentDidMount() {
    this.getAllJobs()
  }

  getAllJobs = async () => {
    const { data: {jobs: job} } = await axios.get(url, headers)
    this.setState({jobs: job});
    this.props.getJobs(this.state.jobs)
  }

  render() {

    return (
      <>
        <Filters />
        <Services jobs={this.state.jobs} setStateDetalhes={this.props.setStateDetalhes} getServices={this.props.getServices} />
      </>
    )
  }
}

export default ServicesContainer
