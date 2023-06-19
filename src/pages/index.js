import * as React from "react";
import { graphql } from "gatsby";
import Disclosure from "../components/atoms/disclosure";
import Navigator from "../components/subpages/navigator";
import { StaticImage } from "gatsby-plugin-image";
import GoogleMapReact from "google-map-react";
import { Link } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";

const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <div className="bg-slate-300">
      <Navigator />
      <main className="lg:p-10 p-4 h-full text-center pb-48">
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

        <article id="opencalls" className="mt-20 p-10">
          <p className="font-mono font-medium text-lg">
            BYOB is a series of motion picture exhibitions that take place for
            one night in various locations around the world. Artists will bring
            the projector/beamer to display their works along with others filled
            in the space to create the visual together.
          </p>
          <p className="font-mono font-medium text-lg mt-8">
            BYOB was originally started by Rafaël Rozendaal in Berlin, Germany,
            in 2010. This event showcasing moving images has been expanded by
            individuals interested in motion media in many countries, such as
            Amsterdam, Los Angeles, Melbourne, and Taipei. The open invitation
            invites visual artists and creators to showcase their work,
            exploring new possibilities in presenting images through projection.
          </p>
        </article>

        <article
          id="opencalls"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              {t("opencalls")}
            </h2>
          </div>
          <div className="flex flex-col items-center">
            <div className="h-full">
              <StaticImage
                src="../images/opencall_poster.jpg"
                alt="Open Calls Poster"
                height={600}
              />
            </div>
            <div className="mt-8">
              <a
                className="font-mono lg:text-2xl text-lg text-blue-700 font-light shadow-lg p-4 px-8 rounded border hover:shadow-white hover:shadow-xl border-white hover:cursor-pointer w-80"
                href="https://docs.google.com/forms/d/e/1FAIpQLScHKDI9dAQuY9tdlcGs8fBDFwVo25c1epdl0HMF5xArAMNlpg/viewform"
              >
                {" "}
                Register here !{" "}
              </a>
            </div>
          </div>
        </article>

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
            <div className="lg:w-96 w-72 h-full">
              <StaticImage
                src="../images/bccg.svg"
                alt="BANGKOK CITYCITY GALLERY"
              />
            </div>
            <div className="lg:w-96 w-72 h-[20rem]">
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
                  BANGKOK CITYCITY GALLERY
                </div>
              </GoogleMapReact>
            </div>
          </div>
          <div className="mt-10 mb-10 w-full border-b border-white" />
          <div className="mt-10 flex flex-col items-center gap-5">
            <p className="font-mono text-lg break w-96">
              BANGKOK CITYCITY GALLERY
            </p>
            <p className="font-mono lg:text-lg text-md break lg:w-96 w-72">
              13/3 Sathorn 1 South Sathorn Road Thung Mahamek Bangkok, Thailand
              10120
            </p>
            <p className="font-mono lg:text-lg text-md break w-full">
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
          id="organizers"
          className="mt-20 p-10 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              Organizers
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-around gap-5">
            <div className="flex flex-col gap-5 border border-gray shadow-sm lg:pr-4 rounded">
              <h2 className="font-mono text-4xl font-semibold text-white drop-shadow-4xl shadow-white my-2">
                JAAG
              </h2>
              <div className="flex lg:flex-row lg:justify-between lg:items-start flex-col items-center gap-6">
                <StaticImage
                  width={300}
                  height={400}
                  src="../images/JAAG.jpg"
                  alt="JAAG (Joint Artistic Amateur Group"
                />
                <p className="font-mono lg:p-0 p-2 lg:w-96 w-50 lg:text-base text-sm lg:text-start text-center">
                  JAAG was founded in 2021 by Wasawat Somno (live-coding artist,
                  software engineer), Tewprai Bualoi (visual artist, software
                  engineer), and Nanut Thanapornrapee (visual artist, creative).
                  Their transdisciplinary practices focuses on visual and
                  technological interventions. They are actively involved in
                  VJing in clubs and experimental music venues, while also
                  seeking to expand their vision and thesis across AI,
                  generative visuals, live-coding, and 3D rendering. (Photo:
                  Nina Sach)
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-5 border border-gray shadow-sm lg:pr-4 rounded">
              <h2 className="font-mono lg:text-4xl text-2xl font-semibold text-white drop-shadow-4xl shadow-white my-2">
                ZonZon.Studio
              </h2>
              <div className="flex w-full lg:flex-row lg:justify-between lg:items-start flex-col items-center gap-6">
                <StaticImage
                  width={300}
                  height={400}
                  src="../images/ZonZon.jpg"
                  alt="ZonZon.Studio"
                />
                <p className="font-mono lg:w-96 lg:p-0 p-2 w-50 lg:text-base text-sm lg:text-start text-center">
                  Setthasiri Chanjaradpong aka ZonZon.Studio is a keen observer
                  who expresses himself through video art and documentaries.
                  Setthasiri has moved from the field of filmmaking to the
                  worlds of projection mapping and theatre during his artistic
                  path. Driven by an interest in hearing about people's
                  hardships, resiliency, and aspirations. He is exploring
                  projection mapping as a potent visual narrative technique to
                  push the limits of storytelling even further. After exploring
                  the field of projection mapping, Setthasiri came across a
                  special method for fusing the real and virtual worlds,
                  creating immersive settings that go beyond the limitations of
                  theatre and film.
                </p>
              </div>
            </div>
          </div>
        </article>

        <article
          id="FAQS"
          className="mt-20 p-10 pb-20 mb-20 border border-white rounded-xl shadow-md shadow-gray"
        >
          <div className="flex flex-row">
            <h2 className="font-display text-4xl text-white drop-shadow-4xl shadow-white my-2">
              FAQS
            </h2>
          </div>
          <div className="flex flex-row">
            <h2 className="font-mono font-bold text-3xl text-white drop-shadow-4xl shadow-white my-2">
              For Beamers
            </h2>
          </div>
          <div className="flex flex-col mt-5 gap-10">
            <Disclosure
              head="Do you accept all applications ?"
              body="Yes. You can participate without registering on July 1st, but we cannot guarantee to provide projectors or plug outlets. Please fill in the form before July 25th, so we can more easily organize for the event. Thank you : )"
            />
            <Disclosure
              head="Can I bring projectors at 1st July ?"
              body="Yes, you can !"
            />
            <Disclosure
              head="What types of content can I show ?"
              body="Any types of content are welcome ! Except pornography and advertisement (commercial is ok as long as no big logo of brand on screen). Only one restriction is sound, you can't play sound from your projector otherwise it will interfere with other projectors."
            />
            <Disclosure
              head="Can I come with many works ?"
              body=" Yes, please. You can also be like the pavilion that gather your friends' work. You can beam as many works as you want."
            />
            <Disclosure
              head="Can I just come with USB and/or harddisk ?"
              body="Yes, you can. Just beware that your usb and harddisk is free of virus (otherwise this event will become `bring your own malware` ! we don't want to see that happens.), we can help you find some laptop that you can join to play along with the beam (but we cannot guarantee on this part). It's lot easier if you bring your own laptop."
            />
            <Disclosure
              head="Can I host my own BYOB Bangkok ?"
              body="Yes, you can ! and please also invite us to join your event :)"
            />
          </div>

          <div className="flex flex-row mt-10">
            <h2 className="font-mono font-bold text-3xl text-white drop-shadow-4xl shadow-white my-2">
              For Audiences
            </h2>
          </div>

          <div className="flex flex-col mt-5 gap-10">
            <Disclosure head="Is the event free ?" body="Free admission" />
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
