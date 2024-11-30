import React from "react";
import { Carousel } from "flowbite-react";

const Home = () => {
  return (
    <div className=" bg-neutralSilver" id="home">
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen flex justify-center items-center">
        <Carousel className="w-full mx-auto">
          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/public/assets/banner.png" alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-3/4">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4  leading-snug">
                Truong Minh Thien{" "}
                <span className="text-brandPrimary leading-snug">
                  Developer{" "}
                </span>
                from Binh Phuoc
              </h1>
              <p className="text-neutralGrey text-base mb-8">
                Thiết kế website - Landingpage theo yêu cầu
              </p>

              <a href="https://zalo.me/i-am-truongminhthien">
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                  ZALO: 03637.39.222
                </button>
              </a>
            </div>
          </div>

          <div className="my-28 md:my-8 py-12 flex flex-col w-full mx-auto md:flex-row-reverse items-center justify-between gap-12">
            <div>
              <img src="/public/assets/banner3.png" alt="" />
            </div>
            {/* hero text */}
            <div className="md:w-1/2">
              <h1 className="text-5xl mb-4 font-semibold text-neutralDGrey md:w-3/4 leading-snug">
                Digital Marketing{" "}
                <span className="text-brandPrimary leading-snug">
                  for Social Media
                </span>
              </h1>

              <p className="text-neutralGrey text-base mb-8">
                Chạy quảng cáo - Seeding - Mở Khóa - Bảo mật - Bán nguyên liệu
              </p>
              <a href="https://zalo.me/i-am-truongminhthien">
                <button className="px-7 py-2 bg-brandPrimary text-white rounded hover:bg-neutralDGrey">
                  ZALO: 03637.39.222
                </button>
              </a>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
