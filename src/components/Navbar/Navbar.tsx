'use client';
import Link from "next/link";

interface INavLink {
    title: string,
    id: string
}

const NavLink = ({ title, id }: INavLink) => {
    const handleScroll = (e: any) => {
        e.preventDefault();
        const element = document.getElementById(id);
        const dims = element!.getBoundingClientRect();
        const navHeight = document.getElementById("navbar")!.offsetHeight
        window.scrollTo({
            top: dims.top - navHeight + window.scrollY, 
            behavior: "smooth"
        });
    };
    return (
        <Link href={`#${id}`} onClick={handleScroll}>
            {title}
        </Link>
    )
}

const Navbar = () => {
    const navItems = [
        { title: "About", id: "about-section" },
        { title: "Skills", id: "skills-section" },
        { title: "Projects", id: "projects-section" },
        { title: "Experience", id: "experience-section" },
        { title: "Contact Me", id: "contact-section" }
    ]
    return (
        <nav id="navbar" className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex flex-row justify-between">
            <div>
                logo
            </div>
            <div className="flex flex-row gap-1 px-2">
                {navItems.map((navItem, i) => {
                    return <NavLink title={navItem.title} id={navItem.id} key={i.toString()} />
                })}
            </div>
        </nav>
    )
}

export default Navbar;
