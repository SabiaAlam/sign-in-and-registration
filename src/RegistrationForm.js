import React, { useState } from 'react';
import {
  Button, TextField, Grid, Paper, Typography, MenuItem, FormControl, InputLabel, Select, Checkbox, FormControlLabel, RadioGroup, Radio, FormLabel, Box
} from '@mui/material';

const hobbiesList = ['Reading', 'Traveling', 'Gaming', 'Cooking', 'Sports'];

const RegistrationForm = () => {
  const initialFormValues = {
    fullName: '',
    userName: '',
    password: '',
    confirmPassword: '',
    email: '',
    phoneNumber: '',
    dateOfBirth: '',
    gender: '',
    hobbies: [],
    country: '',
    agreeToTerms: false
  };

  const [formValues, setFormValues] = useState(initialFormValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormValues((prevState) => ({
      ...prevState,
      [name]: checked
    }));
  };

  const handleHobbiesChange = (e) => {
    const { value, checked } = e.target;
    setFormValues((prevState) => {
      const newHobbies = checked
        ? [...prevState.hobbies, value]
        : prevState.hobbies.filter((hobby) => hobby !== value);
      return {
        ...prevState,
        hobbies: newHobbies
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Form Values:', formValues);
  };

  const handleReset = () => {
    setFormValues(initialFormValues);
  };

  return (
    <Grid container 
           style={{ minHeight: '100vh' }}>
       <Grid item xs={12} sm={12} md={4}>
                        <Box
                            sx={{
                                height: '100%',
                                minHeight: '500px',
                                backgroundImage: 'url(./unspalsh.jpg)',
                                backgroundSize: 'cover',
                            }}
                        />
                    </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Registration Form
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  name="fullName"
                  fullWidth
                  margin="normal"
                  value={formValues.fullName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="User Name"
                  name="userName"
                  fullWidth
                  margin="normal"
                  value={formValues.userName}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  margin="normal"
                  value={formValues.password}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  fullWidth
                  margin="normal"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  type="email"
                  name="email"
                  fullWidth
                  margin="normal"
                  value={formValues.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Phone Number"
                  name="phoneNumber"
                  fullWidth
                  margin="normal"
                  value={formValues.phoneNumber}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  type="date"
                  name="dateOfBirth"
                  fullWidth
                  margin="normal"
                  value={formValues.dateOfBirth}
                  onChange={handleChange}
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" margin="normal" fullWidth>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    name="gender"
                    value={formValues.gender}
                    onChange={handleChange}
                  >
                    <FormControlLabel value="Male" control={<Radio />} label="Male" />
                    <FormControlLabel value="Female" control={<Radio />} label="Female" />
                    <FormControlLabel value="Other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl component="fieldset" margin="normal" fullWidth>
                  <FormLabel component="legend">Hobbies</FormLabel>
                  {hobbiesList.map((hobby) => (
                    <FormControlLabel
                      key={hobby}
                      control={
                        <Checkbox
                          value={hobby}
                          checked={formValues.hobbies.includes(hobby)}
                          onChange={handleHobbiesChange}
                        />
                      }
                      label={hobby}
                    />
                  ))}
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth margin="normal">
                  <InputLabel>Country</InputLabel>
                  <Select
                    name="country"
                    value={formValues.country}
                    onChange={handleChange}
                    required
                  >
                    <MenuItem value="INDIA">INDIA</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="UK">UK</MenuItem>
                    <MenuItem value="Australia">Australia</MenuItem>
    
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      name="agreeToTerms"
                      checked={formValues.agreeToTerms}
                      onChange={handleCheckboxChange}
                      required
                    />
                  }
                  label="I agree to the Terms and Conditions"
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                      Register
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button variant="outlined" color="inherit" fullWidth onClick={handleReset}>
                      Reset
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default RegistrationForm;
