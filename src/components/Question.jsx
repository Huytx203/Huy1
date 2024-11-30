import React, { useState } from "react";

const Question = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questionData = [
    {
      question: "Website bán hàng được thiết kế bởi Agency Đà Nẵng có gì nổi bật?",
      answer:
        "Website bán hàng của chúng tôi được thiết kế với giao diện hiện đại, thân thiện với người dùng, tích hợp đầy đủ các tính năng như giỏ hàng, thanh toán trực tuyến, quản lý sản phẩm, hỗ trợ chat trực tiếp và tối ưu hóa SEO. Bên cạnh đó, website được xây dựng tương thích với mọi thiết bị để đảm bảo trải nghiệm mua sắm tốt nhất cho khách hàng của bạn.",
    },
    {
      question: "Tôi cần chuẩn bị những gì trước khi bắt đầu thiết kế website bán hàng?",
      answer:
        "Bạn cần chuẩn bị danh sách sản phẩm, thông tin chi tiết về doanh nghiệp, và các yêu cầu cụ thể để chúng tôi có thể tư vấn và xây dựng website phù hợp nhất.",
    },
    {
      question:
        "Sau khi hoàn thành, tôi có thể tự quản lý và cập nhật nội dung trên website bán hàng không?",
      answer:
        "Có, chúng tôi cung cấp hướng dẫn chi tiết để bạn có thể tự quản lý và cập nhật nội dung trên website một cách dễ dàng.",
    },
  ];

  return (

    <div className="shadow hover:shadow-lg ">
        <div className="bg-white py-10" >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-blue-600 mb-8">
          Câu hỏi thường gặp
        </h2>
        <p className="text-center text-sm text-gray-600 mb-8">
          Khi Thiết Kế Website Bán Hàng
        </p>
        <div className="space-y-6">
          {questionData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm"
            >
              <button
                className="flex justify-between items-center w-full px-4 py-3 text-left text-blue-600 font-medium hover:bg-gray-50"
                onClick={() => toggleQuestion(index)}
              >
                <span>{item.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 py-3 text-gray-600">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Question;
