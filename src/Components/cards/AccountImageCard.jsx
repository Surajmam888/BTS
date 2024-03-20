import { useRef } from "react";
// Image imports
import Person from "../../assets/Person.png";

// MUI component imports
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

// MUI icons import
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Skeleton } from "@mui/material";
import Loader from "../Loading/Loading";

function AccountImageCard() {
  const imageUpload = useRef();

  return (
    <>
      <Card
        sx={{
          height: 300,
          p: 1,
          boxShadow: "6px 6px 20px 0px #b4b2b240;",
        }}>
        <CardContent sx={{ display: "flex", justifyContent: "center" }}>
          <Stack spacing={2} alignItems={"center"} mt={4}>
            {Loader ? (
              <Skeleton
                animation="wave"
                variant="rounded"
                height={170}
                width={170}
              />
            ) : (
              <Box className="avatar-container">
                <Avatar variant="rounded" sx={{ height: 170, width: 170 }}>
                  <img src={Person} alt="" />
                </Avatar>
                <Box className="avatar-container-overlay"></Box>
                <CameraAltIcon
                  fontSize="large"
                  className="avatar-container-icon"
                />
                <input
                  ref={imageUpload}
                  type="file"
                  id="upload-profile-image"
                  hidden
                  // onChange={handleImage}
                />
              </Box>
            )}
            <Typography variant="h5" fontSize={"1.3rem"}>
              Account Details
            </Typography>
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}

export default AccountImageCard;
