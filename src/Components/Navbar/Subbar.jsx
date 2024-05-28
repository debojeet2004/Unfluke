import { Link } from "react-router-dom"

function Subbar() {
    return (
        <div className="vorder hidden md:flex w-full  flex-col gap-6 md:flex-row  items-center p-2  text-[.8rem] md:text-[.7rem] md:justify-around  lg:gap-[1.8rem] lg:text-[.9rem] xl:text-[1.1rem]   md:gap-2">
            <Link to={`/`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">LeaderBoard</Link>
            <Link to={`HistoricalTrading`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Historical Trading</Link>
            <Link to={`Historcal Chart`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Historcal Chart</Link>
            <Link to={`Scanners`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Scanners</Link>
            <Link to={`Alerts`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Alerts</Link>
            <Link to={`Basic Backtest`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Basic Backtest</Link>
            <Link to={`Advanced Backtest`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Advanced Backtest</Link>
            <Link to={`Pricing`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">Pricing</Link>
            <Link to={`My Earning`} className=" cursor-pointer font-semibold hover:underline decoration-2 underline-offset-4">My Earning</Link>
        </div>
    )
}

export default Subbar