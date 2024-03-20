//* mui component import
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

function ChangePassword() {
  return (
    <Box p={2}>
      <form>
        <Typography variant="h5">{"update_password"}</Typography>
        <Divider sx={{ my: 2 }} />
        <TextField
          fullWidth
          label={"old_password"}
          margin="normal"
          name="oldPassword"
          type="password"
          variant="filled"
          // {...register("old_password")}
        />
        <TextField
          fullWidth
          label={"password"}
          margin="normal"
          name="password"
          type="password"
          variant="filled"
          // {...register("password")}
        />
        <TextField
          fullWidth
          label={"confirm_password"}
          margin="normal"
          name="confirm"
          type="password"
          variant="filled"
          // {...register("password_confirmation")}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            p: 2,
          }}>
          <Button variant="contained" type="submit">
            {"update"}
          </Button>
        </Box>
      </form>
    </Box>
  );
}

export default ChangePassword;
