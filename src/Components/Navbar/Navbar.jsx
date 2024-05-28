

function Navbar() {
    return (
        <div className="border w-full p-2 flex justify-between items-center">
            <div className="border p-1 px-2 font-semibold md:text-2xl lg:text-3xl">Unfluke</div>
            <div className="border flex gap-6">
            <div className="w-8 h-8 border flex justify-center items-center" >@</div>
            <div className="w-8 h-8 border flex justify-center items-center" >@</div>
            <div className="w-8 h-8 border flex justify-center items-center" >@</div>
            <div className="w-8 h-8 border flex justify-center items-center" >@</div>
            </div>
        </div>
    )
}

export default Navbar