import { Provider } from "react-redux";
import Body from "./components/Body";
import Header from "./components/Header";
import "./index.css";
import store from "./Redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import Dwmo from "./components/Dwmo";
import Demo1 from "./components/Demo1";
function App() {
  const appRouter = createBrowserRouter([
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
        {
          path: "Demo",
          element: (
            <>
              <Dwmo /> <Demo1 />
            </>
          ),
        },
      ],
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
