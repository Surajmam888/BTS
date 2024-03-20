import { Typography, Paper, Divider, Container, Box } from "@mui/material";

const Company = () => {
  return (
    <Box sx={{ paddingTop: "100px", textAlign: "center" }}>
      <Typography variant="h2" gutterBottom>
        Company Details
      </Typography>

      <Paper
        elevation={3}
        sx={{
          maxWidth: "md",
          margin: "auto",
          padding: "20px",
          boxShadow: "5",
          maxHeight: "auto",
        }}>
        <Typography variant="h4" gutterBottom>
          Mactosys Software Technology Pvt. Ltd
        </Typography>
        <Divider sx={{ marginBottom: "20px" }} />
        <Typography variant="body1" paragraph>
          Mactosys Software Technology Pvt. Ltd is a leading provider in the
          [Industry] industry. With a commitment to excellence, we have been
          serving our clients and customers for [number of years] years.
        </Typography>
        <Typography variant="body1" paragraph>
          Mactosys Software Technology Pvt. Ltd is a leading provider in the
          [Industry] industry. With a commitment to excellence, we have been
          serving our clients and customers for [number of years] years.
        </Typography>

        <Typography variant="body1" paragraph>
          Our mission is to [mission statement]. We strive to deliver innovative
          solutions and exceed the expectations of our stakeholders.
        </Typography>

        <Typography variant="body1">
          Contact us at:{" "}
          <a href="mailto:info@abccompany.com">info@mactosyscompany.com</a>
        </Typography>
      </Paper>
    </Box>
  );
};

export default Company;
