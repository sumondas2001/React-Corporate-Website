import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PagesCoverImg from "../../PagesCoverImg/PagesCoverImg";


const ServiceDetails = () => {
     const [service, setService] = useState([]);
     const [allServices, setAllServices] = useState(null);
     console.log(allServices)
     const { id } = useParams();
     // COVER img url
     const imgUrl = 'https://www.hitechparks.com/web/apps/corporate/uploads/slider/6_1604077959.jpg';

     const { service_description, service_img, service_name } = service;


     useEffect(() => {
          axios.get('/services.json')
               .then(res => {


                    const data = res.data?.find(singleService => singleService.id === parseFloat(id));
                    setService(data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, [id]);


     useEffect(() => {
          axios.get('/services.json')
               .then(res => {


                    setAllServices(res.data)
               })
               .catch(error => {
                    console.log(error)
               })
     }, []);

     console.log(id)
     return (
          <div>

               <div>
                    <PagesCoverImg imgUrl={imgUrl} title={'DETAILS'}> </PagesCoverImg>
               </div>
               <div>
                    <img src={service_img} alt="" />
                    <h1>{service_name}</h1>
                    <p>{service_description}</p>
               </div>
          </div>
     );
};

export default ServiceDetails;