import { Outlet } from "react-router";
// import Header from "../components/Header";
// import SideBar from "../components/SideBar";

const MainLayout = () => {
    return (
        // <div className="h-screen flex">
        //     <SideBar />
            <div className="flex flex-col flex-1">
                {/* <Header /> */}
                <main className="p-4">
                    <Outlet />
                </main>
            </div>
        // </div>
    );
};

export default MainLayout;
