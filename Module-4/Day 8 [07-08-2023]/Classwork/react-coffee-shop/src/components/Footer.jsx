import { AppBar, Container, Stack, Toolbar } from '@mui/material';
import NavItem from './NavItem';

const Footer = () => {

    const footerItems = [
        { "label": "About", "path": "/about" },
        { "label": "Support", "path": "/support" },
        { "label": "Legal", "path": "legal" }
    ]

    return (
        <AppBar position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Stack
                        direction={{ xs: "column", md: "row" }}
                        flexGrow={1}
                        display={{ xs: 'flex' }}
                        justifyContent={"space-around"}
                        alignItems="center"
                    >
                        {footerItems.map(({ label, path }) => (
                            <NavItem label={label} path={path} variant={"h6"} key={label} />
                        ))}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Footer;