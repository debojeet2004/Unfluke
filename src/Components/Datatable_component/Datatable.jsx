import { Dropdown } from "../Components"
import RowComponent from "./RowComponent"


function Datatable() {
    return (
        <div className=" cursor-default  w-full max-w-[100%]  h-[30rem] lg:w-full   rounded-lg  lg:h-[40rem]  p-2 flex flex-col justify-evenly  gap-4  backdrop-blur-[2rem] bg-slate-300 bg-opacity-30 bo shadow-[0_0_15px_0] shadow-gray-600   ">
            <div className="bg-gradient-to-r from-[#0f3556] via-[#034884c5] to-[#0f3556]    w-full h-fit  rounded-md p-2 flex flex-col gap-2 justify-center items-start md:flex-row md:justify-between md:items-center">
                <div className="w-full text-white md:w-[35%] h-full flex items-center justify-center md:justify-start md:items-center  text-[1.2rem] md:text-[1.6rem] font-semibold ">Basic Backtest</div>
                <div className=" w-full md:w-[35%] h-[3rem] flex justify-center md:justify-end gap-8 items-center  ">
                    {/* <div className="border p-1 w-[42%] border-white text-white font-bold">Slippage</div> */}
                    {/* <div className="border p-1 w-[42%]">Coloum</div> */}
                    <Dropdown text={`Slippage`} option1={`0%`} option2={`0.5%`} option3={`1%`}/>
                </div>
            </div>
            <div className=" bg-transparent h-[85%] w-full rounded-md  flex flex-col justify-start items-start gap-2 overflow-auto hide_scrollbar">
                <RowComponent bold  rank={`Rank`} name={`Name`} CalmarRatio={`Calmar Ratio`} overallProfit={`overall Profit`} DailyProfit={`Avg Daily Profit`} WinDay={`Win% Day`} Price={`Price`} Action={`Action`}/>
                <RowComponent  rank={`1`} name={`kuchbhi`} CalmarRatio={`3.96`} overallProfit={`5486464`} DailyProfit={`418.89`} WinDay={`0.59`} Price={`5659`} Action={`view`}/>
                
            </div>
        </div>
    )
}

export default Datatable