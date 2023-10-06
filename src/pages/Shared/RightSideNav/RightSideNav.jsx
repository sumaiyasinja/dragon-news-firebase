import { FaGoogle,FaGithub,FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className="">
            {/* fist div portion of left side navbar */}
            <div className="space-y-3">
                <p className="font-bold text-2xl">Login With:</p>
                <button className="btn w-full">
                <FaGoogle></FaGoogle> Login with Google
                </button>
                <button className="btn w-full">
                <FaGithub></FaGithub> Login with GitHub
                </button>
            </div>

            {/* Second div portion of left side navbar social links */}
            <div className="border border-s-[#E7E7E7] text-[#706F6F] mt-5">
            <p className="font-bold text-2xl p-4">Find Us On</p>
            <hr />

               <div>
               <button className="flex items-center gap-2 p-3 m-3">
                <FaFacebookF></FaFacebookF>Facebook
                </button>
                <hr />
               </div>
               
               <div>
               <button className="flex items-center gap-2 p-3 m-3">
                <FaTwitter></FaTwitter>Twitter
                </button>
                <hr />
               </div>
               
               <div>
               <button className="flex items-center gap-2 p-3 m-3">
                <FaInstagram></FaInstagram>Instagram
                </button>
                <hr />
               </div>

            </div>


            {/* Q Zone*/}
            <div className="border border-s-[#E7E7E7] 
            text-lg font-semibold
            text-[#403F3F] mt-5 bg-[#F3F3F3]">
            <p className="font-bold text-2xl p-4">Q Zone</p>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />

               
              
            
            </div>
           
        </div>
    );
};

export default RightSideNav;