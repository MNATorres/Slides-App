import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import SlideComponent from "./components/Slide/SlideComponent/SlideComponent";
import ListSlides from "./components/Slide/ListSlides/ListSlides";

function App() {
  return (
    <Box width={"100%"}>
      <Header />
      <Stack direction={'row'} width={'100%'}>
        <ListSlides />
        <SlideComponent />
      </Stack>
    </Box>
  );
}

export default App;
