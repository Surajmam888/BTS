import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";

const MainSection = () => {
  return (
    <Container sx={{ paddingTop: "100px" }}>
      <Outlet />
    </Container>
  );
};

export default MainSection;
