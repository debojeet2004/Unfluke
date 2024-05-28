import { Outlet } from "react-router-dom"
import {Container, Navbar, Subbar} from "./Components/Components"


function App() {
  return (
    <div className={`flex flex-col gap-2 h-screen font-sans`}>
      <Container classes={` flex flex-col gap-4 justify-center items-center text-white`}>
        <Navbar/>
      </Container>
      <div className=" bg-black h-[1px]"/>
      <Container classes={`flex flex-col gap-4 justify-center items-center text-white px-2 py-4 bg-opacity-15 `} >
        <Subbar/>
        <Outlet/>
        
      </Container>
    </div>
  )
}

export default App