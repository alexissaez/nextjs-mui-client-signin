import { useEffect } from 'react'
import { useRouter } from "next/router"
import { Formik } from 'formik';
import * as yup from 'yup';
import { useAuth } from "../providers/AuthProvider"

export default function Login() {
    const router = useRouter()
    const { auth, initializing, getRedirect, clearRedirect, user, error } = useAuth()

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
            await auth.signIn(username, password)
        }
        catch (e) {
            console.log('error', e)
        }
        setSubmitting(false)
    }

    const loginSchema = yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    });

    return (
        <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={loginSchema}
            onSubmit={onSubmit}
        >
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <input
                        type="text"
                        name="username"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.username}
                    />
                    {props.errors.username && props.touched.username && props.errors.username}
                    <input
                        type="password"
                        name="password"
                        onChange={props.handleChange}
                        onBlur={props.handleBlur}
                        value={props.values.password}
                    />
                    {props.errors.password && props.touched.password && props.errors.password}
                    <button type="submit" disabled={props.isSubmitting}>
                        Submit
                    </button>
                </form>
            )}
        </Formik>
    )
}

Login.public = true;