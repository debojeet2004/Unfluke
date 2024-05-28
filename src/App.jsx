import { Outlet } from "react-router-dom"
import {Container, Navbar, Subbar} from "./Components/Components"


function App() {
  return (
    <div className={`flex flex-col h-screen gap-1 font-sans`}>
      <Container classes={` flex flex-col gap-4 justify-center items-center text-white`}>
        <Navbar/>
      </Container>
      <div className=" bg-black bg-opacity-35 h-[1px]"/>
      <Container classes={`lg:h-[55rem] flex flex-col lg:gap-6 justify-start items-center text-white px-2 py-4 bg-opacity-15 `} >
        <Subbar/>
        <Outlet/>
      </Container>
    </div>
  )
}

export default App