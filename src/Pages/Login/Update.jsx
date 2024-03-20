import { useState } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URl } from "../../api";

const UpdateProfile = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(`${BASE_URl}/user/update`, formData);
      console.log("Update API Response:", response.data);

      navigate("/dashboard");
      // You can handle the response accordingly (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("Update API Error:", error.response.data);
      setError("Error updating profile. Please try again.");
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "100vh" }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" align="center" gutterBottom>
            Update Profile
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Email"
              variant="outlined"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Password"
              variant="outlined"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Mobile"
              variant="outlined"
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />

            {error && (
              <Typography
                variant="body2"
                color="error"
                align="center"
                style={{ margin: "10px 0" }}>
                {error}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}>
              Update Profile
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default UpdateProfile;
