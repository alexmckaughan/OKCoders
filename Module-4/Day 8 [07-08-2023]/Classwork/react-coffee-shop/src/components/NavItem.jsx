import { Box, ListItem, Typography } from "@mui/material";
import { Link, useMatch } from "react-router-dom"

const NavItem = ({ path, label, variant }) => {
    const match = useMatch(path);

    return <Box>
        <ListItem component={Link} to={path}>
            <Typography color={"whitesmoke"} variant={variant}>{label}</Typography>
        </ListItem>
    </Box >
}

export default NavItem;