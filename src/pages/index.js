import NextLink from 'next/link';
import { Box, Button, ListItem } from '@mui/material';

export default function Index() {
    return (
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
    )
}