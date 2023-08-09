"use client";
import React from "react";
import {
  AiFillInstagram,
  AiFillFacebook,
  AiFillTwitterSquare,
} from "react-icons/ai";

function Footer(props: any) {
  return (
    <div>
      <footer className="bg-slate-300 dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl">
          <div className="grid grid-cols-2 gap-8 px-8 py-6 lg:py-8 md:grid-cols-3">
            <div>
              <h2 className="mb-2 text-2xl font-bold text-primary uppercase dark:text-white font-primary ">
                The Cabin Hotel
              </h2>
              <ul className="text-gray-900 dark:text-gray-500 font-medium">
                <li className="mb-4">
                  <a href="/about" className=" hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Tips and Trick
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Testimonial
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Promo
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 uppercase dark:text-white font-primary">
                Help center
              </h2>
              <ul className="text-gray-900 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-2 text-lg font-semibold text-gray-900 uppercase dark:text-white font-primary">
                Legal
              </h2>
              <ul className="text-gray-900 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Licensing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 md:flex md:items-center md:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-300 sm:text-center">
              © 2023 <a href="/">The Cabin Hotel</a>. All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillInstagram />
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillFacebook />
                <span className="sr-only">Facebook page</span>
              </a>

              <a
                href="#"
                className="text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <AiFillTwitterSquare />
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
