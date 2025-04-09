import { Outlet } from "react-router";
import Header from "../components/UI/Header";
import Footer from "../components/UI/Footer";
function MainLayout() {
    return(
        <div>
            <Header/>
            <Outlet/>
<Footer/>
        </div>
    )
}

export default MainLayout