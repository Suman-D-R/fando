import React from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import "../sass/RegisterForm.scss"

function RegisterForm() {
  return (
    <div className='register-form'>
    <Container maxWidth="sm" className='register-container'>
        <div className='form-content-one'>
            <span>Fundo</span>
            <span>Create your Fundo Account</span>
            <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <div>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
        </div>
        <div className='form-content-two'>
hello
        </div>
    </Container>
    </div>
  )
}

export default RegisterForm