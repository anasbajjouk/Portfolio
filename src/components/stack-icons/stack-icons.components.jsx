import React from "react";
import { ReactComponent as ReactIcon } from "../../assets/react.svg";
import { ReactComponent as ReduxIcon } from "../../assets/redux.svg";
import { ReactComponent as JsIcon } from "../../assets/javascript.svg";
import { ReactComponent as NodeJsIcon } from "../../assets/nodejs-icon.svg";
import { ReactComponent as SassIcon } from "../../assets/sass.svg";
import { ReactComponent as HTMLIcon } from "../../assets/html.svg";

//Styles
import { StackIconsHolder } from "./stack-icons.styles";

const StackIcons = () => {
  return (
    <>
      <StackIconsHolder>
        <li>
          <ReactIcon className="svgIcon" />
        </li>
        <li>
          <ReduxIcon className="svgIcon" />
        </li>
        <li>
          <JsIcon className="svgIcon" />
        </li>
        <li>
          <NodeJsIcon className="svgIcon" />
        </li>
        <li>
          <SassIcon className="svgIcon" />
        </li>
        <li>
          <HTMLIcon className="svgIcon" />
        </li>
      </StackIconsHolder>
    </>
  );
};

export default StackIcons;
