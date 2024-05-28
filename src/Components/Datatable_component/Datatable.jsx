import { Dropdown } from "../Components"
import RowComponent from "./RowComponent"
import {BasictestData} from './Basictestdata'


function Datatable() {
    const data = BasictestData
    console.log(data);
    return (
        <div className=" cursor-default  w-full max-w-[100%]  h-[30rem] lg:w-full   rounded-lg  lg:h-[40rem]  p-2 flex flex-col justify-evenly  gap-4  backdrop-blur-[.9rem] bg-slate-300 bg-opacity-30 bo shadow-[0_0_15px_0] shadow-gray-600   ">
            <div className="w-full h-fit  rounded-md p-2 flex flex-col gap-2 justify-center items-start md:flex-row md:justify-between md:items-center bg-gradient-to-r from-[#0f3556ea] via-[#03488491] to-[#0f3556a6] bg-opacity-80">
                <div className="w-full text-white font-semibold md:w-[35%] h-full flex items-center justify-center md:justify-start md:items-center  text-[1.2rem] md:text-[1.6rem]">Basic Backtest</div>
                <div className=" w-full md:w-[35%] h-[3rem] flex justify-center md:justify-end gap-8 items-center  ">
                    <Dropdown text={`Slippage`} option1={`0%`} option2={`0.5%`} option3={`1%`}/>
                </div>
            </div>
            <div className=" bg-transparent h-[85%] w-full rounded-md  flex flex-col justify-start items-start gap-4 overflow-auto hide_scrollbar">
                <RowComponent bold  rank={`Rank`} name={`Name`} CalmarRatio={`Calmar Ratio`} overallProfit={`overall Profit`} DailyProfit={`Avg Daily Profit`} WinDay={`Win% Day`} Price={`Price`} Action={`Action`}/>
                {/* <div className="w-full overflow-scroll hide_scrollbar flex flex-col gap-4"> */}
                {
                    BasictestData.map((data,index)=>(
                        <RowComponent 
                        rank={data.rank}
                        name={data.name}
                        CalmarRatio={data.Calmar_Ratio}
                        overallProfit={data.overall_Profit}
                        DailyProfit={data.Avg_Daily_Profit}
                        key={index}
                        WinDay={data.Win_Day}
                        Price={data.Price}
                        Action={data.action}
                        />
                    ))
                }
                {/* </div> */}
                
            </div>
        </div>
    )
}

export default Datatable

// bg-gradient-to-r from-[#0f3556] via-[#034884c5] to-[#0f3556]