import React from "react";

import CountUp from "react-countup";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";
import { FaRegFileCode } from "react-icons/fa6";
const people = [
  {
    name: "Trương Minh Thiện",
    role: "Website and Marketing",
    imageUrl: "./avatar.png",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  // More people...
];
const About = () => {
  return (
    <div>
      {/* about text */}
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.6 }}
          >
            <div className="mx-auto   text-center ">
              <ul
                role="list"
                className="mx-auto grid max-w-2xl grid-cols-1  lg:mx-0 lg:max-w-none  lg:gap-8"
              >
                {people.map((person) => (
                  <li
                    key={person.name}
                    className="rounded-2xl shadow-2xl bg-gradient-to-br from-green-500 via-green-600 to-green-700 px-8 py-10"
                  >
                    <img
                      className="mx-auto h-48 w-48 rounded-full md:h-56 md:w-56"
                      src={person.imageUrl}
                      alt=""
                    />
                    <h3 className="mt-6 text-xl font-semibold leading-7 tracking-tight text-white">
                      {person.name}
                    </h3>
                    <p className="text-sm leading-6 text-gray-200">
                      {person.role}
                    </p>
                    <ul
                      role="list"
                      className="mt-6 flex justify-center gap-x-6"
                    >
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-300"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <li></li>
                        <a href="">
                          <svg
                            className="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="md:w-3/5 mx-auto"
          >
            {/* thanh tiến trình */}
            <div className="w-72 sm:px-12  lg:w-full lg:px-12 lg:pt-0">
              <div>
                <div className="flex items-end  justify-between">
                  <h4 className="font-body  font-semibold uppercase text-black">
                    HTML & CSS
                  </h4>
                  <h3 className="font-body text-3xl font-bold text-primary">
                    <CountUp
                      start={0}
                      end={95}
                      duration={8}
                      delay={0}
                    ></CountUp>
                    %
                  </h3>
                </div>
                <div className="mt-2 h-3 w-full rounded-full bg-lila">
                  <motion.div
                    className="h-3 w-[95%] rounded-full bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: "95%" }}
                    transition={{ duration: 5 }} // Set the duration to 2000 milliseconds (2 seconds)
                  ></motion.div>
                </div>
              </div>
              <div className="pt-6">
                <div>
                  <div className="flex items-end  justify-between">
                    <h4 className="font-body  font-semibold uppercase text-black">
                      JavaScript
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">
                      <span className="purecounter"></span>
                      55%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <motion.div
                      className="h-3 w-[55%] rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "55%" }}
                      transition={{ duration: 3 }} // Set the duration to 2000 milliseconds (2 seconds)
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div>
                  <div className="flex items-end  justify-between">
                    <h4 className="font-body  font-semibold uppercase text-black">
                      ReactJS
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">
                      <span className="purecounter"></span>
                      70%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <motion.div
                      className="h-3 w-[70%] rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 3 }} // Set the duration to 2000 milliseconds (2 seconds)
                    ></motion.div>
                  </div>
                </div>
              </div>
              <div className="pt-6">
                <div>
                  <div className="flex items-end  justify-between">
                    <h4 className="font-body  font-semibold uppercase text-black">
                      NextJS
                    </h4>
                    <h3 className="font-body text-3xl font-bold text-primary">
                      <span className="purecounter"></span>
                      75%
                    </h3>
                  </div>
                  <div className="mt-2 h-3 w-full rounded-full bg-lila">
                    <motion.div
                      className="h-3 w-[75%] rounded-full bg-primary"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 3 }} // Set the duration to 2000 milliseconds (2 seconds)
                    ></motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* company stats */}
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16"
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="md:w-1/2">
            <h2 className="text-4xl text-neutralDGrey font-semibold mb-2 md:w-2/3">
              Helping a local <br />{" "}
              <span className="text-brandPrimary">
                business reinvent itself
              </span>
            </h2>
            <p>We reached here with our hard work and dedication</p>
          </div>

          {/* stats */}
          <div className="md:w-1/2 mx-auto flex sm:flex-row flex-col sm:items-center justify-around gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/public/assets/icons/group.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp
                      start={0}
                      end={2653664}
                      duration={10}
                      delay={0}
                    ></CountUp>
                  </h4>
                  <p>Members</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/public/assets/icons/clubs.png" alt="" />
                <div id="number-counter">
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    <CountUp
                      start={0}
                      end={10}
                      duration={4}
                      delay={0}
                    ></CountUp>
                  </h4>
                  <p>Clubs</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/src/assets/icons/click.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    828,867
                  </h4>
                  <p>Event Bookings</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/public/assets/icons/payments.png" alt="" />
                <div>
                  <h4 className="text-2xl text-neutralDGrey font-semibold">
                    1,926,436
                  </h4>
                  <p>Payments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
