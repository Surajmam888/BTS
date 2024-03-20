import { useState } from "react";
import axios from "axios";
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Typography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URl } from "../../api";

const genders = ["male", "female", "other"];

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    address: "",
    city: "",
    gender: "male",
  });

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
      const response = await axios.post(`${BASE_URl}user/save`, formData);
      console.log("API Response:", response.data);
      toast.success("Registration successful!");

      setFormData({
        name: "",
        email: "",
        password: "",
        mobile: "",
        address: "",
        city: "",
        gender: "",
      });
      // You can handle the response accordingly (e.g., show a success message, redirect, etc.)
    } catch (error) {
      console.error("API Error:", error);
      toast.error("Enter Valid Email Or Email Already Register");
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      style={{ height: "750px" }}>
      <Grid item xs={10} sm={8} md={6} lg={4}>
        <Paper elevation={3} style={{ padding: 20 }}>
          <Typography variant="h5" align="center" gutterBottom>
            User Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
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
              required
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
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Address"
              variant="outlined"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="City"
              variant="outlined"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              fullWidth
              margin="normal"
            />

            <TextField
              label="Gender"
              variant="outlined"
              name="gender"
              select
              value={formData.gender}
              onChange={handleChange}
              required
              fullWidth
              margin="normal">
              {genders.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              style={{ marginTop: 20 }}>
              Register
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </Paper>
        <ToastContainer />
      </Grid>
    </Grid>
  );
};

export default Register;
