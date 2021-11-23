import axios from "axios";

export default axios.create({

    baseURL:'https://api.unsplash.com',
    headers:{
                Authorization: 
                'Client-ID fmr8sLrruIBiEoWo9pGPI2VvjItNtZUCWFN8J0qRa7k'
            }



});

