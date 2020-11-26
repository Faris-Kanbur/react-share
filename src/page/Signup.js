import React from 'react'
import { Button, TextField, Grid, Container } from '@material-ui/core';

function Signup() {
    return (
        <Container maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12}>   
                    <TextField id="outlined-basic" label="Display Name" variant="outlined"  fullWidth/>
                </Grid>         
                <Grid item xs={12}>       
                    <TextField id="outlined-basic" label="Email" variant="outlined"  fullWidth/>
                </Grid>
                <Grid item xs={12}>   
                    <TextField id="outlined-basic" label="Password" variant="outlined"  fullWidth/>
                </Grid>
                <Grid item xs={12}>   
                    <Button color="primary" variant="contained" fullWidth>Submit</Button>
                </Grid>
                <Grid item xs={12}>   
                    <Button color="primary" variant="contained" fullWidth>Signup with Google</Button>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Signup
