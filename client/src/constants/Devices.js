

const breakpoints = {
    xs: "320px",//mobile
    sm: "640px",//mobile
    md: "768px", //tablet
    lg: "1024px",//laptop
    xl: "1280px",//laptoplarge
    "2xl": "1536px",//desktop
  }
  
  export const devices = {
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    "2xl": `(min-width: ${breakpoints["2xl"]})`,
  }


