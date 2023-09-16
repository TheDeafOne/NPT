import IExperience from "./Experience";

const ExperienceContainer = ({experience}: {experience: IExperience}) => {
    return (
        <div className="h-36 w-3/4 max-w-3/4 rounded-sm cursor-pointer hover:bg-accent">
            <div className="text-3xl font-lato m-2 font-semibold">
                {experience.title} · {experience.company}
            </div>
            <p className="break-words mx-10">
               {experience.description}
            </p>
        </div>
    )
}

export default ExperienceContainer;