import * as React from "react";
import { Disclosure } from "@headlessui/react";
import PropTypes from "prop-types";

const MyDisclosure = (props) => {
  return (
    <Disclosure>
      <Disclosure.Button className="py-4 px-3 text-2xl font-bold font-mono text-black rounded shadow-gray border border-gray shadow-xl hover:shadow-white">
        {props.head}
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-800 text-xl font-mono rounded border border-white py-8">
        {props.body}
      </Disclosure.Panel>
    </Disclosure>
  );
};

Disclosure.PropsType = {
  head: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
};

export default MyDisclosure;
