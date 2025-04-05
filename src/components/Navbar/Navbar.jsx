import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import logo from "../../assets/images/The-Royal-Rock-Logo.webp";
import PaymentSystem from "../../pages/Payment/PaymentSystem/PaymentSystem";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showDonate, setShowDonate] = useState(false);
  const [isThankYouModalOpen, setIsThankYouModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState("");
  const [error, setError] = useState("");
  const location = useLocation();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  // Handle Continue button in the donation modal
  const handleContinue = () => {
    const amount = selectedAmount || customAmount;
    if (!amount || amount <= 0) {
      setError("Please select or enter a valid donation amount.");
      return;
    }

    setShowDonate(false); // Close the donation modal
    setIsPaymentModalOpen(true); // Open the payment modal
    setError("");
  };

  const handlePaymentSuccess = () => {
    setIsPaymentModalOpen(false); // Close the payment modal
    setIsThankYouModalOpen(true); // Open the "Thank You" modal
  };

  return (
    <nav className="bg-[#8b0000] px-4 h-20 flex justify-between items-center fixed w-full z-50  2xl:px-80 lg:px-40 md:px-11 sm:h-22 ">
      <div className="logo">
        <Link to="/">
          <img className="w-[70px] h-[70px]" alt="logo" loading="lazy" />
        </Link>
      </div>
      <div className="flex items-center">
        {/* Hamburger Menu for Mobile */}
        <div className="mr-4 text-[#e0c999] cursor-pointer sm:hidden">
          <label className="hamburger cursor-pointer">
            <input
              type="checkbox"
              className="hidden"
              checked={menuOpen}
              onChange={toggleMenu}
            />
            <svg
              viewBox="0 0 32 32"
              className={`h-6 transition-transform duration-600 ease-in-out ${
                menuOpen ? "rotate-[-45deg]" : ""
              }`}
            >
              <path
                className="line line-top-bottom fill-none stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
                style={{
                  strokeDasharray: menuOpen ? "20 300" : "12 63",
                  strokeDashoffset: menuOpen ? "-32.42" : "0",
                }}
              ></path>
              <path
                className="line fill-none stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round transition-[stroke-dasharray,stroke-dashoffset] duration-600 ease-in-out"
                d="M7 16 27 16"
              ></path>
            </svg>
          </label>
        </div>

        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 sm:hidden"
            onClick={toggleMenu}
          ></div>
        )}

        {/* Mobile Menu */}
        <ul
          className={`fixed top-0 right-0 h-full w-64 bg-[#8b0000] text-[#e0c999] flex flex-col gap-6 p-6 transform transition-transform duration-300 ease-in-out z-50 sm:hidden ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <li>
            <button
              onClick={toggleMenu}
              className="text-white text-2xl absolute top-4 right-4"
            >
              &times;
            </button>
          </li>
          <li>
            <Link
              className={`hover:border-b hover:border-[#e0c999] block py-2 ${
                isActive("/") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/"
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`block py-2 ${
                isActive("/about") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/about"
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`block py-2 ${
                isActive("/whatwedo") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/whatwedo"
              onClick={toggleMenu}
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <button className="bg-[#e0c999] px-4 py-2 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#282936] before:to-[#282936] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#8b0000] hover:text-[#e0c999]">
                Contact Us
              </button>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                setShowDonate(true);
                toggleMenu();
              }}
              className="relative rounded-full bg-[#282936] px-4 py-2 font-bold text-[#e0c999] hover:text-[#8b0000] transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-[#e0c999] hover:bg-[#e0c999] hover:before:bg-[#e0c999]"
            >
              Donate
            </button>
          </li>
        </ul>

        {/* Desktop Menu */}
        <ul
          className={`text-[#e0c999] hidden sm:flex sm:flex-row gap-4 items-center`}
        >
          <li>
            <Link
              className={`hover:border-b hover:border-[#e0c999] ${
                isActive("/") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b hover:border-[#e0c999] ${
                isActive("/about") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`hover:border-b hover:border-[#e0c999] ${
                isActive("/whatwedo") ? "border-b border-[#e0c999]" : ""
              }`}
              to="/whatwedo"
            >
              What We Do
            </Link>
          </li>
          <li>
            <Link to="/#contact">
              <button className="bg-[#e0c999] px-4 py-2 rounded-full flex items-center justify-center cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-[#282936] before:to-[#282936] before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#8b0000] hover:text-[#e0c999]">
                Contact Us
              </button>
            </Link>
          </li>

          <li>
            <button
              onClick={() => setShowDonate(true)}
              className="relative rounded-full bg-[#282936] px-4 py-2 font-bold text-[#e0c999] hover:text-[#8b0000] transition-colors duration-300 ease-linear before:absolute before:right-1/2 before:top-1/2 before:-z-[1] before:h-3/4 before:w-2/3 before:origin-bottom-left before:-translate-y-1/2 before:translate-x-1/2 before:animate-ping before:rounded-full before:bg-[#e0c999] hover:bg-[#e0c999] hover:before:bg-[#e0c999]"
            >
              Donate
            </button>
          </li>
        </ul>
      </div>

      {/* Donation Amount Modal */}
      {showDonate && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition-transform duration-300">
            <h2 className="text-xl text-gray-700 font-bold text-center mb-4">
              Choose Donation Amount
            </h2>

            <div className="space-y-4">
              {/* Grid for fixed amount buttons */}
              <div className="grid grid-cols-2 gap-2 md:gap-4 justify-center items-center">
                {[20, 25, 30, 35].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => {
                      setSelectedAmount(amount);
                      setCustomAmount("");
                      setError("");
                    }}
                    className={`py-2 text-lg font-medium rounded-lg border text-gray-700 ${
                      selectedAmount === amount
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    } transition`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Custom amount input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Enter Custom Amount
                </label>
                <input
                  type="number"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setSelectedAmount(null);
                    setError("");
                  }}
                  className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-200"
                  placeholder="Enter amount"
                  min="1"
                />
              </div>
            </div>

            {error && <div className="text-red-500 text-sm mt-2">{error}</div>}

            <div className="mt-6 flex justify-between items-center">
              <button
                onClick={() => setShowDonate(false)} // Close the modal
                className="px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
              >
                Close
              </button>
              <button
                onClick={handleContinue}
                className="px-6 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
              >
                Continue
              </button>
            </div>
            <div className="absolute top-2 right-2 cursor-pointer">
              <IoClose
                onClick={() => setShowDonate(false)} // Close the modal
                size={30}
                className="text-gray-700 hover:text-gray-900"
              />
            </div>
          </div>
        </div>
      )}

      {/* PaymentSystem Modal */}
      {isPaymentModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full max-h-[80vh] overflow-y-auto transform scale-100 transition-transform duration-300">
            <PaymentSystem
              amount={selectedAmount || customAmount}
              onSuccess={handlePaymentSuccess}
            />
            <button
              onClick={() => {
                setIsPaymentModalOpen(false); // Close the payment modal
                setShowDonate(true); // Reopen the donation modal
              }}
              className="mt-4 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {/* Thank You Modal */}
      {isThankYouModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full transform scale-100 transition-transform duration-300">
            <h2 className="text-xl text-gray-700 font-bold text-center mb-4">
              Thank You!
            </h2>
            <p className="text-gray-700 text-center mb-4">
              Your donation of ${selectedAmount || customAmount} was successful.
              We appreciate your support!
            </p>
            <button
              onClick={() => setIsThankYouModalOpen(false)} // Close the "Thank You" modal
              className="w-full py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
