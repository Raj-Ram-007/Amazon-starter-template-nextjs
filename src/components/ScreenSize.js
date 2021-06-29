import { useMediaQuery } from "react-responsive";

const ScreenSize = () => {
  const issm = useMediaQuery({ query: "(max-width: 767px)" });
  const ismd = useMediaQuery({ query: "(max-width: 1023px)" });
  const islg = useMediaQuery({
    query: "(max-width: 1279px)",
  });
  const isxl = useMediaQuery({
    query: "(max-width: 1280px)",
  });
  const is2xl = useMediaQuery({
    query: "(min-width: 1281px)",
    // query: "(max-width: 1536px)",
  });
  return issm ? "SMALL" : "LARGE";
};

export default ScreenSize;
