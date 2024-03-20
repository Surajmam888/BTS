import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import Header from "./Components/Header";
import HomePage from "./Pages/Homepage";
import Company from "./Pages/Company/Company";
import Products from "./Pages/Products/Products";
import Contact from "./Pages/Contact/Contact";
import FAQ from "./Pages/FAQ/FAQ";
import Loader from "./Components/Loading/Loading";
import Error from "./Pages/ErrorPage/Error";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import UserSettings from "./Pages/Dashboard/Settings/Settings";
import UserProfile from "./Pages/Dashboard/Profile/Profile";
import LogoutPage from "./Pages/Login/LogoutPage";
import Support from "./Pages/Dashboard/Support/Support";
// import UpdateProfile from "./Pages/Login/Update";

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const isPrivateRoute = () => {
    const privateRoutes = [
      "/dashboard",
      "/dashboard/settings",
      "/dashboard/profile",
      "/dashboard/products",
      "/dashboard/logoutpage",
    ];
    return privateRoutes.some((route) =>
      window.location.pathname.startsWith(route)
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    };

    fetchData();
  }, [setLoading]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Box position={"relative"} overflow={"hidden"}>
          {!isPrivateRoute() && (
            <Box
              sx={{
                height: "1000px",
                width: "1154px",
                backgroundColor: "#FF7E78",
                borderRadius: "50%",
                position: "absolute",
                right: "-461px",
                top: "-857px",
              }}></Box>
          )}
          {!isPrivateRoute() && <Header />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/company" element={<Company />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/updateprofile" element={<UpdateProfile />} /> */}
            <Route path="/register" element={<Register />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/*" element={<Error />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="settings" element={<UserSettings />} />
              <Route path="profile" element={<UserProfile />} />
              <Route path="products" element={<Products />} />
              <Route path="support" element={<Support />} />
              <Route path="logoutpage" element={<LogoutPage />} />
            </Route>
          </Routes>
        </Box>
      )}
    </>
  );
}

export default App;
