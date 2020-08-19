import React, { useState } from "react";

// Import Komponen Material UI
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

// Import Style
import useStyles from "./styles";

// Import dari React Dom
import { Link } from 'react-router-dom';


function Registrasi() {

    const classes = useStyles();
    const [form, setForm] = useState({
        email:'',
        password:'',
        ulangi_password:'',
    });

    const handleChange = e=>{
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    return <Container maxWidth="xs">
        <Paper className={classes.paper}>
            <Typography 
            variant="h5" 
            component="h1" 
            className={classes.title}>Buat Akun Baru</Typography>

            <form noValidate>
                <TextField
                    id="email"
                    type="email"
                    name="email"
                    margin="normal"
                    label="Alamat Email"
                    fullWidth
                    required
                    value={form.email}
                    onChange={handleChange}
                
                />
                <TextField
                    id="password"
                    type="password"
                    name="password"
                    margin="normal"
                    label="Password"
                    fullWidth
                    required
                    value={form.password}
                    onChange={handleChange}
                
                />
                 <TextField
                    id="ulangi_password"
                    type="password"
                    name="ulangi_password"
                    margin="normal"
                    label="Ulangi Password"
                    fullWidth
                    required
                    value={form.ulangi_password}
                    onChange={handleChange}
                
                />

                <Grid container className={classes.buttons}>
                    <Grid item xs>
                        <Button 
                        type="submit"
                        color="primary"
                        variant="contained"
                        size="large">
                            Daftar
                        </Button>
                    </Grid>

                    <Grid>
                        <Button
                        component={Link}
                        variant="contained"
                        size="large"
                        to="/login">
                            Login
                        </Button>
                    </Grid>

                </Grid>
            </form>
            
            
        </Paper>
    </Container>
}

export default Registrasi;