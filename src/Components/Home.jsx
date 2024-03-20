// import { Box, Button, Container, Typography } from "@mui/material";
// // import bannerimg from "../assets/Homeimg/bannerimg.png";
// import styled from "@emotion/styled";
// import banner from "../assets/Homeimg/konveer.png";
// import "./Home.css";
// import { useTheme } from "@emotion/react";

// const ColorButton = styled(Button)(() => ({
//   backgroundColor: "red",
//   "&:hover": {
//     backgroundColor: "White",
//     color: "red",
//   },
// }));

// const Home = () => {
//   const theme = useTheme();
//   return (
//     <Container>
//       <Box
//         sx={{
//           display: "flex",
//           flexDirection: { xs: "column", md: "row" },
//           gap: "20px",
//           paddingTop: "55px",
//         }}>
//         <Box
//           sx={{
//             flex: 2,
//             padding: { xs: "20px", md: "50px" },
//           }}>
//           <Typography variant="h2" sx={{ color: "" }}>
//             Creating a better <br /> IT solution.
//             <br />
//           </Typography>
//           <Typography
//             variant="body1"
//             sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
//             Popularised in the 1960s with the release of Letraset sheets
//             containing Lorem Ipsum passages, and more recently with desktop
//             publishing software like Aldus PageMaker including versions of Lorem
//             Ipsum.
//           </Typography>
//           <Box sx={{ gap: "20px", display: "flex" }}>
//             <Button
//               variant=""
//               sx={{
//                 color: "red",
//                 backgroundColor: "white",
//                 borderRadius: "10px",
//                 height: "50px",
//                 width: "100%",
//                 border: "0.5px solid grey",
//                 boxShadow: "5",
//                 [theme.breakpoints.up("md")]: {
//                   width: "200px",
//                 },
//               }}>
//               Contact Us
//             </Button>
//             <ColorButton
//               variant="contained"
//               sx={{
//                 backgroundColor: "red",
//                 color: "white",
//                 borderRadius: "10px",
//                 height: "50px",
//                 width: "100%",
//                 [theme.breakpoints.up("md")]: {
//                   width: "200px",
//                 },
//               }}>
//               Request Quote
//             </ColorButton>
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             flex: 1,
//             textAlign: "center",
//           }}>
//           <img src={banner} alt="" height={390} z width={600} />
//         </Box>
//       </Box>
//     </Container>
//   );
// };

// export default Home;

import { Box, Button, Typography } from "@mui/material";
import styled from "@emotion/styled";
import banner from "../assets/Homeimg/konveer.png";
import { useTheme } from "@emotion/react";

const ColorButton = styled(Button)(() => ({
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "white",
    color: "red",
  },
}));

const Home = () => {
  const theme = useTheme();

  return (
    <Box sx={{ margin: "0px 50px 50px 50px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: "20px",
          paddingTop: "55px",
        }}>
        <Box
          sx={{
            flex: 2,
            padding: { xs: "20px", md: "20px 50px" },
          }}>
          <Typography variant="h2" sx={{ color: "" }}>
            Creating a better <br /> IT solution.
            <br />
          </Typography>
          <Typography
            variant="body1"
            sx={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </Typography>
          <Box sx={{ gap: "20px", display: "flex" }}>
            <Button
              variant=""
              sx={{
                color: "red",
                backgroundColor: "white",
                borderRadius: "10px",
                height: "50px",
                width: "100%",
                border: "0.5px solid grey",
                boxShadow: "5",
                [theme.breakpoints.up("md")]: {
                  width: "200px",
                },
              }}>
              Contact Us
            </Button>
            <ColorButton
              variant="contained"
              sx={{
                backgroundColor: "red",
                color: "white",
                borderRadius: "10px",
                height: "50px",
                width: "100%",
                [theme.breakpoints.up("md")]: {
                  width: "200px",
                },
              }}>
              Request Quote
            </ColorButton>
          </Box>
        </Box>
        <Box
          sx={{
            flex: 1,
            textAlign: "center",
            width: { xs: "100%", md: "50%" },
          }}>
          <img src={banner} alt="" style={{ width: "100%" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
