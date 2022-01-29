import React, { ChangeEventHandler, useState,} from "react"
import "./Login.css"
import {FormControl,OutlinedInput,InputAdornment,InputLabel,IconButton,Button,TextField,FormHelperText} from "@mui/material"
import {Visibility,VisibilityOff} from "@mui/icons-material"
import {SIGNIN_USER, } from "../../utils/graph_mutations"
import {useMutation } from "@apollo/client"
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";


const Login = () => {
   const [values, setValues] = useState({
    username: "",
    password: "",
    showPassword: false
  })
  const navigate = useNavigate()

  const [usernameError, setUsernameError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [cookie, setCookie]= useCookies(['userToken'])
  const [signIn, { data, loading,error }] = useMutation(SIGNIN_USER,{
    onCompleted:(data)=>{
      setCookie('userToken',data.signInUser.token,{path:"/",maxAge:259200})
      navigate('/glow-up-fe/dashboard')
    },
    onError:(error) => {
     console.log("sign in error", error);
    }
  
  })

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleChange = (prop:string): ChangeEventHandler<HTMLInputElement> => (e:React.FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    !values.username ? setUsernameError(true) : setUsernameError(false)
    !values.password ? setPasswordError(true) : setPasswordError(false)

    if (values.username && values.password) {
      signIn({variables:{username:values.username, password: values.password}})

    }
  }

  const handleMouseDownPassword = (event:React.MouseEvent) => {
    event.preventDefault()
  }

  return (
    <div id="login-form-container">
       {error && <h2 style={{marginBottom:'20px'}}>Please verify input and try again</h2>}
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <TextField
          id="login-input-username"
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
          id="login-input-password"
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
