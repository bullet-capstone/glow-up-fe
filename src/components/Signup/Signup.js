import { useState } from "react"
import './Signup.css'
import {FormControl,OutlinedInput,InputAdornment,InputLabel,IconButton, Button,TextField,FormHelperText} from "@mui/material"
import {Visibility,VisibilityOff} from '@mui/icons-material';

export default function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
    usernameError:false,
    emailError:false,
    passwordError:false

  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault()
  }
  const checkValues = () => {
    if(!values.username){
        setValues({...values, usernameError:true})
    }
    
  }
  
  return (
    <div id='signup-form-container'>
      <h2>Sign up form</h2>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <TextField
          id="signup-input-username"
          label="Username"
          variant="outlined"
          value={values.username}
          onChange={handleChange("username")}
          error={values.usernameError}
          helperText={values.usernameError? "Username cannot be empty":""}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          id="signup-input-email"
          label="Email" 
          variant="outlined"
          value={values.email} 
          onChange={handleChange("email")} 
          error={values.emailError}
          helperText={values.emailError? "Please input a proper email address":""}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="signup-input-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          label="Password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined" error={values.passwordError}>
        <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
        <OutlinedInput
          id="signup-input-psconfim"
          type={values.showPassword ? "text" : "password"}
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
          label="Confirm Password"
          error={values.passwordError}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      <FormHelperText>{values.passwordError? "Passwards must match":"" }</FormHelperText>
      </FormControl>
      <Button variant="contained" onClick={checkValues}>Sign me up</Button>
      
    </div>
  )
}
