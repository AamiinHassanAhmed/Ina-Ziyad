import { createBrowserRouter, Outlet } from "react-router-dom";
import { Navbar } from "../components/utils/Navbar";
import { Footer } from "../components/utils/Footer";
import { Hero } from "../pages/ui/Home/Hero";


// import UpdateCat from "../dashboard/categories/UpdateDataCat";
// import Admin from "../dashboard/admin/Admin";

const Routes = () => {
  return (
    <>
      <div className=" w-full h-[3vh] ">
        {" "}
        <Navbar />{" "}
      </div>
      <div className="flex flex-grow bg-white/40  min-h-screen">
        {" "}
        <Outlet />{" "}
      </div>
      <div>
        {" "}
        <Footer />{" "}
      </div>
    </>
  );
};

export default Routes;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Routes />,
    children: [
      {
        index: true,
        element: <Hero />,
      }
     
    ],
  },

  // {
//     path: "/dashboard",
//     element: <DashRouter />,
//     children: [
//       {
//         index: true,
//         element: <Main />,
//       },
//       {
//         path: "products",
//         element: <Product />,
//       },
//       {
//         path: "Recycled",
//         element: <RecycledProduct />,
//       },
//       {
//         path: "transections",
//         element: <AllTransactions />,
//       },

//       {
//         path: "order",
//         element: <OrderPage />,
//       },

//       {
//         path: "Users",
//         element: <ListUsers />,
//       },

//       {
//         path: "categories",
//         element: <ALlCategory />,
//       },
//       {
//         path: "reports",
//         element: <UserOrderReport />,
//       },
//       {
//         path: "profileuser",
//         element: <Profileuser />,
//       },
//       {
//         path: "categories",
//         children: [
//           {
//             index: true,
//             element: <ALlCategory />,
//           },
//         ],
//       },
//       {
//         path: "update/:id",
//         // element: <UpdateCat />,
//       },
//     ],
//   },
]);
