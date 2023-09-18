import Section from "../Section"
import ExperienceContainer from "./ExperienceContainer"
import IExperience from "./Experience";

const ExperienceSection = () => {
    const experiences: IExperience[] = [
        {
            company: "Qorvo",
            range: ["May 2023", "Present"],
            title: "Automation Engineer Intern",
            description: "testtesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttesttest"
        },
        {
            company: "Bentley Systems",
            range: ["May 2022", "January 2022"],
            title: "Software Engineer Intern",
            description: ""
        },
        {
            company: "JHU Applied Physics Lab",
            range: ["May 2021", "October 2021"],
            title: "Software Engineer Intern",
            description: ""
        },
    ]
    return (
        <Section id="experience-section">
            <div className="text-white h-screen">
                <div className="absolute left-20 font-lato">
                    <span className="text-4xl mb-12">
                        The places I've been:
                    </span>
                    <div className="flex flex-col gap-y-3 w-1/2 mt-5">
                        {experiences.map((experience, i) => {
                            return (
                                <ExperienceContainer key={i}experience={experience} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default ExperienceSection