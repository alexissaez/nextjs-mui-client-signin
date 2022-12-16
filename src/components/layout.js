import { useState } from 'react';
import { useAuth } from '../providers/AuthProvider'
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import NavBar from './navbar'
import Sidebar from './sidebar'

const LayoutRoot = styled('div')(({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    maxWidth: '100%',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
        paddingLeft: 280
    }
}));

export default function Layout({ children }) {
    const { user } = useAuth(true)
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    if (user) {
        return (
            <>
                <LayoutRoot>
                    <Box
                        sx={{
                            display: 'flex',
                            flex: '1 1 auto',
                            flexDirection: 'column',
                            width: '100%'
                        }}
                    >
                        {children}
                    </Box>
                </LayoutRoot>
                <NavBar onSidebarOpen={() => setSidebarOpen(true)} />
                <Sidebar
                    onClose={() => setSidebarOpen(false)}
                    open={isSidebarOpen}
                />
            </>
        )
    }

    return <>{children}</>
}
