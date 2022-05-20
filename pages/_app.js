import { createGlobalStyle, ThemeProvider } from 'styled-components'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import Table from './components/Table';
import { resetServerContext } from "react-beautiful-dnd"
import 'react-tabs/style/react-tabs.css';
import { useMediaQuery } from 'react-responsive'


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

export default function App({ Component, pageProps }) {
 
  const isWindowBig  = useMediaQuery({ query: '(min-width: 1250px)' })

  return (
    <>
    <html lang="en"></html>
    <GlobalStyle />
        <DndProvider backend={HTML5Backend}>
      
          <title style={{display: "flex",color: "#231F20", fontSize: "3.8rem", fontWeight:"800", padding: 16, minHeight: "50px", justifyContent:"center"}}>
            Chapman Four Year Scheduler
          </title>
          <h2 style={{display: "flex",color: "#A50034", fontSize: "1.6rem", padding: 8, minHeight: "50px", justifyContent:"center"}}> 
            Major: Software Engineering
          </h2>

          {isWindowBig ? <Table/> :
            <h2 style={{ display: "flex", padding: 16 ,margin: "15", fontSize:"2rem", color: "#A50034", minHeight: "50px", justifyContent:"center"}}>
              Sorry this part of the page is only viewable on a larger device
            </h2>
          }
            
        </DndProvider>
      
    </>
  )
}
resetServerContext()
