// import styled from "@emotion/styled";
// import { Box, Typography } from "@mui/material";

// const ColorTypography = styled(Typography)(() => ({
//   margin: "20px 10px 10px 40px",
//   fontFamily: "Courier New monospace",
//   fontSize: "18px",
// }));

// const NewTypography = styled(Typography)(() => ({
//   fontSize: "20px",
//   margin: "20px 0px 0px 20px",
//   color: "white",
// }));

// const NewBox = styled(Box)(() => ({
//   height: "70px",
//   width: "70px",
//   backgroundColor: "red",
//   borderRadius: "50%",
//   position: "absolute",
// }));

// const ColorBox = styled(Box)(() => ({
//   height: "300px",
//   width: "300px",
//   backgroundColor: "white",
//   borderRadius: "50%",
//   boxShadow: "5",
// }));

// const Process = () => {
//   return (
//     <>
//       <Box sx={{ backgroundColor: "#FFF2EF" }}>
//         <Box
//           sx={{
//             textAlign: "center",
//             paddingTop: "40px",
//             paddingBottom: "50px",
//           }}>
//           <Typography variant="h3">Proccess We Follow</Typography>
//           <Typography
//             sx={{ fontFamily: "Courier New monospace", fontSize: "18px" }}>
//             Contrary to popular belief, Lorem Ipsum is not simply random text.
//             <br />
//             It has roots in a piece of classical 45 BC
//           </Typography>
//         </Box>
//         <Box
//           sx={{
//             display: "flex",
//             gap: "100px",
//             padding: "0px 50px 50px 185px",
//           }}>
//           <ColorBox sx={{ boxShadow: "5" }}>
//             <Typography
//               sx={{
//                 fontSize: "22px",
//                 margin: "80px 0px 0px 120px",
//                 fontWeight: "700",
//                 fontFamily: "Poppins sans-serif",
//               }}>
//               Plan
//             </Typography>
//             <ColorTypography>
//               An academic, scientific, or professional undertaking to answers a
//               research question.
//             </ColorTypography>
//           </ColorBox>
//           <ColorBox
//             sx={{
//               marginTop: "70px",
//               boxShadow: "5",
//             }}>
//             <Typography
//               sx={{
//                 fontSize: "22px",
//                 margin: "80px 0px 0px 100px",
//                 fontWeight: "700",
//                 fontFamily: "Poppins sans-serif",
//               }}>
//               Execution
//             </Typography>
//             <ColorTypography>
//               An evaluation plan outlines the evaluation approach, including the
//               focus of the evaluation.
//             </ColorTypography>
//           </ColorBox>
//           <ColorBox sx={{ boxShadow: "5" }}>
//             <Typography
//               sx={{
//                 fontSize: "22px",
//                 margin: "80px 0px 0px 110px",
//                 fontWeight: "700",
//                 fontFamily: "Poppins sans-serif",
//               }}>
//               Result
//             </Typography>
//             <ColorTypography>
//               The standard chunk of Lorem Ipsum used since the 1500s is
//               reproduced below for those.
//             </ColorTypography>
//           </ColorBox>
//           <NewBox
//             sx={{
//               marginLeft: "200px",
//               boxShadow: "50px",
//             }}>
//             <NewTypography>01</NewTypography>
//           </NewBox>
//           <NewBox
//             sx={{
//               marginLeft: "590px",
//               marginTop: "60px",
//             }}>
//             <NewTypography>02</NewTypography>
//           </NewBox>
//           <NewBox
//             sx={{
//               marginLeft: "1000px",
//             }}>
//             <NewTypography>03</NewTypography>
//           </NewBox>
//         </Box>
//       </Box>
//     </>
//   );
// };

// export default Process;

import styled from "@emotion/styled";
import { Box, Typography, Grid } from "@mui/material";

const ColorTypography = styled(Typography)({
  fontFamily: "Courier New monospace",
  fontSize: "18px",
  padding: "10px",
});

const NewTypography = styled(Typography)({
  fontSize: "20px",
  color: "white",
  marginTop: "20px",
});

const NewBox = styled(Box)({
  height: "70px",
  width: "70px",
  backgroundColor: "red",
  borderRadius: "50%",
  position: "absolute",
  // marginTop: "-302px",
  // marginLeft: "310px",
});

const ColorBox = styled(Box)({
  height: "300px",
  width: "300px",
  backgroundColor: "white",
  borderRadius: "50%",
  boxShadow: "5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const Process = () => {
  return (
    <Box sx={{ backgroundColor: "#FFF2EF", paddingBottom: "50px" }}>
      <Box
        sx={{
          textAlign: "center",
          paddingTop: "40px",
          paddingBottom: "20px",
        }}>
        <Typography variant="h3">Process We Follow</Typography>
        <Typography
          sx={{ fontFamily: "Courier New monospace", fontSize: "18px" }}>
          Contrary to popular belief, Lorem Ipsum is not simply random text.
          <br />
          It has roots in a piece of classical 45 BC
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ textAlign: "center" }}>
        {[
          {
            title: "Plan",
            description:
              "An academic, scientific, or professional undertaking to answer a research question.",
          },
          {
            title: "Execution",
            description:
              "An evaluation plan outlines the evaluation approach, including the focus of the evaluation.",
          },
          {
            title: "Result",
            description:
              "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.",
          },
        ].map((step, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ColorBox sx={{ boxShadow: "5", margin: "0 auto" }}>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  fontFamily: "Poppins sans-serif",
                }}>
                {index + 1}
              </Typography>
              <Typography
                sx={{
                  fontSize: "22px",
                  fontWeight: "700",
                  fontFamily: "Poppins sans-serif",
                  marginBottom: "10px",
                }}>
                {step.title}
              </Typography>
              <ColorTypography>{step.description}</ColorTypography>
            </ColorBox>
          </Grid>
        ))}
        {/* {[1, 2, 3].map((step, index) => (
          <Grid item key={index} xs={4}>
            <NewBox
              sx={{
                marginTop: { lg: "-302px", md: "", sm: "-940px" },
                marginLeft: { lg: "310px", md: "", sm: "244px" },
              }}>
              <NewTypography>{step}</NewTypography>
            </NewBox>
          </Grid>
        ))} */}
      </Grid>
    </Box>
  );
};

export default Process;
