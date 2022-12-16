import React from 'react';
import PropTypes from 'prop-types';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';

import { AuthGuard } from '../components/authGuard'
import { AuthProvider } from '../providers/AuthProvider'
import createEmotionCache from '../utility/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
import Layout from '../components/layout';


const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
    const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

    return (
        <AuthProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={lightTheme}>
                    <CssBaseline />
                        <Layout>
                            {Component.public ? (
                                <Component {...pageProps} />
                            ) : (
                                <AuthGuard>
                                    <Component {...pageProps} />
                                </AuthGuard>
                            )}
                        </Layout>
                </ThemeProvider>
            </CacheProvider>
        </AuthProvider>
    )
}

export default App;

App.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
};
