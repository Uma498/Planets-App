import styled from 'styled-components/macro'

export const PlanetsSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  min-height: 100vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/planets-app/planets-bg-img.png');
  padding: 30px;

  @media screen and (min-width: 768px) {
    padding: 70px;
  }
`

export const PlanetHeading = styled.h1`
  color: #f8fafc;
  text-align: center;
  font-size: 32px;
  font-family: 'Roboto';
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 42px;
    margin-bottom: 40px;
  }
`
