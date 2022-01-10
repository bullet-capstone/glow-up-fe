import Box from "@mui/material/Box"
import { useState } from "react"
import FormControl from "@mui/material/FormControl"
import TextField from "@mui/material/TextField"
import InputLabel from "@mui/material/InputLabel"
import OutlinedInput from "@mui/material/OutlinedInput"
import InputAdornment from "@mui/material/InputAdornment"
import IconButton from "@mui/material/IconButton"
import Visibility from "@mui/icons-material/Visibility"
import VisibilityOff from "@mui/icons-material/VisibilityOff"

export default function Signup() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    showPassword: false,
  })

  const handleChange = (prop: string) => (event: React.FormEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.currentTarget.value })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }
  return (
    <div>
      <h2>Sign up form</h2>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Username</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          value={values.password}
          // onChange={handleChange('password')}
          label="Username"
        />
      </FormControl>
      <FormControl sx={{ m: 1, width: "25ch" }}>
        <InputLabel htmlFor="outlined-adornment-password">Email</InputLabel>
        <OutlinedInput
          // id="outlined-adornment-password"
          value={values.email}
          // onChange={handleChange('password')}

          label="Email"
        />
      </FormControl>
      {/* <TextField
        required
        // id="outlined-required"
        label="Email"
        defaultValue="Email"
        // onChange={handleChange("email")}
        value={values.email}
      /> */}
      <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          // onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              {/* <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton> */}
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </div>
  )
}
