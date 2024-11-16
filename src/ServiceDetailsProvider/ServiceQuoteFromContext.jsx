import { createContext, useState } from "react";

export const QuoteFromContext = createContext(null);
const ServiceQuoteFromContext = ({ children }) => {
     const [serviceDetails, SetServiceDetails] = useState([]);


     const info = {
          SetServiceDetails,
          serviceDetails
     }
     return (
          <QuoteFromContext.Provider value={info}>
               {children}
          </QuoteFromContext.Provider>
     );
};

export default ServiceQuoteFromContext;