import * as React from "react";

const Navigator = () => {
  return (
    <nav className="w-full h-20 p-6 font-mono drop-shadow-xl shadow-black">
      <div className="flex flex-row justify-between w-full">
        <a className="text-white ml-2 text-xl hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600">
          BYOB
        </a>
        <div className="flex-row text-xl hidden lg:flex">
          {/* <a
            href="#participants"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Participants
          </a> */}
          <a
            href="#venue"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Venue
          </a>
          <a
            href="#sponsors"
            className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
          >
            Sponsors
          </a>
        </div>

        <div class="flex hover:cursor-pointer hover:animate-pulse hover:ease-linear	lg:hidden">
          <div class="space-y-2">
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
            <span class="block w-8 h-0.5 bg-white"></span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigator;
