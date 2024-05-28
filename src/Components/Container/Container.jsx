

function Container({children, classes}) {
    return  <div className={`container max-w-[90rem] ${classes} mx-auto min-h-[4rem]`}>{children}</div>
    
}

export default Container