import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { error } from "../helpers/Alert";
// import axios from "axios";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
export const AppProvider = ({ children }) => {
  /*
        ********
        *********
        ***********
        STATES
      */

  // MISC
  const [topbarTitle, setTopbarTitle] = useState("Dashboard");
  const [navbarActive, setNavbarActive] = useState("products");
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser] = useState({});
  const [token, setToken] = useState();
  const [switchAuthLayout, setSwitchAuthLayout] = useState("user");

  // PRODUCTS
  const [allProducts, setAllProducts] = useState();
  const [oneProduct, setOneProduct] = useState();
  const [productId, setProductId] = useState();
  const [showAddProducts, setShowAddProducts] = useState();
  const [showEditProducts, setShowEditProducts] = useState();

  // USERS
  const [allUsers, setAllUsers] = useState();
  const [oneUser, setOneUser] = useState();
  const [userId, setUserId] = useState();
  const [showAddUsers, setShowAddUsers] = useState();
  const [showEditUsers, setShowEditUsers] = useState();

  // CATEGORIES
  const [allCategories, setAllCategories] = useState();
  const [oneCategory, setOneCategory] = useState();
  const [categoryId, setCategoryId] = useState();
  const [showAddCategory, setShowAddCategory] = useState();
  const [showEditCategory, setShowEditCategory] = useState(false);

  // SHELVES
  const [allShelves, setAllShelves] = useState();
  const [oneShelf, setOneShelf] = useState();
  const [shelfId, setShelfId] = useState();
  const [showAddShelf, setShowAddShelf] = useState();
  const [showEditShelf, setShowEditShelf] = useState(false);

  // NOTIFICATIONS
  const [allNotifications, setAllNotifications] = useState();
  const [unreadNotifications, setUnreadNotifications] = useState(false);

  // **************** //
  //*** FUNCTIONS ***//
  // **************** //

  // USERS
  // Get active user
  const getActiveUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const response = await axios.get(
        `https://peams-api.onrender.com/api/users/one?id=${userId}`,
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setActiveUser(response.data.data);
    } catch (err) {
      if (err.response) {
        error(err.response.data?.message);
        error(err.response.data?.error);
      }
      error("Something went wrong!.");
      console.log("~ activeUser ~ error", err);
    }
  };

  // Get One User
  const getOneUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/users/one?id=${userId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:139 ~ getOneUser ~ response:",
      //   response
      // );
      setLoading(false);
      setOneUser(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:143 ~ getOneUser ~ err:", err);
      setLoading(false);
      error("Couldn't fetch product");
      // error(err.response.data?.error);
    }
  };

  // Get All users
  const getAllUsers = async () => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/users`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:100 ~ getAllUsers ~ response:",
      //   response
      // );
      setAllUsers(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:106 ~ getAllUsers ~ err:", err);
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // PRODUCTS
  // Get Products
  const getAllProducts = async () => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/products`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:91 ~ getAllProducts ~ response:",
      //   response
      // );
      setAllProducts(response.data.data);
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:94 ~ getAllProducts ~ error:",
        err
      );
      error("Couldn't fetch products");
      error(err.response.data?.error);
    }
  };

  // Get One Product
  const getOneProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/products/one?id=${productId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:139 ~ getOneProduct ~ response:",
      //   response
      // );
      setLoading(false);
      setOneProduct(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:143 ~ getOneProduct ~ err:", err);
      setLoading(false);
      error("Couldn't fetch product");
      // error(err.response.data?.error);
    }
  };

  // CATEGORIES
  // Get All Categories
  const getAllCategories = async () => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/categories`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:166 ~ getAllCategories ~ response:",
      //   response
      // );
      setAllCategories(response.data.data);
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:169 ~ getAllCategories ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // Get Products by category
  const getProductsByCategory = async (id) => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/products/by-category?categoryId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:161 ~ getProductsByCategory ~ response:",
      //   response
      // );
      setAllProducts(response.data.data);
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:193 ~ getProductsByCategory ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // Get One Category
  const getOneCategory = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/categories/one?id=${categoryId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      console.log(
        "🚀 ~ file: AppContext.jsx:212 ~ getOneCategory ~ response:",
        response
      );
      setLoading(false);
      setOneCategory(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:219 ~ getOneCategory ~ err:", err);
      setLoading(false);
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // SHELVES
  // Get All Shelves
  const getAllShelves = async () => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/shelves`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:236 ~ getAllShelves ~ response:",
      //   response
      // );
      setAllShelves(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:239 ~ getAllShelves ~ err:", err);
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // Get Products by shelf
  const getProductsByShelf = async (id) => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/products/by-shelf?shelfId=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:272 ~ getProductsByShelf ~ response:",
      //   response
      // );
      setAllProducts(response.data.data);
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:275 ~ getProductsByShelf ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // Get One Shelf
  const getOneShelf = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/shelves/one?id=${shelfId}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:304 ~ getOneShelf ~ response:",
      //   response
      // );
      setLoading(false);
      setOneShelf(response.data.data);
    } catch (err) {
      console.log("🚀 ~ file: AppContext.jsx:311 ~ getOneShelf ~ err:", err);
      setLoading(false);
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // NOTIFICATIONS
  // Get All Notifications
  const getAllNotifications = async () => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/notifications`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:334 ~ getAllNotifications ~ response:",
      //   response
      // );
      setAllNotifications(response.data.data.reverse());
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:337 ~ getAllNotifications ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // check for unread notifications
  const checkReadNotifications = async () => {
    const hasRead = await allNotifications?.some((item) => {
      return item.read === false;
    });
    setUnreadNotifications(hasRead);
  };

  // check for expiring/expired products
  const getExpiringProducts = async () => {
    // Create a Date object with the current time in Lagos (UTC+1 with daylight saving time)
    const lagosTimeZoneOffset = 60; // Lagos is UTC+1
    const now = new Date(new Date().getTime() + lagosTimeZoneOffset * 60000);

    // Check if the current time is between 8 am and 12 pm
    const currentHour = now.getUTCHours();

    if (currentHour >= 8 && currentHour < 12) {
      try {
        const response = await axios.get(
          `https://peams-api.onrender.com/api/products/expiring`,
          {
            headers: {
              "content-type": "application/json",
            },
          }
        );
        // Your code to handle the response
        getAllNotifications();
      } catch (err) {
        console.log("Error:", err);
        error("Couldn't fetch products");
        error(err.response?.data?.error);
      }
    } else {
      console.log(
        "Function is not executed because it's outside the specified time range."
      );
    }
  };

  /* ***********
   *********
   ********
   */

  // ****Fetch Everything ****//
  useEffect(() => {
    setToken(localStorage.getItem("token"));

    getActiveUser();

    if (activeUser) {
      // Products
      getAllProducts();

      // Users
      getAllUsers();

      // Categories
      getAllCategories();

      // Shelves
      getAllShelves();

      // Notifications
      getAllNotifications();
      getExpiringProducts();
    }

    // Test
    // getOneTest();

    // Students
    // getAllStudents();
  }, []);

  // Category
  useEffect(() => {
    if (categoryId) {
      getOneCategory();
    }
  }, [categoryId]);

  // Product
  useEffect(() => {
    if (productId) {
      getOneProduct();
    }
  }, [productId]);

  // User
  useEffect(() => {
    if (userId) {
      getOneUser();
    }
  }, [userId]);

  // Shelf
  useEffect(() => {
    if (shelfId) {
      getOneShelf();
    }
  }, [shelfId]);

  // Notification
  useEffect(() => {
    if (allNotifications) {
      checkReadNotifications();
    }
  }, [allNotifications]);

  return (
    <AppContext.Provider
      value={{
        /*
          ********
          *********
          ***********
          MISC
        */
        token,
        loading,
        activeUser,
        topbarTitle,
        navbarActive,
        switchAuthLayout,

        setLoading,
        setActiveUser,
        setTopbarTitle,
        setNavbarActive,
        setSwitchAuthLayout,

        // Products
        productId,
        oneProduct,
        allProducts,
        showAddProducts,
        showEditProducts,

        setProductId,
        setOneProduct,
        setAllProducts,
        getAllProducts,
        setShowAddProducts,
        setShowEditProducts,

        // Users
        userId,
        oneUser,
        allUsers,
        showAddUsers,
        showEditUsers,

        setUserId,
        setOneUser,
        setAllUsers,
        getAllUsers,
        setShowAddUsers,
        setShowEditUsers,

        // Categories
        categoryId,
        oneCategory,
        allCategories,
        showAddCategory,
        showEditCategory,

        setCategoryId,
        setOneCategory,
        setAllCategories,
        getAllCategories,
        setShowAddCategory,
        setShowEditCategory,
        getProductsByCategory,

        // Shelves
        shelfId,
        oneShelf,
        allShelves,
        showAddShelf,
        showEditShelf,

        setShelfId,
        setOneShelf,
        setAllShelves,
        getAllShelves,
        setShowAddShelf,
        setShowEditShelf,
        getProductsByShelf,

        // Notifications
        allNotifications,
        unreadNotifications,

        setAllNotifications,
        getAllNotifications,
        setUnreadNotifications,

        /* ***********
         *********
         ********
         */
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
