import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";
import { error, info, success } from "../../../helpers/Alert";
import axios from "axios";

const AllProducts = () => {
  const { allNotifications, getAllNotifications } = useContext(AppContext);

  // console.log(
  //   "🚀 ~ file: AllNotifications.jsx:6 ~ AllProducts ~ allNotifications:",
  //   allNotifications
  // );

  const [filtered, setFiltered] = useState([]);

  let sn = 1;

  const readHandler = async (id) => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `http://localhost:3033/api/notifications/read?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:161 ~ getProductsByShelf ~ response:",
      //   response
      // );
      info("Notification marked as read");
      getAllNotifications();
    } catch (err) {
      console.log(
        "🚀 ~ file: AllNotifications.jsx:37 ~ readHandler ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  const readAllHandler = async (id) => {
    try {
      const response = await axios.get(
        // `https://peams-api.onrender.com/api/products`,
        `http://localhost:3033/api/notifications/read-all?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:161 ~ getProductsByShelf ~ response:",
      //   response
      // );
      info("All notifications marked as read");
      getAllNotifications();
    } catch (err) {
      console.log(
        "🚀 ~ file: AllNotifications.jsx:37 ~ readHandler ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        // `https://peams-api.onrender.com/api/products`,
        `http://localhost:3033/api/notifications/delete?id=${id}`,
        {
          headers: {
            "content-type": "application/json",
          },
        }
      );
      // console.log(
      //   "🚀 ~ file: AppContext.jsx:161 ~ getProductsByShelf ~ response:",
      //   response
      // );
      info("Deleted notification");
      getAllNotifications();
    } catch (err) {
      console.log(
        "🚀 ~ file: AllNotifications.jsx:64 ~ deleteHandler ~ err:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // populate filtered with allNotifications on page load
  useEffect(() => {
    setFiltered(allNotifications);
  }, []);

  return (
    <>
      {/* TOP */}
      <div className="w-full px-2 flex justify-between items-center font-sans pb-2 border-b border-black-ish/20">
        {/* left */}
        <div className="flex flex-col items-start p-2 gap-2 justify-between">
          {/* left top */}
          <div className="flex gap-4 items-center">
            <span className="font-semibold text-black-ish/70">
              Notifications
            </span>
          </div>
        </div>
        {/* Right */}
        <span
          onClick={() => readAllHandler()}
          className="font-light border-b-error-color border-b-2 cursor-pointer text-error-color/70 hover:text-primary-color hover:border-b-primary-color"
        >
          Mark all as Read
        </span>
      </div>
      <div className="min-w-full flex flex-col items-start">
        {/* <div className="bg-green-400 p-4 h-12 w-full">Top</div> */}
        <div className="h-[26rem] overflow-y-scroll">
          <table className="w-full text-center table-fixed">
            <thead className="text-gray-700/60 font-light h-12 bg-off-teal/20">
              <tr>
                <th className="w-[4rem]">S/N</th>
                <th>Message</th>
                <th>Name</th>
                <th>Batch No.</th>
                <th>Expiry Date</th>
                <th>Expiry Threshold</th>
                {/* <th>Days Left</th> */}
                <th>Quantity</th>
                <th className="w-[4rem]">Shelf</th>
                <th>Category</th>
                <th className="w-[8rem]"></th>
                {/* <th className="w-[6rem]"></th> */}
                {/* <th></th> */}
                {/* <th>Actions</th> */}
              </tr>
            </thead>
            {/* <div className="my-4"></div> */}

            <tbody>
              {filtered ? (
                <>
                  {filtered.map((item, i) => (
                    <>
                      <tr
                        key={i}
                        className={
                          item.read
                            ? "h-10 cursor-pointer text-gray-400 hover:bg-off-teal py-2 border-b-2 border-gray-300/40"
                            : "h-10 cursor-pointer text-gray-800 hover:bg-off-teal py-2 border-b-2 border-gray-300/40"
                        }
                        // className="h-10 cursor-pointer text-gray-400 hover:bg-off-teal py-2 border-b-2 border-gray-300/40"
                        // onClick={() => editHandler(item._id)}
                      >
                        <td>{sn++}</td>
                        {item.product.days_until_expiry >
                          item.product.expiry_threshhold && (
                          <td className="text-green-500">
                            <span className="text-green-500 p-1 px-2 bg-green-300/40 rounded-md text-sm">
                              {item.product.days_until_expiry} Days Left
                            </span>
                          </td>
                        )}
                        {item.product.days_until_expiry <
                          item.product.expiry_threshhold &&
                          item.product.days_until_expiry >= 0 && (
                            <td className="">
                              <span className="text-yellow-500 p-1 bg-yellow-300/40 rounded-md text-sm">
                                {item.product.days_until_expiry} Days Left
                              </span>
                            </td>
                          )}

                        {item.product.days_until_expiry < 0 && (
                          <td className="">
                            <span className="text-red-500 p-1 bg-red-300/40 rounded-md text-sm">
                              {item.product.days_until_expiry} Days Left
                            </span>
                          </td>
                        )}
                        <td>{item.product.name}</td>
                        <td>{item.product.batch_no}</td>
                        <td>{item.product.expiry_date.split("T")[0]}</td>
                        <td>{item.product.expiry_threshhold} Days</td>
                        {/* <td>{item.product.days_until_expiry} Days</td> */}
                        <td>
                          {item.product.quantity} {item.product.unit}(s)
                        </td>
                        <td>{item.product.shelfName}</td>
                        <td>{item.product.categoryName}</td>
                        <td className="flex pt-[0.65rem] items-center justify-evenly">
                          {!item.read ? (
                            <>
                              {/* view */}
                              <span
                                onClick={() => readHandler(item._id)}
                                className="cursor-pointer text-green-500 hover:animate-bounce"
                              >
                                <svg
                                  width="22"
                                  height="16"
                                  viewBox="0 0 22 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M11 5C10.2044 5 9.44129 5.31607 8.87868 5.87868C8.31607 6.44129 8 7.20435 8 8C8 8.79565 8.31607 9.55871 8.87868 10.1213C9.44129 10.6839 10.2044 11 11 11C11.7956 11 12.5587 10.6839 13.1213 10.1213C13.6839 9.55871 14 8.79565 14 8C14 7.20435 13.6839 6.44129 13.1213 5.87868C12.5587 5.31607 11.7956 5 11 5ZM11 13C9.67392 13 8.40215 12.4732 7.46447 11.5355C6.52678 10.5979 6 9.32608 6 8C6 6.67392 6.52678 5.40215 7.46447 4.46447C8.40215 3.52678 9.67392 3 11 3C12.3261 3 13.5979 3.52678 14.5355 4.46447C15.4732 5.40215 16 6.67392 16 8C16 9.32608 15.4732 10.5979 14.5355 11.5355C13.5979 12.4732 12.3261 13 11 13ZM11 0.5C6 0.5 1.73 3.61 0 8C1.73 12.39 6 15.5 11 15.5C16 15.5 20.27 12.39 22 8C20.27 3.61 16 0.5 11 0.5Z"
                                    fill="#4F46E5"
                                  />
                                </svg>
                              </span>
                            </>
                          ) : (
                            <span className="w-[22px]"></span>
                          )}

                          {/* delete */}
                          <span
                            onClick={() => deleteHandler(item._id)}
                            className="cursor-pointer text-error-color hover:animate-bounce"
                            // className="cursor-pointer text-error-color transform hover:translate-y-[-8px] transition-transform duration-300"
                          >
                            <svg
                              width="14"
                              height="18"
                              viewBox="0 0 14 18"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14 1H10.5L9.5 0H4.5L3.5 1H0V3H14M1 16C1 16.5304 1.21071 17.0391 1.58579 17.4142C1.96086 17.7893 2.46957 18 3 18H11C11.5304 18 12.0391 17.7893 12.4142 17.4142C12.7893 17.0391 13 16.5304 13 16V4H1V16Z"
                                fill="#FF006E"
                              />
                            </svg>
                          </span>
                        </td>

                        {/* <td
                          className="font-lg text-red-600 font-semibold hover:text-teal-500 cursor-pointer"
                          onClick={() => deleteHandler(item._id)}
                        >
                          x
                        </td> */}
                      </tr>
                      {/* <div className="mb-2"></div> */}
                    </>
                  ))}
                </>
              ) : (
                <>
                  <tr className="h-12 bg-teal-400/20">
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td colSpan={2} className="font-semibold">
                      No Products yet, add some.
                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </>
              )}
              <div className="mb-5"></div>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
