import { useEffect, useState } from 'react'
import Head from 'next/head'
import { Button, Box, Container, Typography, TextField, Link } from '@mui/material'
import { useRouter } from "next/router"
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from "../providers/AuthProvider"
import Loading from '../components/loading'
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function Login() {
    const router = useRouter()
    const { auth, initializing, getRedirect, clearRedirect, user, error } = useAuth()
    const [signInInProgress, setSignInInProgress] = useState();

    useEffect(() => {
        if (initializing || !user) return;
        const redirect = getRedirect()
        if (redirect) {
            router.push(redirect, undefined, { shallow: true })
            clearRedirect()
        } else {
            router.push('/', undefined, { shallow: true })
        }
    }, [router, getRedirect, clearRedirect, initializing, user])

    const onSubmit = async ({ username, password }, { setSubmitting }) => {
        try {
            setSignInInProgress(true)
            await auth.signIn(username, password)
        }
        catch (e) {
            console.log('error', e)
        }
        setSignInInProgress(false)
        setSubmitting(false)
    }

    const loginSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    });

    if (initializing) {
        return (<Loading text="Application Loading" />)
    }

    if (signInInProgress) {
        return (<Loading text="Signing in progress" />)
    }

    return (
        <>
            <Head>
                <title>Login | Proyecto Condominio</title>
            </Head>
            <Box
                component="main"
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexGrow: 1,
                    minHeight: '100%'
                }}
            >
                <Container maxWidth="sm">
                    <Box sx={{ my: 3 }}>
                        <Typography
                            color="textPrimary"
                            variant="h4"
                        >
                            Sign in
                        </Typography>
                        <Typography
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            Sign in on the internal platform
                        </Typography>
                    </Box>
                    {error ? (
                        <Stack sx={{ width: '100%' }} spacing={2}>
                            <Alert severity="error">
                                <AlertTitle>Login in error:</AlertTitle>
                                {error.message}
                            </Alert>
                        </Stack>
                    ) : null}
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validationSchema={loginSchema}
                        onSubmit={onSubmit}
                    >
                        {formik => (
                            <form onSubmit={formik.handleSubmit}>
                                <TextField
                                    error={Boolean(formik.touched.username && formik.errors.username)}
                                    fullWidth
                                    helperText={formik.touched.username && formik.errors.username}
                                    label="Username"
                                    margin="normal"
                                    name="username"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="text"
                                    value={formik.values.username}
                                    variant="outlined"
                                />
                                <TextField
                                    error={Boolean(formik.touched.password && formik.errors.password)}
                                    fullWidth
                                    helperText={formik.touched.password && formik.errors.password}
                                    label="Password"
                                    margin="normal"
                                    name="password"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    type="password"
                                    value={formik.values.password}
                                    variant="outlined"
                                />
                                <Box sx={{ py: 2 }}>
                                    <Button
                                        color="primary"
                                        disabled={formik.isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                    >
                                        Sign In Now
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </Formik>
                </Container>
            </Box>
        </>
    )
}

Login.public = true;