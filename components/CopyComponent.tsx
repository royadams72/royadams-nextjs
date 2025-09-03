import React, { DOMAttributes, JSX } from "react";

type KeyValueMap =
  | Record<string, any>
  | { props?: Record<string, any>; children?: KeyValueMap[] | string };

const mapElements = (
  copyArray: Record<string, any>[],
  parentKey = "root"
): React.ReactElement[] => {
  return copyArray.map((element, index) => {
    const tag = Object.keys(element)[0] as keyof JSX.IntrinsicElements;
    const value = (element as any)[tag];
    const key = `${parentKey}.${tag}.${index}`;

    // Case 1: tag with array children → create parent and render children inside
    if (Array.isArray(value)) {
      const children = mapElements(value, key);
      return React.createElement(tag, { key }, children);
    }

    // Optional Case 2: { tag: { props: {...}, children: [...] } }
    if (
      value &&
      typeof value === "object" &&
      ("children" in value || "props" in value)
    ) {
      const { props = {}, children = [] } = value as {
        props?: Record<string, any>;
        children?: any;
      };
      const renderedChildren = Array.isArray(children)
        ? mapElements(children, key)
        : children;
      return React.createElement(tag, { key, ...props }, renderedChildren);
    }

    // Case 3: primitive/text child
    return React.createElement(tag, { key }, value);
  });
};

const CopyComponent = ({ copy }: { copy: any[] }) => {
  return <div>{mapElements(copy)}</div>;
};

export default CopyComponent;
