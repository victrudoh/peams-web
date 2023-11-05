import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../../context/AppContext";
import AddProduct from "../products/AddProduct";

const OneCategory = () => {
  const { allProducts, showAddProducts, setShowAddProducts } =
    useContext(AppContext);
  const [filtered, setFiltered] = useState([]);

  let sn = 1;

  // SearchBar Handler
  const onSearchCangeHandler = async (e) => {
    try {
      e.preventDefault();
      const filteredUser = allProducts.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      );
      setFiltered(filteredUser);
    } catch (err) {
      return err;
    }
  };

  // populate filtered with allProducts on page load
  useEffect(() => {
    setFiltered(allProducts);
  }, []);

  return (
    <>
      {showAddProducts && <AddProduct />}
      {/* TOP */}
      <div className="w-full flex justify-between items-center font-sans pb-2 border-b border-black-ish/20">
        {/* left */}
        <div className="flex flex-col items-start p-2 gap-2 justify-between">
          {/* left top */}
          <div className="flex gap-4 items-center">
            <span className="font-semibold text-black-ish/70">All Drugs</span>
            <span className="text-xs p-1 rounded-md bg-primary-color/10 text-primary-color/70">
              {allProducts ? allProducts.length : 0}{" "}
              {allProducts?.length === 1 ? "Drug " : "Drugs "}
              Registered
            </span>
          </div>
          {/* left bottom */}
          <span className="text-xs text-black-ish/50">
            This shows a list of all drug available in the system
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
            placeholder="search product name..."
            className="border-r-2 border-t-2 border-b-2 border-gray-300/50 rounded-r-lg p-2 pl-4 font-light text-sm w-[450px] outline-primary-color/50"
            onChange={onSearchCangeHandler}
          />
        </div>
        <div
          className="p-2 bg-primary-color rounded-md text-white-ish flex gap-1 items-center font-semibold cursor-pointer hover:bg-primary-color/80"
          onClick={() => setShowAddProducts(true)}
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
          Add New Product
        </div>
      </div>
      <div className="min-w-full flex flex-col items-start">
        {/* <div className="bg-green-400 p-4 h-12 w-full">Top</div> */}
        <div className="">
          <table className="w-full text-center table-fixed">
            <thead className="text-gray-700/60 font-light h-12 bg-off-teal/20">
              <tr>
                <th className="w-[4rem]">S/N</th>
                <th>Name</th>
                <th>Batch No.</th>
                <th>Expiry Date</th>
                <th>Expiry Threshold</th>
                <th>Days Left</th>
                <th>Quantity</th>
                <th>Shelf</th>
                <th>Category</th>
                <th>Status</th>
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
                        className="h-10 cursor-pointer text-gray-500 hover:bg-off-teal py-2 border-b-2 border-gray-300/40"
                        // onClick={() => gotoStudent(item._id)}
                      >
                        <td>{sn++}</td>
                        <td className="text-black">{item.name}</td>
                        <td>{item.batch_no}</td>
                        <td>{item.expiry_date.split("T")[0]}</td>
                        <td>
                          {item.expiry_threshhold}{" "}
                          {item.expiry_threshhold === 1 ? "Day" : "Days"}
                        </td>
                        <td>
                          {item.days_until_expiry}{" "}
                          {item.days_until_expiry === 1 ? "Day" : "Days"}
                        </td>
                        <td>
                          {item.quantity} {item.unit}(s)
                        </td>
                        <td>{item.shelfName}</td>
                        <td>{item.categoryName}</td>
                        {item.days_until_expiry > item.expiry_threshhold && (
                          <td className="text-green-500">
                            <span className="text-green-500 p-1 px-2 bg-green-300/40 rounded-md text-sm">
                              Safe
                            </span>
                          </td>
                        )}
                        {item.days_until_expiry < item.expiry_threshhold &&
                          item.days_until_expiry >= 0 && (
                            <td className="">
                              <span className="text-yellow-500 p-1 bg-yellow-300/40 rounded-md text-sm">
                                Near Expiry
                              </span>
                            </td>
                          )}

                        {item.days_until_expiry < 0 && (
                          <td className="">
                            <span className="text-red-500 p-1 bg-red-300/40 rounded-md text-sm">
                              Expired
                            </span>
                          </td>
                        )}

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

export default OneCategory;
