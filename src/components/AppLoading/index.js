import React from 'react';

// Material UI
import Container from '@material-ui/core/Container';
import LinearProgress from "@material-ui/core/LinearProgress";
import Typography from "@material-ui/core/Typography";


function AppLoading(params) {
    
    return (
        <Container maxWidth='xs'>
            <div>
                <Typography
                    variant="h6"
                    component="h2"
                >
                    Aplikasi Penjualan
                </Typography>
                <LinearProgress />
            </div>
        </Container>
    )
}

export default AppLoading;