import React from "react";
import styled from "styled-components";
import * as Entypo from "styled-icons/entypo";

function Icon({ name = "", color = "#fff", ...iconProps }) {
  const IconComponent = styled(Entypo[name] || "div")`
    color: ${color};
  `;

  return <IconComponent size={30} {...iconProps} />;
}

export default Icon;
