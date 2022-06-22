import React from "react";
import HomeContainer from "./containers/Home/HomeContainer";
import WelcomeContainer from "./containers/Welcome/WelcomeContainer";
import CreateEventContainer from "./containers/Event/CreateEventContainer";
import CreateEventSuccessContainer from "./containers/Event/CreateEventSuccessContainer";
import GenerateCodeContainer from './containers/Event/GenerateCodeContainer';

export const RouteKeys = {
  Root: "/",
  CreateEvent: "create-event",
  CreateEventSuccess: "create-event-success",
  GenerateCode: "generate-code",
}

const routes = (isLoggedIn) => {
  const routesArr = [
    {
      path: RouteKeys.Root,
      element: isLoggedIn ? <HomeContainer /> : <WelcomeContainer />,
    },
    {
      path: RouteKeys.CreateEvent,
      element: <CreateEventContainer />,
    },
    {
      path: RouteKeys.CreateEventSuccess,
      element: <CreateEventSuccessContainer />,
    },
    {
      path: RouteKeys.GenerateCode,
      element: <GenerateCodeContainer />,
    },
  ];

  return routesArr;
};

export default routes;
