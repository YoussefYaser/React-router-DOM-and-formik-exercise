import { Outlet } from "react-router-dom"
import NavComp from "../Nav/NavComp"
import Footer from "../Footer/Footer"


export default function Layout() {
    return (
        <>
            
                <NavComp></NavComp>
                <Outlet></Outlet>
                <Footer></Footer>
        </>
    )
}
