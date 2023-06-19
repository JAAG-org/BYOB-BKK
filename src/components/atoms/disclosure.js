import * as React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import PropTypes from "prop-types";

const MyDisclosure = (props) => {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="flex flex-row justify-between lg:gap-0 gap-4 px-4 text-start items-center lg:items-center py-4 lg:px-3 text-lg lg:text-xl font-semibold font-mono text-neutral-800 rounded shadow-gray border border-gray shadow-xl hover:shadow-white">
            {props.head}
            {open ? (
              <ChevronUpIcon width="25" height="25" className="w-14" />
            ) : (
              <ChevronDownIcon width="25" height="25" className="w-14" />
            )}
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
              className="text-gray-800 lg:text-lg text-sm font-mono rounded border border-white lg:py-8 py-4 lg:px-10 px-5 text-start"
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
