import {
    Accordion,
    AccordionBody,
    AccordionHeader,
} from "@material-tailwind/react";
import { IconButton } from "@material-tailwind/react";
import Image from 'next/image';
import React from "react";
import BentleyLogo from '../../resources/logos/companies/bentley-logo.png';
import QorvoLogo from '../../resources/logos/companies/qorvo-logo.png';
import AplLogo from '../../resources/logos/companies/apl-logo.png';
import IExperience from "./Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation, faLink } from "@fortawesome/free-solid-svg-icons";

export function ExperienceAccordian() {
    const [open, setOpen] = React.useState(1);

    const experiences: IExperience[] = [
        {
            company: "Qorvo",
            range: ["May 2023", "Present"],
            title: "Automation Engineer Intern",
            description: "test1",
            location: "Texas, USA",
            website: "https://www.qorvo.com/",
            logo: QorvoLogo,
            skills: ["Python", "AWR", "Oracle SQL", "Git", "GitLab", "DevOps"]
        },
        {
            company: "Bentley Systems",
            range: ["May 2022", "January 2022"],
            title: "Software Engineer Intern",
            description: "test2test2test2test2",
            location: "Remote",
            website: "https://www.bentley.com/",
            logo: BentleyLogo,
            skills: ["TypeScript", "React", "C#", "ASP.NET", "Azure", "Git", "DevOps"]
        },
        {
            company: "JHU Applied Physics Lab",
            range: ["May 2021", "October 2021"],
            title: "Software Engineer Intern",
            description: "test3test3test3test3test3",
            location: "Maryland, USA",
            website: "https://www.jhuapl.edu/",
            logo: AplLogo,
            skills: ["Python", "Pandas", "GitLab", "Git"]
        },
    ]

    const handleOpen = (value: React.SetStateAction<number>) => setOpen(open === value ? 0 : value);

    return (
        <>
            {experiences.map((experience, i) => {
                i += 1;
                return (
                    <Accordion key={i} open={open === i} className="flex flex-col">
                        <AccordionHeader onClick={() => handleOpen(i)}>
                            <div className="rounded bg-secondary-800 h-15 px-5 py-3 flex items-center w-full space text-base justify-between hover:transform hover:scale-[1.01] ease-in-out duration-300">
                                <span>
                                    {experience.title} • {experience.company}
                                </span>
                                <span>
                                    {experience.range[0]} - {experience.range[1]}
                                </span>
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            <div className="bg-secondary-900 mt-2 px-5 py-3 flex flex-row justify-between">
                                <div className="w-3/4">
                                    <div className="flex flex-row gap-5 items-center">
                                        <div className="flex items-center gap-1">
                                            <FontAwesomeIcon icon={faLocation} />
                                            <span>
                                                {experience.location}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1"> 
                                            <FontAwesomeIcon icon={faLink} />
                                            <a href={experience.website} target="_blank">{experience.website}</a>
                                        </div>
                                    </div>
                                    <div>
                                        {experience.description}
                                    </div>
                                    <div className="flex flex-row gap-2">
                                        {experience.skills.map((skill, i) => {
                                            return (
                                                <div key={i}>
                                                    {skill}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                                <div className="flex justify-center items-center">
                                    <Image src={experience.logo}
                                        alt="Logo"
                                        className="h-16 w-16 rounded-full" 
                                    />
                                </div>
                            </div>
                        </AccordionBody>
                    </Accordion>
                )
            })}
        </>
    );
}