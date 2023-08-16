import { ulid } from 'ulid'
import '../App.css'
import MenuItem from '../components/MenuItem';
import { Box } from '@mui/material';
import SaleDialog from '../components/SaleDialog';

const Menu = () => {

    

    const MenuItems = [
        {
            id: ulid(),
            name: 'Bagels',
            price: '$5.00',
            img: 'https://source.unsplash.com/400x400/?bagels'
        },
        {
            id: ulid(),
            name: 'Muffins',
            price: '$3.50',
            img: 'https://source.unsplash.com/400x400/?muffins'
        },
        {
            id: ulid(),
            name: 'Hot Coffee',
            price: '$2.00',
            img: 'https://source.unsplash.com/400x400/?coffee'
        },
        {
            id: ulid(),
            name: 'Iced Coffee',
            price: '$3.00',
            img: 'https://source.unsplash.com/400x400/?icedcoffee'
        },
        {
            id: ulid(),
            name: 'Espresso',
            price: '$2.50',
            img: 'https://source.unsplash.com/400x400/?espresso'
        },
        {
            id: ulid(),
            name: 'Lattes',
            price: '$4.00',
            img: 'https://source.unsplash.com/400x400/?latte'
        }
    ];
    return (
        <>
            <SaleDialog />
            <Box sx={{
                margin: 0,
                padding: 0,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "1.625em",
                fontFamily: ["Open Sans", "sans-serif"],
                fontWeight: 800,
                color: "#202020",
            }}>
                <Box sx={{
                    width: "90vw",
                    bgcolor: "#ffffff",
                    borderRadius: "20px",
                    boxShadow: "0px 25px 40px #1687d933",
                    display: "flex",
                    flexDirection: "column",
                    flexGrow: 1,
                    padding: "1.5em",
                }}>
                    {MenuItems.map(item => (
                        <MenuItem
                            key={item.id}
                            imageUrl={item.img}
                            itemName={item.name}
                            itemPrice={item.price}
                        />
                    ))}
                </Box>
            </Box >
        </>
    )

}

export default Menu