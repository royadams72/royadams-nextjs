import React, { JSX } from "react";

/** Primitive content allowed as text children */
type Primitive = string | number | boolean | null | undefined;

/** Props bag when we can't know the tag at compile time */
type AnyProps = Record<string, unknown>;

/** Value allowed for any tag key */
type ElementValue =
  | Primitive
  | ElementNode[] // nested children as nodes
  | {
      props?: AnyProps; // could be narrowed per-tag later
      children?: ElementNode[] | Primitive;
    };

/** A node is an object with exactly one intrinsic tag key */
export type ElementNode = {
  [K in keyof JSX.IntrinsicElements]?: ElementValue;
};

/** Top-level data array */
export type KeyValueMap = ElementNode;

/* ---------- Type guards ---------- */

const isElementArray = (v: ElementValue): v is ElementNode[] =>
  Array.isArray(v);

const isPropsChildren = (
  v: ElementValue
): v is { props?: AnyProps; children?: ElementNode[] | Primitive } =>
  typeof v === "object" && v !== null && !Array.isArray(v);

/* ---------- Mapper ---------- */

const mapElements = (
  copyArray: KeyValueMap[],
  parentKey = "root"
): React.ReactElement[] => {
  return copyArray.map((element, index) => {
    // each object should have a single intrinsic tag key
    const tag = Object.keys(element)[0] as keyof JSX.IntrinsicElements;
    const value = element[tag] as ElementValue | undefined;
    const key = `${parentKey}.${String(tag)}.${index}`;

    if (value === undefined) {
      // defensively render nothing if malformed
      return React.createElement(React.Fragment, { key });
    }

    // Case 1: array of child nodes
    if (isElementArray(value)) {
      const children = mapElements(value, key);
      return React.createElement(tag, { key }, children);
    }

    // Case 2: { props?, children? }
    if (isPropsChildren(value)) {
      const { props = {}, children = [] } = value;
      const renderedChildren = Array.isArray(children)
        ? mapElements(children, key)
        : children;
      return React.createElement(tag, { key, ...props }, renderedChildren);
    }

    // Case 3: primitive/text child
    return React.createElement(tag, { key }, value);
  });
};

const CopyComponent = ({ copy }: { copy: KeyValueMap[] }) => {
  return <>{mapElements(copy)}</>;
};

export default CopyComponent;
