import pxTorem from "@/utils/helpers/pxTorem";

const breakpoints = {
  tablet: pxTorem(1024),
  desktop: pxTorem(1200),
};

const QUERY = {
  TABLET: `(min-width: ${breakpoints.tablet})`,
  DESKTOP: `(min-width: ${breakpoints.desktop})`,
};

export default QUERY;
