import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { AppBar, Badge, Box, IconButton, Toolbar, Tooltip } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import NextLink from "next/link";
import LogoutIcon from "@mui/icons-material/Logout";
import GroupIcon from '@mui/icons-material/Group';

const NavBarRoot = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[3],
}));

export default function NavBar(props) {
    const { onSidebarOpen, ...other } = props;

    return (
        <>
            <NavBarRoot
                sx={{
                    left: {
                        lg: 280,
                    },
                    width: {
                        lg: "calc(100% - 280px)",
                    },
                }}
                {...other}
            >
                <Toolbar
                    disableGutters
                    sx={{
                        minHeight: 64,
                        left: 0,
                        px: 2,
                    }}
                >
                    <IconButton
                        onClick={onSidebarOpen}
                        sx={{
                            display: {
                                xs: "inline-flex",
                                lg: "none",
                            },
                        }}
                    >
                        <MenuIcon fontSize="small" />
                    </IconButton>
                    <Tooltip title="Search">
                        <IconButton sx={{ ml: 1 }}>
                            <SearchIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Box sx={{ flexGrow: 1 }} />
                    <Tooltip title="Contacts">
                        <IconButton sx={{ ml: 1 }}>
                            <GroupIcon fontSize="small" />
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Notifications">
                        <IconButton sx={{ ml: 1 }}>
                            <Badge badgeContent={4}
                                color="primary"
                                variant="dot"
                            >
                                <NotificationsActiveIcon fontSize="small" />
                            </Badge>
                        </IconButton>
                    </Tooltip>

                    <NextLink href="/logout"
                        passHref
                    >
                        <Tooltip title="logout">
                            <IconButton sx={{ ml: 1 }}>
                                <LogoutIcon fontSize="small" />
                            </IconButton>
                        </Tooltip>
                    </NextLink>
                </Toolbar>
            </NavBarRoot>
        </>
    );
}

NavBar.propTypes = {
    onSidebarOpen: PropTypes.func,
};