import { Outlet } from "react-router"; 
import Header from "../components/Header";

const MainLayout = () => {
    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <Header />
        </header>
        <main className="flex-grow">
          <Outlet />
        </main>
      </div>
    );
  };
  
  export default MainLayout;
  
