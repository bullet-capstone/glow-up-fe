import React, { ChangeEventHandler, useState } from "react"
import "./Login.css"
import {FormControl,OutlinedInput,InputAdornment,InputLabel,IconButton,Button,TextField,FormHelperText} from "@mui/material"
import {Visibility,VisibilityOff} from "@mui/icons-material"

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  })
  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleChange = (prop) => {
    setValues({ ...values, prop: prop.currentTarget.value })
  }

  const handleSubmit = () => {
    !values.username ? setUsernameError(true) : setUsernameError(false)
    !values.password ? setPasswordError(true) : setPasswordError(false)

    if (values.username && values.password) {
      // submitUserData()
    }
  }

  const handleMouseDownPassword = (prop) => {
    prop.preventDefault()
  }

  return (
    <div id="login-form-container">
      <h2>Login form</h2>
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

      <FormControl sx={{ m: 1, width: "25ch" }} error={passwordError}>
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
        <FormHelperText>{passwordError? "Password cannot be empty":"" }</FormHelperText>
      </FormControl>

      <Button id="login-btn" variant="contained" onClick={handleSubmit}>Login</Button>
    </div>
  )
}

export default Login
