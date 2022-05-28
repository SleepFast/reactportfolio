import { useState, useEffect } from 'react';

export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addListener(listener);
    return () => media.removeListener(listener);
  }, [matches, query]);

  return matches;
}

  // const is700px = useMediaQuery('(max-width: 700px)')

  // useEffect(() => {
  //   if (is700px) {
  //     setState((prevState) => ({
  //       ...prevState,
  //       isMenuBurgerOpen: true
  //     }))
  //   }
  // }, [is700px])