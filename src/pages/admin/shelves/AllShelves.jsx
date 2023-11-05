import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";
import { useNavigate } from "react-router-dom";
import AddShelf from "./AddShelf";
import EditShelf from "./EditShelf";
import axios from "axios";
import { error, success } from "../../../helpers/Alert";

const AllShelves = () => {
  const {
    allShelves,
    showAddShelf,
    setShowAddShelf,
    setShelfId,
    showEditShelf,
    getAllShelves,
    setShowEditShelf,
    getProductsByShelf,
  } = useContext(AppContext);

  const [filtered, setFiltered] = useState([]);

  const navigate = useNavigate();

  const gotoShelf = async (id) => {
    getProductsByShelf(id);
    navigate(`/admin/shelves/one?id=${id}`);
  };

  const editHandler = (id) => {
    setShelfId(id);
    setShowEditShelf(true);
  };

  const deleteHandler = async (id) => {
    try {
      const response = await axios.delete(
        // `https://peams-api.onrender.com/api/products`,
        `https://peams-api.onrender.com/api/shelves/delete?id=${id}`,
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
      success("Deleted shelf successfully");
      getAllShelves();
    } catch (err) {
      console.log(
        "🚀 ~ file: AppContext.jsx:94 ~ getAllProducts ~ error:",
        err
      );
      error(err.response.data?.message);
      error(err.response.data?.error);
    }
  };

  // SearchBar Handler
  const onSearchCangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = allShelves.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  // populate filtered with allShelves on page load
  useEffect(() => {
    setFiltered(allShelves);
  }, []);

  return (
    <>
      {showAddShelf && <AddShelf />}
      {showEditShelf && <EditShelf />}
      {/* TOP */}
      <div className="w-full flex justify-between items-center font-sans pb-2 border-b border-black-ish/20">
        {/* left */}
        <div className="flex flex-col items-start p-2 gap-2 justify-between">
          {/* left top */}
          <div className="flex gap-4 items-center">
            <span className="font-semibold text-black-ish/70">All Shelves</span>
            <span className="text-xs p-1 rounded-md bg-primary-color/10 text-primary-color/70">
              {allShelves ? allShelves.length : 0}{" "}
              {allShelves?.length === 1 ? "Shelf" : "Shelves"} Registered
            </span>
          </div>
          {/* left bottom */}
          <span className="text-xs text-black-ish/50">
            This shows a list of all shelves available in the system
          </span>
        </div>
        {/* Middle */}
        <div className="flex item-center">
          <span className="border-l-2 border-t-2 border-b-2 border-gray-300/50 rounded-l-lg p-2 flex justify-center item-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21L16.65 16.65M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                stroke="#ABB1BB"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="search shelf name..."
            className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-primary-color/50"
            onChange={onSearchCangeHandler}
          />
        </div>
        {/* Right */}
        <div
          className="p-2 bg-primary-color rounded-md text-white-ish flex gap-1 items-center font-semibold cursor-pointer hover:bg-primary-color/80"
          onClick={() => setShowAddShelf(true)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.99996 4.16663V15.8333M4.16663 9.99996H15.8333"
              stroke="white"
              stroke-width="1.67"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Add New Shelf
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {filtered ? (
          <>
            {filtered.map((item, i) => (
              <>
                <div
                  key={i}
                  //   onClick={() => gotoShelf(item._id)}
                  className="p-4 rounded-md shadow-md border border-gray-500/20 h-32 flex flex-col justify-between hover:shadow-lg hover:shadow-primary-color/40"
                >
                  <div className="flex w-full items-center justify-between font-semibold text-black-ish/70">
                    {item.name}
                    <div className="flex items-center gap-2">
                      {/* view */}
                      <span
                        onClick={() => gotoShelf(item._id)}
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
                      {/* edit */}
                      <span
                        onClick={() => editHandler(item._id)}
                        className="cursor-pointer text-yellow-500 hover:animate-bounce"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M19 9.99994C18.7348 9.99994 18.4804 10.1053 18.2929 10.2928C18.1054 10.4804 18 10.7347 18 10.9999V16.9999C18 17.2652 17.8946 17.5195 17.7071 17.707C17.5196 17.8946 17.2652 17.9999 17 17.9999H3C2.73478 17.9999 2.48043 17.8946 2.29289 17.707C2.10536 17.5195 2 17.2652 2 16.9999V2.99994C2 2.73472 2.10536 2.48037 2.29289 2.29283C2.48043 2.1053 2.73478 1.99994 3 1.99994H9C9.26522 1.99994 9.51957 1.89458 9.70711 1.70705C9.89464 1.51951 10 1.26516 10 0.999939C10 0.734722 9.89464 0.480369 9.70711 0.292832C9.51957 0.105296 9.26522 -6.10352e-05 9 -6.10352e-05H3C2.20435 -6.10352e-05 1.44129 0.31601 0.87868 0.878619C0.316071 1.44123 0 2.20429 0 2.99994V16.9999C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 19.9999 3 19.9999H17C17.7956 19.9999 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 16.9999V10.9999C20 10.7347 19.8946 10.4804 19.7071 10.2928C19.5196 10.1053 19.2652 9.99994 19 9.99994ZM4 10.7599V14.9999C4 15.2652 4.10536 15.5195 4.29289 15.707C4.48043 15.8946 4.73478 15.9999 5 15.9999H9.24C9.37161 16.0007 9.50207 15.9755 9.62391 15.9257C9.74574 15.8759 9.85656 15.8026 9.95 15.7099L16.87 8.77994L19.71 5.99994C19.8037 5.90698 19.8781 5.79637 19.9289 5.67452C19.9797 5.55266 20.0058 5.42195 20.0058 5.28994C20.0058 5.15793 19.9797 5.02722 19.9289 4.90536C19.8781 4.7835 19.8037 4.6729 19.71 4.57994L15.47 0.289939C15.377 0.19621 15.2664 0.121816 15.1446 0.0710475C15.0227 0.0202789 14.892 -0.00585938 14.76 -0.00585938C14.628 -0.00585938 14.4973 0.0202789 14.3754 0.0710475C14.2536 0.121816 14.143 0.19621 14.05 0.289939L11.23 3.11994L4.29 10.0499C4.19732 10.1434 4.12399 10.2542 4.07423 10.376C4.02446 10.4979 3.99924 10.6283 4 10.7599ZM14.76 2.40994L17.59 5.23994L16.17 6.65994L13.34 3.82994L14.76 2.40994ZM6 11.1699L11.93 5.23994L14.76 8.06994L8.83 13.9999H6V11.1699Z"
                            fill="#ECF032"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-end gap-2">
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
                  </div>
                </div>
              </>
            ))}
          </>
        ) : (
          <>
            <span>No shelves, add some?</span>
          </>
        )}
      </div>
    </>
  );
};

export default AllShelves;
