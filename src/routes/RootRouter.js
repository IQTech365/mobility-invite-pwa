import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import routes from "../routes";

const RootRouter = ({}) => {
  const { signInSuccess } = useSelector((state) => state.SignIn);

  return (
    <Routes>
      {routes(signInSuccess).map((route, i) => {
        return <Route path={route.path} element={route.element} key={i} />;
      })}
    </Routes>
  );
};

export default RootRouter;
