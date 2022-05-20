import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Body from './Body'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DragDrop from './components/DradDrop';
import Testing from './Testing';
import { resetServerContext } from "react-beautiful-dnd"
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState, useCallback, useEffect } from 'react';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 2;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Merriweather Sans', sans-serif;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

// Hook
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });


  useEffect(() => {
    // only execute all the code below in client side
    if (typeof window !== 'undefined') {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
      console.log(window.innerWidth);
    
      // Add event listener
      window.addEventListener("resize", handleResize);
     
      // Call handler right away so state gets updated with initial window size
      handleResize();
    
      // Remove event listener on cleanup
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

export default function App({ Component, pageProps }) {
  const size = useWindowSize();
  console.log(size);

  const [isDesktop, setDesktop] = useState(size.innerWidth > 650);

  const updateMedia = () => {
    setDesktop(size.innerWidth > 650);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  

  return (
    <>
    <GlobalStyle />
        <DndProvider backend={HTML5Backend}>
          {/* <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider> */}
          <div>
          {/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="home" title="Home">
              
            </Tab>
            <Tab eventKey="profile" title="Profile">
             
            </Tab>
            <Tab eventKey="contact" title="Contact" disabled>
              
            </Tab>
          </Tabs> */}
          {/* useEffect() */}
          

            <div >
              <h1 style={{display: "flex",color: "#231F20", fontSize: "3.8rem", fontWeight:"800", padding: 8, minHeight: "50px", justifyContent:"center"}}>
                Chapman Four Year Scheduler</h1>
              
              <h2 style={{display: "flex", color: "#A50034", fontSize: "1.6rem", padding: 8, minHeight: "50px", justifyContent:"center"}}>
                Major: Software Engineering</h2>
            </div>
            {/* {isDesktop ? ( */}
              <Testing/> 
              {/* ):(  */}
                {/* <h2 style={{display: "flex", padding: 16 ,margin: "0 0 8px 0",color: "red", minHeight: "50px", justifyContent:"center"}}
                >Sorry this part of the page is only viewable on a larger device</h2>
              )} */}
              {/* <DragDrop/> */}
          </div>
        </DndProvider>
      
    </>
  )
}

resetServerContext()