import React, { Component } from 'react'
import ServiceCard from './serviceCard/ServiceCard'
import { StyledContainerServices } from './styled-services'

export default class Services extends Component {
  render() {
    const jobs = this.props.jobs

    const renderJobs = jobs.map((job) => {
      return (
        <ServiceCard
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
