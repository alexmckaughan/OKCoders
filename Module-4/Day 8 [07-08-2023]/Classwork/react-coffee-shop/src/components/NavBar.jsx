import {
    Container,
    AppBar,
    Toolbar,
    Stack,
    Box,
    Slide,
    useScrollTrigger,
} from '@mui/material';
import NavItem from './NavItem';

function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
    });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const leftSideNav = [
    { label: 'Menu', path: '/menu' },
    { label: 'Contact', path: '/contact' },
];

const rightSideNav = [
    { label: 'Login', path: '/login' },
];

const NavBar = (props) => {

    return (
        <HideOnScroll {...props}>
            <AppBar position="fixed" color="primary" sx={{ top: 0, bottom: 'auto' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Stack
                            direction="row"
                            flexGrow={1}
                            display={{ xs: 'flex' }}
                            justifyContent={"space-around"}
                        >
                            <Box display={{ xs: 'flex' }} flexGrow={1} flexDirection={"row"}>
                                {leftSideNav.map(({ label, path }) => (
                                    <NavItem label={label} path={path} variant={"h5"} key={label} />
                                ))}
                            </Box>
                            <Box>
                                {rightSideNav.map(({ label, path }) => (
                                    <NavItem label={label} path={path} variant={"h5"} key={label} />
                                ))}
                            </Box>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </HideOnScroll>
    );
};
export default NavBar;