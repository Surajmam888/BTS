import { useState, useEffect } from "react";
import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Divider,
} from "@mui/material";
import Loader from "../../../Components/Loading/Loading";
import { BASE_URl } from "../../../api";

const UserProfile = () => {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    // Simulating data fetching from an API
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URl}user/fetch`);
        const data = await response.json();
        setUsersData(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  // const handleStatusChange = (userId) => {
  //   // Update the user status locally (you can also send an API request to update on the server)
  //   setUsersData((prevUsersData) => {
  //     const updatedUsers = prevUsersData.map((user) => {
  //       if (user._id === userId) {
  //         return { ...user, status: user.status === 0 ? 1 : 0 };
  //       }
  //       return user;
  //     });
  //     return updatedUsers;
  //   });
  // };

  const handleStatusChange = async (userId) => {
    try {
      // Update the user status locally while waiting for the API response
      setUsersData((prevUsersData) => {
        const updatedUsers = prevUsersData.map((user) => {
          if (user._id === userId) {
            return { ...user, status: user.status === 0 ? 1 : 0 };
          }
          return user;
        });
        return updatedUsers;
      });

      // Send API request to update user status on the server
      // const response = await fetch(`${BASE_URl}user/update/${userId}`, {
      //   method: "PATCH",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     status: updatedUsers.find((user) => user._id === userId).status,
      //   }),
      // });

      // if (!response.ok) {
      //   // Handle error, maybe revert the local state change
      //   console.error("Failed to update user status on the server");
      //   // You might want to revert the local state change in case of an error
      //   setUsersData((prevUsersData) => {
      //     const revertedUsers = prevUsersData.map((user) => {
      //       if (user._id === userId) {
      //         return { ...user, status: user.status === 0 ? 1 : 0 };
      //       }
      //       return user;
      //     });
      //     return revertedUsers;
      //   });
      // }
    } catch (error) {
      console.error("Error updating user status:", error);
    }
  };

  return (
    <Grid justifyContent="center" sx={{ margin: "0px", padding: "0px" }}>
      <Grid item xs={12} sm={10} md={8} lg={12}>
        <Typography variant="h4">User Details</Typography>
        <Divider sx={{ margin: "20px" }} />
        {usersData.length > 0 ? (
          <TableContainer component={Paper}>
            <Table>
              <TableHead sx={{ backgroundColor: "#aaaa", color: "white" }}>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Role</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {usersData.map((user) => (
                  <TableRow key={user._id}>
                    <TableCell>{user.name}</TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>{user.mobile}</TableCell>
                    <TableCell>{user.address}</TableCell>
                    <TableCell>{user.city}</TableCell>
                    <TableCell>{user.gender}</TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      {user.status === 1 ? "Active" : "Inactive"}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outlined"
                        onClick={() => handleStatusChange(user._id)}
                        style={{
                          backgroundColor: user.status === 1 ? "green" : "red",
                          color: "white",
                        }}>
                        {user.status === 1 ? "Active" : "Inactive"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <Typography variant="body2" color="textSecondary" component="p">
            <Loader />
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default UserProfile;
