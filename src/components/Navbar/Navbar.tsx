interface INavItem {
    title: string
}

const NavItem = ({ title }: INavItem) => {
    return (
        <div>
            {title}
        </div>
    )
}

const Navbar = () => {

    return (
        <nav className="flex flex-row absolute">
            navbar
            <NavItem title="test"/>
        </nav>
    )
}

export default Navbar;
