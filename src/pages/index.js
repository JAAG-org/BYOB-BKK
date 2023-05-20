import * as React from "react";

const IndexPage = () => {
  return (
    <div className="bg-black h-full ">
      <nav className="w-full h-20 p-6 font-mono">
        <div className="flex flex-row justify-between w-full">
          <a className="text-white ml-2 text-xl hover:cursor-pointer hover:underline hover:underline-offset-4">
            BYOB
          </a>
          <div className="flex flex-row text-xl">
            <a className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4">
              Participants
            </a>
            <a className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4">
              Venue
            </a>
            <a className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4">
              Sponsors
            </a>
          </div>
        </div>
      </nav>
      <main className="p-10 h-full text-center">
        <h1 className="font-display text-4xl text-white my-2">
          BRING YOUR OWN BEAMER
        </h1>
        <h1 className="font-display text-4xl text-white my-2">
          BANGKOK EDITION
        </h1>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
