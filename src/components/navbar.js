import NextLink from 'next/link';
import { Box, Button } from '@mui/material';

export default function NavBar() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                typography: 'body1',
                '& > :not(style) + :not(style)': {
                    ml: 2,
                },
            }}
        >
            <NextLink
                href={'/page1'}
                passHref
            >
                <Button
                    component="a"
                >
                    Page 1
                </Button>
            </NextLink>
            <NextLink
                href={'/page2'}
                passHref
            >
                <Button
                    component="a"
                >
                    Page 2
                </Button>
            </NextLink>
            <NextLink
                href={'/logout'}
                passHref
            >
                <Button
                    component="a"
                >
                    LOGOUT
                </Button>
            </NextLink>
        </Box>
    );
}