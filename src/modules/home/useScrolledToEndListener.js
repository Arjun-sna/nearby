import { useEffect, useCallback, useRef } from "react";
import debounce from "lodash.debounce";

function useScrolledToEndListener(
  onScrolledToEnd,
  offset = 200,
  debounceTimeout = 500
) {
  const containerRef = useRef(null);
  const handleOnScroll = useCallback(() => {
    const scrollNode =
      containerRef.current ||
      document.scrollingElement ||
      document.documentElement;
    const scrollContainerBottomPosition = Math.round(
      scrollNode.scrollTop + window.innerHeight
    );
    const scrollPosition = Math.round(scrollNode.scrollHeight - offset);

    if (scrollPosition <= scrollContainerBottomPosition) {
      onScrolledToEnd();
    }
  }, [onScrolledToEnd, offset]);

  useEffect(() => {
    const ref = containerRef.current;
    const host = ref || window;
    console.log("Attached");
    const debounceFunc = debounce(handleOnScroll, debounceTimeout);
    host.addEventListener("scroll", debounceFunc);

    return () => host.removeEventListener("scroll", debounceFunc);
  }, [debounceTimeout, handleOnScroll]);

  return containerRef;
}

export default useScrolledToEndListener;
