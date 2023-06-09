'use client';
import Link from "next/link";
interface INavLink {
    title: string,
    id: string
}

const NavLink = ({ title, id }: INavLink) => {
    const handleScroll = (e: any) => {
        // e.preventDefault();
        // const element = document.getElementById(id);
        // const scrollDuration = 1000;
        // const easing = (t: number) => { return t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1 }

        // const startingY = window.scrollY;
        // const diff = element!.getBoundingClientRect().top - startingY;
        // let start: number;
        // window.requestAnimationFrame(function step(timestamp) {
        //     if (!start) start = timestamp;
        //     let time = timestamp - start;
        //     let percent = easing(Math.min(time / scrollDuration, 1));
        //     window.scrollTo(0, startingY + diff * percent);

        //     if (time < scrollDuration) {
        //         window.requestAnimationFrame(step);
        //     }
        // });
        e.preventDefault();
        const element = document.getElementById(id);
        element?.scrollIntoView({
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
        <NavLink title="About" id="about-section" />,
        <NavLink title="Skills" id="skills-section" />,
        <NavLink title="Projects" id="projects-section" />,
        <NavLink title="Experience" id="experience-section" />,
        <NavLink title="Contact Me" id="contact-section" />
    ]
    return (
        <nav className="bg-white dark:bg-gray-900 sticky w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 flex flex-row justify-between">
            <div>
                logo
            </div>
            <div className="flex flex-row gap-1 px-2">
                {navItems}
            </div>
        </nav>
    )
}

export default Navbar;
