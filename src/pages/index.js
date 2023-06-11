import * as React from "react";
import Disclosure from "../components/atoms/disclosure";

const IndexPage = () => {
  return (
    <div className="bg-slate-300">
      <nav className="w-full h-20 p-6 font-mono drop-shadow-xl shadow-black">
        <div className="flex flex-row justify-between w-full">
          <a className="text-white ml-2 text-xl hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600">
            BYOB
          </a>
          <div className="flex-row text-xl hidden lg:flex">
            <a
              href="#participants"
              className="text-white mx-2 hover:cursor-pointer hover:underline hover:underline-offset-4 hover:text-green-600"
            >
              Participants
            </a>
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
      <main className="p-10 h-full text-center pb-48">
        <h1 className="font-display text-5xl text-white drop-shadow-4xl shadow-white my-2">
          BRING YOUR OWN BEAMER
        </h1>
        <h1 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
          1.07.2023
        </h1>

        <article id="participants" className="mt-20">
          <div className="flex flex-row p-10">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Participants
            </h2>
          </div>
        </article>

        <article id="venue" className="mt-20 p-10">
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Venue
            </h2>
          </div>
        </article>

        <article id="sponsors" className="mt-20 p-10">
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Sponsors
            </h2>
          </div>
        </article>

        <article id="about" className="mt-20 p-10">
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              About
            </h2>
          </div>
        </article>

        <article id="FAQ" className="mt-20 p-10">
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              FAQ
            </h2>
          </div>
          <div className="flex flex-col mt-5 gap-10">
            <Disclosure
              head="What is BYOB?"
              body="BYOB is bring your own beamer"
            />
            <Disclosure
              head="What is BYOB?"
              body="BYOB is bring your own beamer"
            />
          </div>
        </article>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
