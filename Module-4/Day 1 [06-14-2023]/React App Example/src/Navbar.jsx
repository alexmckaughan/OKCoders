import NavItem from './NavItem';

function Navbar() {
  const navItems = ['Home', 'Menu', 'Contact'];
  return (
    <div>
      {navItems.map(navItem => (
        <NavItem title={navItem} />
      ))}
    </div>
  );
}

export default Navbar;
