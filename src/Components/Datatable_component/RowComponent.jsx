
function RowComponent({rank, name, 	CalmarRatio, overallProfit, DailyProfit, WinDay, Price, Action, bold}) {
    return (
        <div className={`${bold ? 'bg-slate-100 bg-opacity-60 hover:bg-slate-100 hover:bg-opacity-60 border-none' : ''} border border-white hover:border-transparent hover:bg-opacity-50 hover:bg-white rounded-md w-[40rem] max-h-[4rem] md:w-full p-4 flex justify-between  md:justify-between items-center`}>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] px-1 text-left lg:text-[1rem] xl:text-[1.2rem] w-[5%]`}>{rank}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-left lg:text-[1rem] xl:text-[1.2rem] w-[20%]   `}>{name}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[12%]   `}>{CalmarRatio}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[14%]   `}>{overallProfit}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[14%]   `}>{DailyProfit}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[12%]   `}>{WinDay}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[8%]   `}>{Price}</div>
            <div className={`${bold ? 'font-bold' : 'font-medium'} text-[.8rem] text-center lg:text-[1rem] xl:text-[1.2rem] w-[6%]   `}>{Action}</div>
        </div>
    )
}

export default RowComponent