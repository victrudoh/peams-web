import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";

const AllUsers = () => {
  const { allUsers } = useContext(AppContext);
  const [filtered, setFiltered] = useState([]);

  let sn = 1;

  // SearchBar Handler
  const onSearchChangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = allUsers.filter((item) =>
        item.firstname
          .toLowerCase()
          .includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  // populate filtered with allUsers on page load
  useEffect(() => {
    setFiltered(allUsers);
  }, []);

  return (
    <>
      {/* TOP */}
      <div className="w-full flex justify-between items-center font-sans pb-2 border-b border-black-ish/20">
        {/* left */}
        <div className="flex flex-col items-start p-2 gap-2 justify-between">
          {/* left top */}
          <div className="flex gap-4 items-center">
            <span className="font-semibold text-black-ish/70">All Users</span>
            <span className="text-xs p-1 rounded-md bg-primary-color/10 text-primary-color/70">
              {allUsers ? allUsers.length : 0} Users Registered
            </span>
          </div>
          {/* left bottom */}
          <span className="text-xs text-black-ish/50">
            This shows a list of all users available in the system
          </span>
        </div>
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
            placeholder="search user first name..."
            className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-primary-color/50"
            onChange={onSearchChangeHandler}
          />
        </div>
        <div className="p-2 bg-primary-color rounded-md text-white-ish flex gap-1 items-center font-semibold cursor-pointer hover:bg-primary-color/80">
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
          Add New User
        </div>
      </div>
      <div className="min-w-full flex flex-col items-start">
        {/* <div className="bg-green-400 p-4 h-12 w-full">Top</div> */}
        <div className="h-[26rem] overflow-y-scroll">
          <table className="w-full text-center table-fixed">
            <thead className="text-gray-700/60 font-light h-12 bg-off-teal/40">
              <tr>
                <th className="w-[4rem]">S/N</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>username</th>
                <th>Email</th>
                <th>Role</th>
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
                        className="h-10 cursor-pointer text-gray-500 hover:bg-off-teal py-2 border-b-2 border-gray-300/40"
                        // onClick={() => gotoStudent(item._id)}
                      >
                        <td>{sn++}</td>
                        <td>{item.firstname}</td>
                        <td>{item.lastname}</td>
                        <td>{item.username}</td>
                        <td>{item.email}</td>
                        <td>{item.role}</td>

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
                    <td colSpan={2} className="font-semibold">
                      No Users yet, add some.
                    </td>
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

export default AllUsers;
