import { Grid, Typography, CircularProgress } from '@mui/material';

const Loading = ({ text }) => (
    <>
        <Grid
            container
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Grid item 
                xs={3}
            >
                <Typography
                    color="textPrimary"
                    variant="h5"
                >
                    { text }
                </Typography>
            </Grid>
            <Grid item 
                xs={3}
            >
                <CircularProgress size="5rem" />
            </Grid>
        </Grid> 
    </>
);


export default Loading;
