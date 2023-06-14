import * as React from "react";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/solid";

const Navigator = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 p-6 font-mono drop-shadow-xl shadow-black">
      <div className="flex flex-row justify-between w-full">
        <a
          href="/"
          className="text-white ml-2 text-xl hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
        >
          BYOB
        </a>
        <div className="flex-row text-xl gap-4 hidden lg:flex">
          {/* <a
            href="#participants"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Participants
          </a> */}
          <a
            href="#opencalls"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Open calls
          </a>
          <a
            href="#venue"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Venue
          </a>
          <a
            href="#organizers"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Organizers
          </a>
          <a
            href="#FAQS"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            FAQS
          </a>
          {/* <a
            href="#sponsors"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Sponsors
          </a> */}
        </div>

        <div
          class="flex hover:cursor-pointer hover:animate-pulse hover:ease-linear	lg:hidden"
          onClick={() => setIsMenuOpen(true)}
        >
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
          </div>
        </div>
        {isMenuOpen && (
          <div className="flex flex-row justify-between absolute top-0 right-0 bg-gray-600 w-full p-6 items-end shadow-xl">
            <XCircleIcon
              className="hover:cursor-pointer hover:animate-pulse hover:ease-linear"
              fill="white"
              width={38}
              onClick={() => setIsMenuOpen(false)}
            />
            <div className="flex flex-col gap-4">
              <a
                href="#participants"
                className="text-white hover:underline hover:underline-offset-4 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Participants
              </a>
              <a
                href="#opencalls"
                className="text-white hover:underline hover:underline-offset-4 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Open calls
              </a>
              <a
                href="#venue"
                className="text-white hover:underline hover:underline-offset-4 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Venue
              </a>
              <a
                href="#organizers"
                className="text-white hover:underline hover:underline-offset-4 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Organizers
              </a>
              <a
                href="#FAQS"
                className="text-white hover:underline hover:underline-offset-4 hover:text-green-600"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQS
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigator;
