import React, { Component } from 'react';
import styled from 'styled-components';

const gradients = {
  blue: {
    from: '#17EAD9',    
    to: '#6078EA',
  },
  red: {
    from: '#DE1A1A',
    to: '#47161A',
  },
  lightGrey: {
    from: 'rgba(12, 12, 12, 0.03)', 
    to: 'rgba(255, 255, 255, 0.0)',
  },
};

const Page = styled.div``;

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 4rem;
  padding: 0 4rem;
`;

const Section = styled.section`
  min-height: 50rem;
  overflow: hidden;
  position: relative;
`;

const MainContentContainer = styled.div`
  padding: 2rem 0 0 0;
  position: relative;
`;

const SubContentContainer = styled.div``;

const FirstSectionMainContent = styled.div`
  margin: 2rem 1rem 6rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

const SecondSectionMainContent = styled.div`
  margin: 2rem 1rem 6rem 1rem;
  display: flex;
  justify-content: center;
`;

const MainContentPlaceholder = styled.div`
  min-height: 20rem;
`;

const SubContentPlaceholder = styled.div`
  height: 12rem;
`;

const BlueGradient = styled.div`
  background-image: linear-gradient(70deg, ${gradients.blue.from}, ${gradients.blue.to});
  position: absolute;
  top: -10vw;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transform: skewY(-10deg);
  z-index: -1;
`;

const RedGradient = styled.div`
  background-image: linear-gradient(70deg, ${gradients.red.from}, ${gradients.red.to});
  position: absolute;
  top: -10vw;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  transform: rotateY(180deg) skewY(-10deg);
  z-index: -1;
`;

const GradientBand = styled.div`
  background: rgba(12, 12, 12, 0.05);
  height: 3rem;
  bottom: 0;
  left: 0;
  right: 0;
  position: absolute;
  transform: skewY(0.5deg);
  transform-origin: 0;
`;

const OffWhiteGradient = styled.div`
  height: calc(45vw);
  background-image: linear-gradient(90deg, ${gradients.lightGrey.from}, ${gradients.lightGrey.to});
  position: absolute;
  margin-top: calc((45vw * -1));
  transform: translate(0, 150px) skewY(15deg);
  left: 0;
  right: 0;
  z-index: -2;
`;

const ReverseOffWhiteGradient = OffWhiteGradient.extend`
  transform: rotateY(180deg) translate(0, 150px) skewY(15deg);
`;

const H1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 300;
  line-height: 1.2;
`;

const P = styled.p`
  font-size: 1.5rem;
  color: #fff;
  opacity: 0.8;
  line-height: 1.5;
`;

const OverlayContainer = styled.div`
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 24px 0 rgba(0, 0, 0, 0.3);
  width: calc(600px + 0.5rem);
  padding: 1rem;
`;

const SampleImage = styled.img`
  height: 600px;
  width: 600px;
`;

class App extends Component {
  render() {
    return (
      <Page>
        <Header>
        </Header>
        <Section>
          <MainContentContainer>
            <BlueGradient>
              <GradientBand/>
            </BlueGradient>
            <FirstSectionMainContent>
              <H1>Lorem Ipsum</H1>
              <P>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</P>
              <MainContentPlaceholder/>
            </FirstSectionMainContent>
          </MainContentContainer>
          <SubContentContainer>
            <SubContentPlaceholder/>
          </SubContentContainer>
          <OffWhiteGradient/>
        </Section>
        <Section>
          <MainContentContainer>
            <RedGradient>
              <GradientBand/>
            </RedGradient>
            <SecondSectionMainContent>
              <OverlayContainer>
                <SampleImage src="http://unsplash.it/600/600"/>
              </OverlayContainer>
            </SecondSectionMainContent>
          </MainContentContainer>
          <SubContentContainer>
            <SubContentPlaceholder/>
          </SubContentContainer>
          <ReverseOffWhiteGradient/>
        </Section>
      </Page>
    );
  }
}

export default App;