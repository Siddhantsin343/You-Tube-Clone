import { Provider } from "react-redux";
import Body from "./compontent/Body";
import Head from "./compontent/Head";
import store from "./compontent/utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./compontent/MainContainer";
import WatchPage from "./compontent/WatchPage";
const App = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={appRoute} />
    </Provider>
  );
};
export default App;
