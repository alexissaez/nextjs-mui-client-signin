import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { AuthGuard } from '../components/authGuard'
import { AuthProvider } from '../providers/AuthProvider'
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import NavBar from '../components/navbar';


const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <AuthProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                    {Component.public ? (
                        <Component {...pageProps} />
                    ) : (
                        <AuthGuard>
                            <NavBar />
                            <Component {...pageProps} />
                        </AuthGuard>
                    )}
                </ThemeProvider>
            </CacheProvider>
        </AuthProvider>
    )
}

export default MyApp;

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
