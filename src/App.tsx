import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About, Home, Planet } from "./pages";
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{ height: "100vh", overflow: "scroll", margin: "2rem" }}>
      <img style={{ height: "30px", margin: "1rem 2rem" }} src="logo.png"></img>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/:userId" element={<About />} />
          <Route path="/planet/:name" element={<Planet />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
