import PropTypes from 'prop-types';
import { useEffect } from 'react';
import BarChartIcon from '@mui/icons-material/BarChart';
import { useRouter } from 'next/router';
import { Box, Divider, Drawer, useMediaQuery, Avatar } from '@mui/material';
import { NavItem } from './nav-item';
import { getInitials } from '../handlers/get-initials';
import { useAuth } from "../providers/AuthProvider"
import { SPACE_URL } from '../settings'


const items = [
    {
        href: '/',
        icon: (<BarChartIcon fontSize="small" />),
        title: 'Dashboard',
        roles: []
    },
    {
        href: '/page1',
        icon: (<BarChartIcon fontSize="small" />),
        title: 'Page 1',
        roles: []
    },
    {
        href: '/page2',
        icon: (<BarChartIcon fontSize="small" />),
        title: 'Page 2',
        roles: []
    }
];

export default function SideBar(props) {

    const { user } = useAuth()
    const { open, onClose } = props;
    const router = useRouter();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
        defaultMatches: true,
        noSsr: false
    });

    useEffect(
        () => {
            if (!router.isReady) {
                return;
            }

            if (open) {
                onClose?.();
            }
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [router.asPath]
    );

    const content = (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}
            >
                <div>
                    <Box sx={{ flexGrow: 1, my: 3 }}>
                        <NavItem
                            key={'Cuenta'}
                            icon={(<Avatar
                                src={`${SPACE_URL}${user.avatar}`}
                                sx={{ mr: 2 }}
                            >
                                {getInitials('Alexis Saez')}
                            </Avatar>
                            )}
                            href={'/account'}
                            title={user?.username ?? 'Cuenta'}
                        />
                    </Box>
                </div>
                <Divider
                    sx={{
                        borderColor: '#2D3748',
                        my: 3
                    }}
                />
                <Box sx={{ flexGrow: 1 }}>
                    {items.map((item) => (
                        !item.roles.length || item.roles.includes(user.role)
                            ? (<NavItem
                                key={item.title}
                                icon={item.icon}
                                href={item.href}
                                title={item.title}
                            />)
                            : null
                    ))}
                </Box>
                <Divider sx={{ borderColor: '#2D3748' }} />
            </Box>
        </>
    );

    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'neutral.900',
                        color: '#FFFFFF',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }

    return (
        <Drawer
            anchor="left"
            onClose={onClose}
            open={open}
            PaperProps={{
                sx: {
                    backgroundColor: 'neutral.900',
                    color: '#FFFFFF',
                    width: 280
                }
            }}
            sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
            variant="temporary"
        >
            {content}
        </Drawer>
    );
}

SideBar.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
};