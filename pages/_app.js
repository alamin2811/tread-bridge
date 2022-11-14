import { ChakraProvider } from "@chakra-ui/react"
import { mynewtheme } from "../styles/theme";
import Header from './../src/component/core/Header/Header';



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <Header/>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;
