import React from "react";
import * as Entypo from "styled-icons/entypo";

function Icon({ name = "", color = "#fff", ...iconProps }) {
  const IconComponent = Entypo[name];

  return <IconComponent size={30} style={{ color }} {...iconProps} />;
}

export default Icon;
