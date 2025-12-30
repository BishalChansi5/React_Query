import React, { useEffect } from "react";
import Navbar from "./Navbar";
import { Outlet, useLocation } from "react-router-dom";
import { useNavigation } from "react-router-dom";

const AppLayout = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigation = useNavigation();
  // console.log(navigation);
  if (navigation.state === "loading") {
    return (
      <div>
        <Navbar />
        <div className="grid grid-cols-4 gap-6 container mx-auto w-full pt-20">
          {Array(10)
            .fill(0)
            .map((_, index) => (
              <div
                key={index}
                className="border-4 border-gray-200 rounded-xl h-80 w-60 p-4 animate-pulse"
              >
                <div className="w-full bg-gray-200 h-40 rounded-2xl"></div>
                <div className="flex mt-4 gap-2 items-center">
                  <div className="bg-gray-200 h-10 w-10  rounded-full"></div>
                  <div className="bg-gray-200 h-6 w-40 rounded-md"></div>
                </div>
                <div className="bg-gray-200 h-6 w-full rounded-md mt-4"></div>
              </div>
            ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <section className="pt-20 container mx-auto">
        <Outlet />
      </section>
    </div>
  );
};

export default AppLayout;
