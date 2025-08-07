import React, { useState, useEffect } from "react";

const PopupModal = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000); // Show after 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full text-center relative">
        {/* Close Button */}
        <button
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
          onClick={() => setShow(false)}
        >
          &times;
        </button>

        <h2 className="text-brand-black text-2xl font-bold mb-2">Join Our Fashion Club!</h2>
        <p className="text-brand-black mb-4">Sign up to get exclusive offers & updates.</p>

        {/* Sign Up / Sign In Buttons */}
        <div className="flex flex-col gap-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 p-2 rounded"
          />
          <button
  className="text-white py-2 px-4 rounded transition"
  style={{ backgroundColor: "#191970" }}
  onMouseEnter={(e) => (e.target.style.backgroundColor = "#0000CD")}
  onMouseLeave={(e) => (e.target.style.backgroundColor = "#191970")}
>
  Subscribe
</button>

          <button className="text-brand-black text-sm text-gray-500 hover:underline">
            Already have an account? Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
