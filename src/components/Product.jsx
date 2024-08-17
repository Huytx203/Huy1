import React from "react";
import aboutImg from "../assets/mobile-login.png";
import Maecenas from "../assets/maecenas.png";
import { useState } from "react";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Radio, RadioGroup } from "@headlessui/react";

const frequencies = [
  { value: "facebook", label: "Facebook", priceSuffix: "/Tháng" },
  { value: "tiktok", label: "TikTok", priceSuffix: "/Tháng" },
  { value: "google", label: "Google", priceSuffix: "/Tháng" },
];
const tiers1 = [
  {
    name: " BASIC",
    id: "tier-freelancer",
    href: "#",
    price: { facebook: "$200", tiktok: "$200", google: "$200" },
    description: "Đã bao gồm phí thanh toán thẻ 2% - VAT 5%",
    features: [
      "5 bài viết hoặc video",
      "Tiếp cận 80.000+ khách hàng tiềm năng",
      "Tư Vấn Content Video miễn phí",
      "Report số liệu hàng tuần",
      "Đã bao gồm (phí thanh toán thẻ 2%)  Thuế VAT 5%",
    ],
    featured: false,
    cta: "Liên hệ chúng tôi",
  },

  {
    name: "PRO",
    id: "tier-startup",
    href: "#",
    price: { facebook: "$500", tiktok: "$500", google: "$500" },
    description: "Đã bao gồm phí thanh toán thẻ 2% - VAT 5%",
    features: {
      facebook: [
        "10 bài viết hoặc video",
        "Tiếp cận 200.000+ khách hàng tiềm năng",
        "Tư Vấn Content Video miễn phí",
        "Report số liệu hằng ngày",
        "Chưa bao gồm (phí thanh toán thẻ 2%) Thuế VAT 5%",
      ],
      tiktok: [
        "10 bài viết hoặc video",
        "Tiếp cận 500.000+ khách hàng tiềm năng",
        "Tư Vấn Content Video miễn phí",
        "Report số liệu hằng ngày",
        "Chưa bao gồm (phí thanh toán thẻ 2%) Thuế VAT 5%",
      ],
      google: [
        "10 bài viết hoặc video",
        "Tiếp cận 200.000+ khách hàng tiềm năng",
        "Tư Vấn Content Video miễn phí",
        "Report số liệu hằng ngày",
        "Chưa bao gồm (phí thanh toán thẻ 2%) Thuế VAT 5%",
      ],
    },
    featured: false,
    cta: "Liên hệ cho chúng tôi",
  },
  {
    name: "GÓI THEO NGÂN SÁCH",
    id: "tier-enterprise",
    href: "#",
    price: "Custom",
    description: "Chưa bao gồm (phí thanh toán thẻ 2%)  Thuế VAT 5%",
    features: [
      "Ngân sách thấp nhất 200,000 VNĐ/ngày",
      "Phí thanh toán 7%",
      "Phí lên camp + tư vấn content 15-20%",
      "Report số liệu hằng ngày",
    ],
    featured: true,
    cta: "Contact sales",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Product() {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <div className="my-12 mx-8" id="product">
      {/* about text */}
      {/* company stats */}
      {/* <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      > */}
      <div>
        <div className="py-12">
          <div className="container mx-auto">
            <div className="flex flex-wrap -mx-4">
              {/* Block 1 */}
              <div className="w-full sm:w-full md:w-1/3 px-4 mb-10 md:mb-0">
                <div className="relative p-1 bg-gray-100 backdrop-blur-lg rounded-lg shadow-lg overflow-hidden">
                  <div className="absolute inset-0 custom-gradient animate-gradient-x rounded-lg"></div>
                  <div className="relative z-10 bg-gray-100 backdrop-blur-lg rounded-lg p-6">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                      Chúng tôi có{" "}
                      <span className="text-brandPrimary">tất cả</span> những gì
                      bạn cần giúp{" "}
                      <span className="text-brandPrimary">quảng cáo</span> hiệu
                      quả
                    </h3>
                    <p className="text-gray-600">
                      Bất kể sản phẩm hay dịch vụ của bạn là gì,{" "}
                      <span className="text-1xl bg-clip-text text-transparent bg-gradient-to-br bg-300% from-green-400 via-blue-500 to-purple-600 animate-gradient">
                        MINH THIỆN Agency Marketing
                      </span>{" "}
                      đều có phương thức phù hợp để mang lại hiệu quả tối ưu cho
                      bạn.
                    </p>
                  </div>
                </div>
              </div>
              {/* Google Ads */}
              <div className="w-full sm:w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="text-left">
                  <div className="mb-4 size-16">
                    <img
                      className="mx-auto"
                      src="/src/iconmxh/icongoogle.png"
                      alt="Google Ads"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Quảng Cáo Google
                  </h2>
                  <p className="text-gray-600">
                    Ứng dụng Google map các nhà hàng quán ăn
                  </p>
                </div>
              </div>
              {/* Facebook Ads */}
              <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="text-left">
                  <div className="mb-4 size-16">
                    <img
                      className="mx-auto"
                      src="/src/iconmxh/iconface.png"
                      alt="Facebook Ads"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Quảng Cáo Facebook
                  </h2>
                  <p className="text-gray-600">
                    Hơn 2 tỷ người sử dụng Facebook mỗi tháng. Vì vậy, bạn sẽ
                    tìm thấy mọi loại đối tượng mình muốn tiếp cận.
                  </p>
                </div>
              </div>
              {/* Tiktok Ads */}
              <div className="w-full md:w-1/3 px-4 mt-8 mb-8 md:mb-0">
                <div className="text-left">
                  <div className="mb-4 size-16">
                    <img
                      className="mx-auto"
                      src="/src/iconmxh/icontiktok.png"
                      alt="Tiktok Ads"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Quảng Cáo Tiktok
                  </h2>
                  <p className="text-gray-600">
                    Ứng dụng tik tok theo thống kê riêng của Việt Nam đã có
                    khoảng hơn 20 triệu người dùng thường xuyên.
                  </p>
                </div>
              </div>
              {/* Zalo Ads */}
              <div className="w-full md:w-1/3 px-4 mt-8 mb-8 md:mb-0">
                <div className="text-left">
                  <div className="mb-4 size-16">
                    <img
                      className="mx-auto"
                      src="/src/iconmxh/iconzalo.png"
                      alt="Zalo Ads"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Quảng Cáo Zalo
                  </h2>
                  <p className="text-gray-600">
                    Nền tảng quảng cáo di động hàng đầu. Tiếp cận 100 triệu
                    khách hàng tiềm năng.
                  </p>
                </div>
              </div>
              {/* Multi-channel Ads */}
              <div className="w-full md:w-1/3 px-4 mt-8 mb-8 md:mb-0">
                <div className="text-left">
                  <div className="mb-4 size-16">
                    <img
                      className="mx-auto"
                      src="/src/iconmxh/iconmulti.png"
                      alt="Multi-channel Ads"
                    />
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    Quảng Cáo Đa Kênh
                  </h2>
                  <p className="text-gray-600">
                    Có thể giúp bạn tùy chỉnh các thông điệp riêng biệt cho các
                    đối tượng.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </motion.div> */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Pricing
            </h2>
            <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              BẢNG GIÁ{" "}
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br bg-300% from-green-400 via-blue-500 to-purple-600 animate-gradient">
                {" "}
                DỊCH VỤ ADS
              </span>
            </p>
          </div>
          {/* Các danh mục bảng giá */}
          <div className="mt-16 flex justify-center">
            <fieldset aria-label="Payment frequency">
              <RadioGroup
                value={frequency}
                onChange={setFrequency}
                className="grid grid-cols-3 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-gray-200"
              >
                {frequencies.map((option) => (
                  <Radio
                    key={option.value}
                    value={option}
                    className="cursor-pointer rounded-full px-2.5 py-1 text-gray-500 data-[checked]:bg-primary data-[checked]:text-white"
                  >
                    {option.label}
                  </Radio>
                ))}
              </RadioGroup>
            </fieldset>
          </div>
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers1.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured ? "bg-brandPrimary ring-primary" : "ring-white",
                  "rounded-3xl p-8 ring-1 xl:p-10"
                )}
              >
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h3>
                <p
                  className={classNames(
                    tier.featured ? "text-gray-300" : "text-gray-600",
                    "mt-4 text-sm leading-6"
                  )}
                >
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span
                    className={classNames(
                      tier.featured ? "text-white" : "text-gray-900",
                      "text-4xl font-bold tracking-tight"
                    )}
                  >
                    {typeof tier.price === "string"
                      ? tier.price
                      : tier.price[frequency.value]}
                  </span>
                  {typeof tier.price !== "string" ? (
                    <span
                      className={classNames(
                        tier.featured ? "text-gray-300" : "text-gray-600",
                        "text-sm font-semibold leading-6"
                      )}
                    >
                      {frequency.priceSuffix}
                    </span>
                  ) : null}
                </p>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white"
                      : "bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:outline-green-600",
                    "mt-6 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  )}
                >
                  {tier.cta}
                </a>
                <ul
                  role="list"
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-600",
                    "mt-8 space-y-3 text-sm leading-6 xl:mt-10"
                  )}
                >
                  {Array.isArray(tier.features)
                    ? tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className={classNames(
                              tier.featured ? "text-white" : "text-green-600",
                              "h-6 w-5 flex-none"
                            )}
                          />
                          {feature}
                        </li>
                      ))
                    : tier.features[frequency.value].map((feature) => (
                        <li key={feature} className="flex gap-x-3">
                          <CheckIcon
                            aria-hidden="true"
                            className={classNames(
                              tier.featured ? "text-white" : "text-green-600",
                              "h-6 w-5 flex-none"
                            )}
                          />
                          {feature}
                        </li>
                      ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
