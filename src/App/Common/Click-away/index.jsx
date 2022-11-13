import { useEffect, useRef } from "react";

export const ClickAwayListener = (props) => {
  const ref = useRef(null);
  const { onClickOutside, children } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  return <div ref={ref}>{children}</div>;
};
