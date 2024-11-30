import React, { useState, useEffect } from "react";

const Contact2 = () => {
  const [showButton, setShowButton] = useState(false);

  // Hàm xử lý sự kiện cuộn trang
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true); // Hiển thị nút khi cuộn xuống quá 200px
      } else {
        setShowButton(false); // Ẩn nút khi ở đầu trang
      }
    };

    // Lắng nghe sự kiện cuộn trang
    window.addEventListener("scroll", handleScroll);

    // Dọn dẹp sự kiện khi component bị unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Nhóm nút gọi, nhắn tin, định vị */}
      <div className="fixed top-1/2 right-8 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        <a
          href="tel:+123456789"
          className="relative bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping"></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
          </svg>

        </a>

        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        >
          <span className="absolute inset-0 rounded-full bg-blue-500 opacity-75 animate-ping"></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M4.804 21.644A6.707 6.707 0 0 0 6 21.75a6.721 6.721 0 0 0 3.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 0 1-.814 1.686.75.75 0 0 0 .44 1.223ZM8.25 10.875a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM10.875 12a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z" clipRule="evenodd" />
          </svg>

        </a>

        <a
          href="https://maps.google.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative bg-red-500 text-white p-3 rounded-full shadow-lg hover:bg-red-600 transition"
        >
          <span className="absolute inset-0 rounded-full bg-red-500 opacity-75 animate-ping"></span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
          </svg>

          
        </a>
      </div>

      {/* Nút cuộn lên */}
      {showButton && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 bg-gray-500 text-white p-3 rounded-full shadow-lg hover:bg-gray-600 transition z-50"
        >
          {/* Hiệu ứng nhấp nháy */}
          <span className="absolute inset-0 rounded-full bg-gray-500 opacity-75 animate-ping"></span>
          {/* Icon nút cuộn */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" clipRule="evenodd" />
          </svg>

        </button>
      )}
    </>
  );
};

export default Contact2;
