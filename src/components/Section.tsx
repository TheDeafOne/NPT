const Section = ({children, ...props}: any) => {
    return (
        <div {...props}>
            {children}            
        </div>
    )
}

export default Section;