import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
