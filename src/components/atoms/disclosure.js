import * as React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import PropTypes from "prop-types";

const MyDisclosure = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="py-4 px-3 text-xl font-bold font-mono text-black rounded shadow-gray border border-gray shadow-xl hover:shadow-white">
            {props.head}
          </Disclosure.Button>
          <Transition
            show={open}
            enter="transition duration-300 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-200 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-200 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel
              static
              className="text-gray-800 text-lg font-mono rounded border border-white py-8"
            >
              {props.body}
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

Disclosure.PropsType = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default MyDisclosure;
