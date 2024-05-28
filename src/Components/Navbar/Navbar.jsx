import { coin ,bell,man } from "../../Assets/images"

function Navbar() {
    return (
        <div className=" w-full p-2 flex justify-between items-center">
            <div className=" p-1 px-2 font-semibold md:text-2xl lg:text-3xl">Unfluke</div>
            <div className=" flex gap-6">
            <img src={coin} alt="" className="w-8 h-8  flex justify-center items-center rounded-md" />
            <img src={bell} alt="" className="w-8 h-8  flex justify-center items-center rounded-md" />
            <div className="w-8 h-8 border flex justify-center items-center rounded-md" ></div>
            <img src={man} alt="" className="w-8 h-8  flex justify-center items-center rounded-md" />
            </div>
        </div>
    )
}

export default Navbar