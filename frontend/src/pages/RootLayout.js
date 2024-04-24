import MainNavigation from "../components/MainNavigation";
import {Outlet} from "react-router-dom";

function RootLayoutPage() {
    return (
        <>
            <MainNavigation/>
            <main>
                <Outlet/>
            </main>
        </>
    )
}

export default RootLayoutPage;