import React, { Component } from 'react';
import ServiceCard from './serviceCard/ServiceCard';
import { StyledContainerServices } from './styled-services';

export default class Services extends Component {
  render() {
    const {
      minInputValue,
      maxInputValue,
      searchInputValue,
      orderInputValue,
      setStateDetalhes,
    } = this.props;

    const listJobs = () => {
      let finalJobs = [...this.props.jobs];

      if (minInputValue) {
        const minPrice = +minInputValue;
        finalJobs = finalJobs.filter(({ price }) => price >= minPrice);
      }

      if (maxInputValue) {
        const maxPrice = +maxInputValue;
        finalJobs = finalJobs.filter(({ price }) => price <= maxPrice);
      }

      if (searchInputValue) {
        const search = searchInputValue.toUpperCase().trim();

        finalJobs = finalJobs.filter(({ title }) =>
          title.toUpperCase().includes(search)
        );
      }

      if (orderInputValue) {
        const caixaBaixa = orderInputValue.toLowerCase();
        const numerosOrdenados = finalJobs
          .map(({ price }) => price)
          .sort((a, b) => a - b);
        const titulosOrdenados = finalJobs.map(({ title }) => title).sort();

        finalJobs = finalJobs.reduce((acc, obj, index) => {
          if (caixaBaixa === 'maior valor') {
            const produtoOrdenado = {
              ...obj,
              price: numerosOrdenados.reverse()[index],
            };
            return [...acc, produtoOrdenado];
          }

          if (caixaBaixa === 'menor valor') {
            const produtoOrdenado = {
              ...obj,
              price: numerosOrdenados[index],
            };
            return [...acc, produtoOrdenado];
          }

          if (caixaBaixa === 'título') {
            const produtoOrdenado = {
              ...obj,
              title: titulosOrdenados[index],
            };
            return [...acc, produtoOrdenado];
          }

          return acc;
        }, []);
      }

      return finalJobs.map((job) => (
        <ServiceCard
          key={job.id}
          jobValues={job}
          setStateDetalhes={setStateDetalhes}
        />
      ));
    };
    return (
      <div>
        <StyledContainerServices>{listJobs()}</StyledContainerServices>
      </div>
    );
  }
}
