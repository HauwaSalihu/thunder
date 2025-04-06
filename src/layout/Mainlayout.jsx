import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";
function MainLayout() {
    return(
        <div className="background">
            <Header/>
            <Outlet/>
<Footer/>
        </div>
    )
}

export default MainLayout