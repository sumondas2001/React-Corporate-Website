import { Helmet } from "react-helmet";
const PagesTitle = ({ title }) => {
     return (
          <Helmet>
               <title>{title} - Corporate Website</title>
          </Helmet>
     );
};



export default PagesTitle;