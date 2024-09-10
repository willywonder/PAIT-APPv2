import {Poppins, Inter} from "next/font/google";

const poppins =Poppins({
    weight: ["100" ,"200","300" ,"400" ,"500" ,"600" ,"700" ,"800" ,"900"],
    subsets : ["latin"],
    style: ["normal" , "italic"]
});
 const inter = Inter({
    subsets: ["latin"],
    weight: ["100" ,"200","300" ,"400" ,"500" ,"600" ,"700" ,"800" ,"900"],
    style: ["normal" , ]
});
export {poppins, inter};