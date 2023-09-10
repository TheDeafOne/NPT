const SkillContainer = ({ title, className, items }: any) => {

    return (
        <div className="flex justify-center items-center">
            <div className={`w-[80px] h-[80px] bg-black rounded-full h-20 w-20 flex justify-center items-center cursor-pointer transform hover:scale-105 ease-in-out duration-100 ${className}`}>
                {title}
            </div>
            {items?.map((logo: any) => {
                return (
                    <img className="h-[50px] absolute" src={logo.src} />
                )
            })}
        </div>
    )
}

export default SkillContainer;