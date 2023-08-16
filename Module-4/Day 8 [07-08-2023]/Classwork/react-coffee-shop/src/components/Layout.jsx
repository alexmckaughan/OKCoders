import { Box, Stack } from '@mui/material';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import { createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            main: purple[500],
        },
        secondary: {
            main: green[500],
        },
    },
});


const Layout = () => (
    <Stack height="100%">

        <NavBar />
        <Box height="100%">
            <Outlet />
        </Box>
        <Footer />
    </Stack>
);

export default Layout;