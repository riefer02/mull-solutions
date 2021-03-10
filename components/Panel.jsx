import React from "react";

export default function Panel() {
  return (
    <div className="my-12 px-4 lg:px-12 bg-gray-100 shadow-lg">
      <div className="flex flex-col lg:flex-row text-gray-800">
        <div className="flex flex-col justify-center items-center w-full lg:w-2/3 lg:order-2 p-4 xl:p-16">
          <h2 className="my-6 font-semibold text-3xl">
            Mull Solutions Knows Right
          </h2>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum."
          </p>
          <div className="flex justify-center my-6">
            <button className="bg-gray-500 text-gray-100 border font-bold py-2 px-4 rounded lg:ml-4 shadow">
              Services
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center w-full bg-cover lg:h-auto lg:min-h-full lg:w-1/3 order-1 rounded-b-lg rounded-t-none lg:rounded-l-lg lg:rounded-r-none flex-grow">
          <img
            src="https://flintco.com/wp-content/uploads/2019/12/TexasTech_ESBII_24-1340x890.jpg"
            className="rounded-xl shadow-md mb-10 lg:my-0"
          />
        </div>
      </div>
    </div>
  );
}
