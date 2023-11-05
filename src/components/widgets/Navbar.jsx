import { NavLink } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Navbar = () => {
  const { navbarActive, setNavbarActive, getAllProducts, unreadNotifications } =
    useContext(AppContext);

  const setProducts = () => {
    getAllProducts();
    setNavbarActive("products");
  };

  return (
    <div className="bg-white shadow-md rounded-lg flex gap-3 justify-between items-center p-2 min-w-32">
      <NavLink
        className={
          navbarActive === "products"
            ? "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal p-2 rounded-md cursor-pointer hover:bg-off-teal"
            : "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal/20 p-2 rounded-md cursor-pointer hover:bg-off-teal"
        }
        onClick={() => setProducts()}
        exact
        to="/admin/products"
      >
        <svg
          width="21"
          height="20"
          viewBox="0 0 21 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.3 1.5C13.3 0.5 12 0 10.8 0C9.6 0 8.2 0.5 7.3 1.5L1.5 7.1C-0.5 9.1 -0.5 12.2 1.5 14.2C3.5 16.2 6.6 16.2 8.6 14.2L14.3 8.5C16.2 6.6 16.2 3.4 14.3 1.5ZM12.9 7.1L10.1 9.9L6.5 6.4L2.1 10.8C2.1 10 2.3 9.1 3 8.5L8.7 2.8C9.2 2.3 10 2 10.7 2C11.4 2 12.2 2.3 12.8 2.8C14 4.1 14 5.9 12.9 7.1ZM17.7 5.1C17.7 5.9 17.5 6.6 17.3 7.4C18.3 8.6 18.3 10.4 17.2 11.5L14.4 14.3L12.9 12.8L10.1 15.6C8.8 16.9 7 17.6 5.3 17.6C5.5 17.9 5.7 18.2 6 18.5C8 20.5 11.1 20.5 13.1 18.5L18.8 12.8C20.8 10.8 20.8 7.7 18.8 5.7C18.3 5.5 18 5.3 17.7 5.1Z"
            fill="#645AFF"
          />
        </svg>
        All Products
      </NavLink>
      <NavLink
        className={
          navbarActive === "categories"
            ? "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal p-2 rounded-md cursor-pointer hover:bg-off-teal"
            : "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal/20 p-2 rounded-md cursor-pointer hover:bg-off-teal"
        }
        onClick={() => setNavbarActive("categories")}
        exact
        to="/admin/categories"
      >
        <svg
          width="19"
          height="20"
          viewBox="0 0 19 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.3 2C18.3 0.897 17.403 0 16.3 0H2.30005C1.19705 0 0.300049 0.897 0.300049 2V9H18.3V2ZM13.3 6H5.30005V3H7.30005V4H11.3V3H13.3V6ZM2.30005 20H16.3C17.403 20 18.3 19.103 18.3 18V11H0.300049V18C0.300049 19.103 1.19705 20 2.30005 20ZM5.30005 14H7.30005V15H11.3V14H13.3V17H5.30005V14Z"
            fill="#4842AC"
            fill-opacity="0.68"
          />
        </svg>
        Categories
      </NavLink>
      <NavLink
        className={
          navbarActive === "shelves"
            ? "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal p-2 rounded-md cursor-pointer hover:bg-off-teal"
            : "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal/20 p-2 rounded-md cursor-pointer hover:bg-off-teal"
        }
        onClick={() => setNavbarActive("shelves")}
        exact
        to="/admin/shelves"
      >
        <svg
          width="19"
          height="18"
          viewBox="0 0 19 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.3 0C13.2391 0 12.2217 0.421427 11.4716 1.17157C10.7214 1.92172 10.3 2.93913 10.3 4C10.3 5.06087 10.7214 6.07828 11.4716 6.82843C12.2217 7.57857 13.2391 8 14.3 8C15.3609 8 16.3783 7.57857 17.1284 6.82843C17.8786 6.07828 18.3 5.06087 18.3 4C18.3 2.93913 17.8786 1.92172 17.1284 1.17157C16.3783 0.421427 15.3609 0 14.3 0ZM0.299988 14C0.299988 12.9391 0.721415 11.9217 1.47156 11.1716C2.22171 10.4214 3.23912 10 4.29999 10C5.36085 10 6.37827 10.4214 7.12842 11.1716C7.87856 11.9217 8.29999 12.9391 8.29999 14C8.29999 15.0609 7.87856 16.0783 7.12842 16.8284C6.37827 17.5786 5.36085 18 4.29999 18C3.23912 18 2.22171 17.5786 1.47156 16.8284C0.721415 16.0783 0.299988 15.0609 0.299988 14ZM10.3 11C10.3 10.7348 10.4053 10.4804 10.5929 10.2929C10.7804 10.1054 11.0348 10 11.3 10H17.3C17.5652 10 17.8196 10.1054 18.0071 10.2929C18.1946 10.4804 18.3 10.7348 18.3 11V16C18.3 16.5304 18.0893 17.0391 17.7142 17.4142C17.3391 17.7893 16.8304 18 16.3 18H12.3C11.7696 18 11.2608 17.7893 10.8858 17.4142C10.5107 17.0391 10.3 16.5304 10.3 16V11ZM0.299988 1C0.299988 0.734784 0.405345 0.48043 0.592881 0.292893C0.780417 0.105357 1.03477 0 1.29999 0H7.29999C7.5652 0 7.81956 0.105357 8.00709 0.292893C8.19463 0.48043 8.29999 0.734784 8.29999 1V6C8.29999 6.53043 8.08927 7.03914 7.7142 7.41421C7.33913 7.78929 6.83042 8 6.29999 8H2.29999C1.76955 8 1.26085 7.78929 0.885774 7.41421C0.510701 7.03914 0.299988 6.53043 0.299988 6V1Z"
            fill="#4842AC"
            fill-opacity="0.68"
          />
        </svg>
        Shelves
      </NavLink>
      <NavLink
        className={
          navbarActive === "users"
            ? "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal p-2 rounded-md cursor-pointer hover:bg-off-teal"
            : "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal/20 p-2 rounded-md cursor-pointer hover:bg-off-teal"
        }
        onClick={() => setNavbarActive("users")}
        exact
        to="/admin/users"
      >
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.29999 0C9.36085 0 10.3783 0.421427 11.1284 1.17157C11.8786 1.92172 12.3 2.93913 12.3 4C12.3 5.06087 11.8786 6.07828 11.1284 6.82843C10.3783 7.57857 9.36085 8 8.29999 8C7.23912 8 6.22171 7.57857 5.47156 6.82843C4.72142 6.07828 4.29999 5.06087 4.29999 4C4.29999 2.93913 4.72142 1.92172 5.47156 1.17157C6.22171 0.421427 7.23912 0 8.29999 0ZM8.29999 10C12.72 10 16.3 11.79 16.3 14V16H0.299988V14C0.299988 11.79 3.87999 10 8.29999 10Z"
            fill="#837EC7"
          />
        </svg>
        Users
      </NavLink>
      <NavLink
        className={
          navbarActive === "notifications"
            ? "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal p-2 rounded-md cursor-pointer hover:bg-off-teal"
            : "flex gap-2 items-center font-bold text-[16px] text-primary-color bg-off-teal/20 p-2 rounded-md cursor-pointer hover:bg-off-teal"
        }
        onClick={() => setNavbarActive("notifications")}
        exact
        to="/admin/notifications"
      >
        <div className="relative ">
          <svg
            width="20"
            height="22"
            viewBox="0 0 20 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.0859 13.7467L17.1077 11.7864V9.18966C17.1054 7.39512 16.4317 5.66517 15.2169 4.3343C14.0021 3.00343 12.3324 2.16619 10.5308 1.98448V0.5H9.06922V1.98448C7.26756 2.16619 5.59789 3.00343 4.38307 4.3343C3.16824 5.66517 2.49456 7.39512 2.4923 9.18966V11.7864L0.514103 13.7467C0.377048 13.8824 0.300029 14.0666 0.299988 14.2586V16.431C0.299988 16.6231 0.376979 16.8073 0.514025 16.9431C0.651071 17.0789 0.836945 17.1552 1.03076 17.1552H6.14614V17.8793C6.14614 18.8396 6.5311 19.7605 7.21633 20.4395C7.90156 21.1185 8.83093 21.5 9.79999 21.5C10.769 21.5 11.6984 21.1185 12.3836 20.4395C13.0689 19.7605 13.4538 18.8396 13.4538 17.8793V17.1552H18.5692C18.763 17.1552 18.9489 17.0789 19.086 16.9431C19.223 16.8073 19.3 16.6231 19.3 16.431V14.2586C19.2999 14.0666 19.2229 13.8824 19.0859 13.7467ZM11.9923 17.8793C11.9923 18.4555 11.7613 19.008 11.3502 19.4154C10.939 19.8228 10.3814 20.0517 9.79999 20.0517C9.21855 20.0517 8.66093 19.8228 8.24979 19.4154C7.83865 19.008 7.60768 18.4555 7.60768 17.8793V17.1552H11.9923V17.8793Z"
              fill="#645AFF"
            />
          </svg>
          {unreadNotifications && (
            <div className="p-1 bg-error-color rounded-full absolute top-0 right-0 animate-ping"></div>
          )}
        </div>
        Notifications
      </NavLink>
    </div>
  );
};

export default Navbar;
