import { useState } from "react";
import { Grid, TextField, Button, Typography, Paper } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URl } from "../../api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
      const response = await axios.post(`${BASE_URl}user/login`, formData);
      console.log("Login API Response:", response.data);

      toast.success("Login successful!");
      // clear the feild after login
      setFormData({
        email: "",
        password: "",
      });

      navigate("/dashboard");
      // You can handle the response accordingly (e.g., store user token, redirect, etc.)
    } catch (error) {
      console.error("Login API Error:", error.response.data);
      setError("Invalid email or password. Please try again.");
      toast.error("Invalid email or password. Please try again.");
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
            Login Form
          </Typography>
          <form onSubmit={handleSubmit}>
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
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/register" variant="body2">
                  Create An account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </form>
          <ToastContainer />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Login;
