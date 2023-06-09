const Section = ({children, ...props}: any) => {
    return (
        <div {...props} className="h-screen z-10">
            {children}
        </div>
    )
}

export default Section;