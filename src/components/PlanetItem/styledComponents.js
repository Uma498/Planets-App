import styled from 'styled-components/macro'

export const PlanetItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const PlanetImage = styled.img`
  width: 200px;
  height: 200px;

  @media screen and (min-width: 768px) {
    width: 400px;
    height: 300px;
  }
`

export const PlanetName = styled.h1`
  color: #f8fafc;
  font-size: 24px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 28px;
    margin-top: 40px;
  }
`

export const PlanetDescription = styled.p`
  color: #f1f5f9;
  text-align: center;
  font-size: 14px;
  font-family: 'Roboto';
  max-width: 700px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 20px;
  }
`
