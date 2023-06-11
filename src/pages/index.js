import * as React from "react";
import { graphql } from "gatsby";
import Disclosure from "../components/atoms/disclosure";
import Navigator from "../components/subpages/navigator";
import { StaticImage } from "gatsby-plugin-image";
import GoogleMapReact from "google-map-react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-300">
      <Navigator />
      <main className="p-10 h-full text-center pb-48">
        <h1 className="font-display hover:font-mono hover:cursor-pointer text-5xl text-white drop-shadow-4xl shadow-white my-2">
          BRING YOUR OWN BEAMER
        </h1>
        <h1 className="font-display hover:font-mono hover:cursor-pointer text-4xl text-white drop-shadow-4xl shadow-white my-2">
          Bangkok Edition
        </h1>
        <h1 className="font-display hover:font-mono hover:cursor-pointer text-4xl text-white drop-shadow-4xl shadow-white my-2">
          1.07.2023
        </h1>

        {/* <article id="participants" className="mt-20">
          <div className="flex flex-row p-10">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Participants
            </h2>
          </div>
        </article> */}

        <article
          id="venue"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              {t("venue")}
            </h2>
          </div>

          <div className="mt-8 flex lg:flex-row flex-col items-center gap-10 lg:justify-around">
            <div className="w-96 h-full">
              <StaticImage src="../images/bccg.svg" alt="venue" />
            </div>
            <div className="w-96 h-[20rem]">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: process.env.GATSBY_GOOGLE_MAP_API_KEY,
                }}
                defaultCenter={{
                  lat: 13.7236455,
                  lng: 100.544534,
                }}
                defaultZoom={15}
              >
                <div
                  className="w-5 h-5 bg-red-400 text-black font-mono text-color-red rounded-full p-2 text-center"
                  lat={13.7236455}
                  lng={100.544534}
                >
                  Bangkok Citycity Gallery
                </div>
              </GoogleMapReact>
            </div>
          </div>
          <div className="mt-10 mb-10 w-full border-b border-white" />
          <div className="mt-10 flex flex-col items-center gap-5">
            <p className="font-mono text-lg break w-96">
              BANGKOK CITYCITY GALLERY
            </p>
            <p className="font-mono text-lg break w-96">
              13/3 Sathorn 1 South Sathorn Road Thung Mahamek Bangkok, Thailand
              10120
            </p>
            <p className="font-mono text-lg break w-full">
              +6683 087 2725 info@bangkokcitycity.com
            </p>
          </div>
        </article>

        {/* <article
          id="sponsors"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Sponsors
            </h2>
          </div>
        </article> */}

        <article
          id="about"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              About
            </h2>
          </div>
        </article>

        <article
          id="FAQS"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              FAQS
            </h2>
          </div>
          <div className="flex flex-col mt-5 gap-10">
            <Disclosure
              head="Can I bring projector at 1st July ?"
              body="Yes, you can !"
            />
            <Disclosure
              head="What type of contents can I show ?"
              body="Any type of contents are welcome ! (except NSFW). Only one restriction is sound, you can't play sound from your projector otherwise it will interfere with other projectors."
            />
            <Disclosure
              head="Can I host my own BYOB Bangkok ?"
              body="Yes, you can ! and please also invite us to join your event :)"
            />
          </div>
        </article>
      </main>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
