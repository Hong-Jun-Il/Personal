import React from 'react';
import styled, { ThemeProvider } from "styled-components";
import { initial } from './styles/Theme';
import GlobalStyles from './styles/GlobalStyles';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { useRef } from 'react';

const Sec1 = styled.section`
  background-color: aliceblue;
`

const Sec2 = styled.section`
  background-color: ${props => props.theme.like};
`

const App = () => {
  const containerRef = useRef(null)

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={initial}>
        <LocomotiveScrollProvider
          options={
            {
              smooth: true,
              // ... all available Locomotive Scroll instance options 
            }
          }
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
            <Sec1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.13">S</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.09">E</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.06">C</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.04">1</h1>
            </Sec1>
            <Sec2>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.13">S</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.09">E</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.06">C</h1>
              <h1 data-scroll data-scroll-speed="4" data-scroll-delay="0.04">2</h1>
            </Sec2>
          </main>
        </LocomotiveScrollProvider>
      </ThemeProvider>
    </>
  );
};

export default App;