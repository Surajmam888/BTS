import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Container,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <Container>
      <Box sx={{ paddingTop: "100px", textAlign: "center" }}>
        <Typography variant="h2" gutterBottom>
          Frequently Asked Questions
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel1a-content"
            id="faq-panel1a-header">
            <Typography variant="h5">What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel2a-content"
            id="faq-panel2a-header">
            <Typography variant="h5">How can I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click on the
              Forgot Password link. Follow the instructions sent to your email
              to set a new password for your account.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel1a-content"
            id="faq-panel1a-header">
            <Typography variant="h5">What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel2a-content"
            id="faq-panel2a-header">
            <Typography variant="h5">How can I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click on the
              Forgot Password link. Follow the instructions sent to your email
              to set a new password for your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel1a-content"
            id="faq-panel1a-header">
            <Typography variant="h5">What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel2a-content"
            id="faq-panel2a-header">
            <Typography variant="h5">How can I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click on the
              Forgot Password link. Follow the instructions sent to your email
              to set a new password for your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel1a-content"
            id="faq-panel1a-header">
            <Typography variant="h5">What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel2a-content"
            id="faq-panel2a-header">
            <Typography variant="h5">How can I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click on the
              Forgot Password link. Follow the instructions sent to your email
              to set a new password for your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel1a-content"
            id="faq-panel1a-header">
            <Typography variant="h5">What is Lorem Ipsum?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="faq-panel2a-content"
            id="faq-panel2a-header">
            <Typography variant="h5">How can I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click on the
              Forgot Password link. Follow the instructions sent to your email
              to set a new password for your account.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Container>
  );
};

export default FAQ;
