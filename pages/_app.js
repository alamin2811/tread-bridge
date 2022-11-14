import { ChakraProvider } from "@chakra-ui/react"
import LayoutWrapper from "../src/component/core/LayoutWrapper/LayoutWrapper";
import { mynewtheme } from "../styles/theme";



function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={mynewtheme}>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ChakraProvider>
  )
}

export default MyApp;
