import React, {
  DOMAttributes,
  JSXElementConstructor,
  ReactElement,
} from "react";
import { KeyValueMap } from "@/types/interfaces/KeyValueMap";

const mapElements = (
  copyArray: KeyValueMap[],
  parentKey: string = ""
): ReactElement<
  DOMAttributes<Element>,
  string | JSXElementConstructor<any>
>[] => {
  return copyArray.flatMap((element, index) => {
    const elementKey = Object.keys(element)[0];
    const elementValue = element[elementKey];
    const uniqueKey = `${parentKey}-${index}`;
    if (Array.isArray(elementValue)) {
      return mapElements(elementValue, uniqueKey);
    }
    return React.createElement(elementKey, { key: uniqueKey }, elementValue);
  });
};
const CopyComponent = ({ copy }: { copy: any[] }) => {
  return <div>{mapElements(copy)}</div>;
};

export default CopyComponent;
