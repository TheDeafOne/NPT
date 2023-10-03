const Section = ({children, ...props}: any) => {
    return (
        <div {...props} className="relative z-[25]">
            {children}            
        </div>
    )
}

export default Section;