'use client';
import Image from "next/image";
import Link from "next/link";
import Logo from '../../resources/icon-light.svg';

const handleScroll = (e: any, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const dims = element!.getBoundingClientRect();
    const navHeight = document.getElementById("navbar")!.offsetHeight
    window.scrollTo({
        top: dims.top - navHeight + window.scrollY,
        behavior: "smooth"
    });
};


const Navbar = () => {
    const navItems = [
        { title: "About", id: "about-section" },
        { title: "Skills", id: "skills-section" },
        { title: "Projects", id: "projects-section" },
        { title: "Experience", id: "experience-section" },
        { title: "Contact Me", id: "contact-section" }
    ]
    return (
        <nav id="navbar" className="bg-background sticky w-full z-20 top-0 left-0 flex flex-row justify-between shadow-md">
            <div className="px-2">
                <Image
                    src={Logo}
                    className="w-[60px] hover:cursor-pointer"
                    onClick={(e) => handleScroll(e, "welcome-section")}
                    alt=""
                    priority
                />
            </div>
            <div className="flex flex-row gap-5 px-10 justify-center items-center">
                {navItems.map((navItem, i) => {
                    return (
                        <Link 
                            title={navItem.title}
                            key={i} 
                            id={`${navItem.id}-nav`} 
                            href={`#${navItem.id}`} 
                            onClick={(e) => handleScroll(e, navItem.id)} 
                            className="hover:text-accent text-text text-lg active:text-accent"
                        >
                            {navItem.title}
                        </Link>
                    )
                })}
            </div>
        </nav>
    )
}

export default Navbar;
