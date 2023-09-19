import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import IExperience from "./Experience";
 
export function ExperienceAccordian() {
    const [open, setOpen] = React.useState(1);

    const experiences: IExperience[] = [
        {
            company: "Qorvo",
            range: ["May 2023", "Present"],
            title: "Automation Engineer Intern",
            description: "test1"
        },
        {
            company: "Bentley Systems",
            range: ["May 2022", "January 2022"],
            title: "Software Engineer Intern",
            description: "test2test2test2test2"
        },
        {
            company: "JHU Applied Physics Lab",
            range: ["May 2021", "October 2021"],
            title: "Software Engineer Intern",
            description: "test3test3test3test3test3"
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
                            <div className="rounded bg-accent h-10 p-4 flex justify-center items-center">
                                <span>
                                    {experience.title} • {experience.company}
                                </span>
                            </div>
                        </AccordionHeader>
                        <AccordionBody>
                            {experience.description}
                        </AccordionBody>
                    </Accordion>
                )
            })}
        </>
    );
}