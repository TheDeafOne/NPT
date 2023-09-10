const SkillContainer = ({ title, className, items }: any) => {

    return (
        <div>
            <div className={`w-[80px] h-[80px] bg-black rounded-full h-20 w-20 flex justify-center items-center cursor-pointer transform hover:scale-105 ease-in-out duration-100 ${className}`}>
                {title}
            </div>
            {items?.map((logo: any) => {
                return (
                    <img src={logo.src} />
                )
            })}
        </div>
    )
}

export default SkillContainer;