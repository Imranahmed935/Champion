import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const AllEquipment = () => {
  const [allData, setAllData] = useState([]);
  const { loading } = useContext(AuthContext);
  const [sortOrder, setSortOrder] = useState("asc");
  const [Search, setSearch] = useState("");
  const [itemsPages, setItemsPages] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  const productOfPage = Math.ceil(totalCount / itemsPages);
  const pages = [...Array(productOfPage).keys()];

  useEffect(() => {
    fetch(
      `https://champion-choice-server.vercel.app/addEquipment?search=${Search}&page=${currentPage}&size=${itemsPages}`
    )
      .then((response) => response.json())
      .then((data) => {
        setAllData(data.data);
        setTotalCount(data.totalCount);
      })
      .catch((error) => console.error("Error fetching equipment data:", error));
  }, [Search, currentPage, itemsPages]);

  const sortByPrice = () => {
    const sorted = [...allData].sort((a, b) => {
      return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
    });
    setAllData(sorted);
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="lg:w-9/12 mx-auto bg-[#e3e6e6] min-h-screen mb-10">
      <div className="lg:flex justify-between mb-2 items-center gap-52 mt-10">
        <h1 className="text-2xl font-semibold text-gray-600">
          All Sports Equipment
        </h1>

        <div className="relative lg:w-1/3 w-full group">
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            className="input input-bordered w-full px-4 py-2 pl-10 hover:outline-emerald-500 rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            placeholder="Search"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 opacity-70 text-gray-500 hover:text-blue-300 transition-all"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="text-center mt-4 lg:mt-0">
          <button
            onClick={sortByPrice}
            className="btn bg-purple-600 text-white hover:text-black rounded-md py-2 transition duration-300"
          >
            Sort by Price ({sortOrder === "asc" ? "Ascending" : "Descending"})
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        {allData.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-xl font-semibold text-gray-500">
              No equipment found. Try searching for something else.
            </p>
          </div>
        ) : (
          <table className="min-w-full table-auto border-collapse bg-white border border-gray-300 rounded-lg shadow-lg">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-4 py-3 text-xl font-semibold text-left">#</th>
                <th className="px-4 py-3 text-xl font-semibold text-left">
                  Image
                </th>
                <th className="px-4 py-3 text-xl font-semibold text-left">
                  Name
                </th>
                <th className="px-4 py-3 text-xl font-semibold text-left">
                  Category
                </th>
                <th className="px-4 py-3 text-xl font-semibold text-left">
                  Price
                </th>
                <th className="px-4 py-3 text-xl font-semibold text-left">
                  Details
                </th>
              </tr>
            </thead>
            <tbody>
              {allData.map((data, index) => (
                <tr key={data.id || index} className="hover:bg-gray-100">
                  <td className="px-4 py-3 text-center">{index + 1}</td>
                  <td className="px-4 py-3 text-center">
                    <img
                      src={data?.image || "https://via.placeholder.com/150"}
                      alt={data.itemName}
                      className="w-20 h-20 object-cover rounded-md mx-auto"
                    />
                  </td>
                  <td className="px-4 py-3 text-center">{data.itemName}</td>
                  <td className="px-4 py-3 text-center">{data.category}</td>
                  <td className="px-4 py-3 text-center">${data.price}</td>
                  <td className="px-4 py-3 text-center">
                    <Link to={`/details/${data._id}`}>
                      <button className="btn bg-purple-600 text-white hover:text-black rounded-md px-4 py-2">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Pagination */}
      <div className="pagination flex justify-center items-center space-x-3 mt-6">
        <button
          onClick={handlePrev}
          className={`btn bg-purple-600 text-white hover:text-black rounded-md px-4 py-2 disabled:opacity-50 ${
            currentPage === 0 ? "disabled" : ""
          }`}
          disabled={currentPage === 0}
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`px-4 py-2 rounded-md ${
              currentPage === page
                ? "bg-purple-600 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-purple-500 hover:text-white"
            }`}
            key={page}
          >
            {page + 1}
          </button>
        ))}

        <button
          onClick={handleNext}
          className={`btn bg-purple-600 text-white hover:text-black rounded-md px-4 py-2 disabled:opacity-50 ${
            currentPage === pages.length - 1 ? "disabled" : ""
          }`}
          disabled={currentPage === pages.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllEquipment;
