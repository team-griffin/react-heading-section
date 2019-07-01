  import { createContext } from 'react';

const HeadingSectionContext = createContext(null);

const {
  Provider,
  Consumer,
} = HeadingSectionContext;

export {
  Consumer,
  Provider,
};

export default HeadingSectionContext;