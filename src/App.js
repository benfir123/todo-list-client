import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import GlobalStyles from "./components/styles/Global";

const theme = {
  colors: {
    header: "#FFFFFF",
    main: "#FFFFFF",
    footer: "#F2F2F2",
    heading: "#6FC5A6",
    button: "#6FC5A6",
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Main />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

export default App;
