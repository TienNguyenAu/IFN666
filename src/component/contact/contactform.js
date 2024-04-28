import React, { useState } from 'react';
import { TextField, Button, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import emailjs from '@emailjs/browser';

// Define your styled component for the form
const FormContainer = styled('form')({
  width: '100%',
  marginTop: (theme) => theme.spacing(1),
});

// Define your component
const ContactForm = () => {
  const serviceID = process.env.REACT_APP_SERVICE_ID;
  const templateID = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send form data via EmailJS
    emailjs
      .sendForm(serviceID, templateID, e.target, publicKey)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully !!!');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Error sending email:', error.text);
        }
      );
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="Your Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            id="email"
            label="Your Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            id="message"
            label="Your Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        style={{ marginTop: '20px' }}
      >
        Submit
      </Button>
    </FormContainer>
  );
};

export default ContactForm;
