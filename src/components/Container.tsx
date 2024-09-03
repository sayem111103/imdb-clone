import React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[70%] sm:w-10/12 md:w-10/12 mx-auto">{children}</div>;
};

export default Container;
