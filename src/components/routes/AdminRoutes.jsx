import { Route, Routes } from "react-router-dom";

// components
import Layed from "../Layed";
import ErrorPage from "../../pages/ErrorPage";

// Products
import AllProducts from "../../pages/admin/products/AllProducts";

// Users
import AllUsers from "../../pages/admin/users/AllUsers";

// Categories
import AllCategories from "../../pages/admin/categories/AllCategories";
import OneCategory from "../../pages/admin/categories/OneCategory";

// Shelves
import AllShelves from "../../pages/admin/shelves/AllShelves";
import OneShelf from "../../pages/admin/shelves/OneShelf";

// Notifications
import AllNotifications from "../../pages/admin/notifications/AllNotifications";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layed />}>
        <Route index element={<AllProducts />} />

        <Route path="/admin/products" element={<AllProducts />} />

        <Route path="/admin/categories" element={<AllCategories />} />
        <Route path="/admin/categories/one" element={<OneCategory />} />

        <Route path="/admin/users" element={<AllUsers />} />

        <Route path="/admin/shelves" element={<AllShelves />} />
        <Route path="/admin/shelves/one" element={<OneShelf />} />

        <Route path="/admin/notifications" element={<AllNotifications />} />

        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
