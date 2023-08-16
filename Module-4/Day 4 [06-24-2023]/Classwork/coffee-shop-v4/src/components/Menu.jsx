import { ulid } from 'ulid'
import './Menu.css'
import MenuItem from './MenuItem';


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
            <div className='page-container'>
                <div className="menu-items-container">
                    {MenuItems.map(item => (
                        <MenuItem
                            key={item.id}
                            imageUrl={item.img}
                            itemName={item.name}
                            itemPrice={item.price}
                        />
                    ))}
                </div>
            </div>
        </>
    )

}

export default Menu