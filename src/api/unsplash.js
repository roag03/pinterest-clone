import axios from "axios";


// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3000', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// App.use(cors(corsOptions));

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID JOrITalGiXmkCeTqoAHQRbiWSsFzpob8PuckeeIIQRA",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  },

});
