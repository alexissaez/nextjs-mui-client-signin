import { Box, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';

export default function Page() {
    return (
        <>

            <Head>
                <title>
                    Dashboard | Material Kit
                </title>
            </Head>
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    py: 2
                }}
            >
                <Container maxWidth={false}>
                    <Grid
                        container
                        spacing={3}
                    >
                        <Grid
                            item
                            lg={3}
                            sm={6}
                            xl={3}
                            xs={12}
                        >
                            <Typography
                                color="textPrimary"
                                gutterBottom
                                variant="h5"
                            >
                                Index
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}