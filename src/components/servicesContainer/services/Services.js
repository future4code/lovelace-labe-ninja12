import React, { Component } from 'react'
import ServiceCard from './serviceCard/ServiceCard'
import { StyledContainerServices } from './styled-services' 
import axios from 'axios'

const { url, headers } = {
  url: 'https://labeninjas.herokuapp.com/jobs',
  headers: {headers: {
    Authorization: 'a5d991d4-4742-405f-89df-b4c0b2bc0758',
  },}
};

export default class Services extends Component {
  state = {
    cart: []
  }
  
  getJobByID = async (id) => {
    const { data } = await axios.get(`${url}/${id}`, headers) 
    this.setState({cart: [...this.state.cart, data]}) 
    this.props.getServices(this.state.cart)
  }
  
  render() {
    const jobs = this.props.jobs
    const renderJobs = jobs.map((job) => {
      return (
        <ServiceCard 
          getJobByID={() => this.getJobByID(job.id)}
          key={job.id}
          jobValues={job}
          setStateDetalhes={this.props.setStateDetalhes}
        />
      )
    })
    return (
      <div>
        <StyledContainerServices>
          {renderJobs}
        </StyledContainerServices>
      </div>
    )
  }
}
