import { Datatable } from "../../Components/Components"


function LeaderBoard() {
    return (
        <div className='  w-full min-h-[40rem] md:min-h-[45rem]  flex flex-col justify-start gap-6 items-center relative  bg-white bg-opacity-5 '>
            <h1 className="text-[1.5rem] md:text-[2.5rem] lg:text-[3rem] font-bold text-blue-950  ">LeaderBoard</h1>
            <Datatable/>
        </div>
    )
}

export default LeaderBoard