import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";

const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");


    const items = [
        { title: "Dashboard", to: "/", icon: <HomeOutlinedIcon />, category: "Data" },
        { title: "Manage Team", to: "/team", icon: <PeopleOutlinedIcon />, category: "Data" },
        { title: "Contacts Information", to: "/contacts", icon: <ContactsOutlinedIcon />, category: "Data" },
        { title: "Invoices Balances", to: "/invoices", icon: <ReceiptOutlinedIcon />, category: "Data" },
        { title: "Profile Form", to: "/form", icon: <PersonOutlinedIcon />, category: "Pages" },
        { title: "Calendar", to: "/calendar", icon: <CalendarTodayOutlinedIcon />, category: "Pages" },
        { title: "FAQ Page", to: "/faq", icon: <HelpOutlineOutlinedIcon />, category: "Pages" },
        { title: "Bar Chart", to: "/bar", icon: <BarChartOutlinedIcon />, category: "Charts" },
        { title: "Pie Chart", to: "/pie", icon: <PieChartOutlineOutlinedIcon />, category: "Charts" },
        { title: "Line Chart", to: "/line", icon: <TimelineOutlinedIcon />, category: "Charts" },
        { title: "Geography Chart", to: "/geography", icon: <MapOutlinedIcon />, category: "Charts" },
    ];

    return (
        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Menu iconShape="square">
                    {/* LOGO AND MENU ICON */}
                    <MenuItem
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                        style={{
                            margin: "10px 0 20px 0",
                            color: colors.grey[100],
                        }}
                    >
                        {!isCollapsed && (
                            <Box
                                display="flex"
                                justifyContent="space-between"
                                alignItems="center"
                            >
                                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                    <MenuOutlinedIcon />
                                </IconButton>
                                <Typography variant="h3" color={colors.grey[100]}>
                                    ADMIN
                                </Typography>
                            </Box>
                        )}
                    </MenuItem>

                    {/* USER */}
                    {!isCollapsed && (
                        <Box mb="25px">
                            <Box display="flex" justifyContent="center" alignItems="center">
                                <img
                                    alt="profile-user"
                                    width="100px"
                                    height="100px"
                                    src={`../../assets/user.png`}
                                    style={{ cursor: "pointer", borderRadius: "50%" }}
                                />
                            </Box>
                            <Box textAlign="center">
                                <Typography
                                    variant="h2"
                                    color={colors.grey[100]}
                                    fontWeight="bold"
                                    sx={{ m: "10px 0 0 0" }}
                                >
                                    Ed Roh
                                </Typography>
                                <Typography variant="h5" color={colors.greenAccent[500]}>
                                    VP Fancy Admin
                                </Typography>
                            </Box>
                        </Box>
                    )}

                    {/* MENU ITEMS */}
                    <Box paddingLeft={isCollapsed ? undefined : "10%"}
                    >
                        {items.map((item, index) => {
                            let category = null;
                            if (index === 0 || item.category !== items[index - 1].category) {
                                category = (
                                    <Typography
                                        variant="h6"
                                        color={colors.grey[300]}
                                        sx={{ m: "15px 0 5px 15px" }}
                                    >
                                        {item.category}
                                    </Typography>
                                );
                            }
                            return (
                                <>
                                    {category}
                                    <Item
                                        key={item.title}
                                        title={item.title}
                                        to={item.to}
                                        icon={item.icon}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                </>
                            );
                        })}
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;