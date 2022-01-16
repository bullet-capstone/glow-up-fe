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
  })

const [usernameError, setUsernameError] = useState(false)
const [emailError, setEmailError] = useState(false)
const [pwError, setPwError] = useState(false)
const [matchError, setMatchError] = useState(false)

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
  

  const handleSubmit = () => {
    !values.username? setUsernameError(true):setUsernameError(false)
    
    // regex is madness
    !(/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(values.email))?setEmailError(true):setEmailError(false)
              
    !values.password?setPwError(true):setPwError(false)
     
    !(values.password === values.confirmPassword)?setMatchError(true):setMatchError(false)

    if (values.username && (/^\w{3,}(\.\w+)*@[A-z0-9]+(\.[A-z]{2,5}){1,2}$/.test(values.email)) && values.password && values.confirmPassword && values.password === values.confirmPassword) {
      alert('sign up successful')
      // Now send all that info to backend and redirect user to dashboard
    }
     
  }
  
  return (
    <div id='signup-form-container'>
      <h2>Sign up form</h2>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          id="signup-input-username"
          label="Username"
          variant="outlined"
          value={values.username}
          onChange={handleChange("username")}
          error={usernameError}
          helperText={usernameError? "Username cannot be empty":""}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          id="signup-input-email"
          label="Email" 
          variant="outlined"
          value={values.email} 
          onChange={handleChange("email")} 
          error={emailError}
          helperText={emailError? "Please input a proper email address":""}
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }} error={pwError}>
        <InputLabel>Password</InputLabel>
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
        <FormHelperText>{pwError? "Password cannot be empty":"" }</FormHelperText>
      </FormControl>

      <FormControl sx={{ m: 1, width: "25ch" }} error={matchError}>
        <InputLabel>Confirm Password</InputLabel>
        <OutlinedInput
        
          id="signup-input-psconfirm"
          type={values.showPassword ? "text" : "password"}
          value={values.confirmPassword}
          onChange={handleChange("confirmPassword")}
          label="Confirm Password"
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
      <FormHelperText>{matchError? "Passwords must match":""}</FormHelperText>
      </FormControl>
      <Button id="signup-btn" variant="contained" onClick={handleSubmit}>Sign me up</Button>
      
    </div>
  )
}
