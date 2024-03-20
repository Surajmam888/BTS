import Home from "../Components/Home";
import { Box } from "@mui/material";
import Product from "../Components/Product";
import Test from "../Components/Test";
import Footer from "../Components/Footer";
import CloudService from "../Components/CloudService";
import Process from "../Components/Process";
// import Services from "../Components/Services";

const HomePage = () => {
  return (
    <>
      <Box>
        <Home />
      </Box>
      {/* <Box>
        <Support />
      </Box> */}
      <Box>
        <Product />
      </Box>
      {/* <Box>
        <Services />
      </Box> */}
      <Box>
        <CloudService />
      </Box>
      <Box>
        <Process />
      </Box>
      <Box>
        <Test />
      </Box>
      <Box>
        <Footer />
      </Box>
    </>
  );
};

export default HomePage;
