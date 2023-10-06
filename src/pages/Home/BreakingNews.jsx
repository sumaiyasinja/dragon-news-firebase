import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] p-4 gap-5 my-7">
            <button className="bg-[#D72050] py-2 px-6 text-white font-medium text-xl">Latest</button>
            <Marquee className="text-[#403F3F] text-lg font-semibold" pauseOnHover={true} speed={100}>
            <Link to="/" className="mr-12">Match Highlights: Germany vs Spain — as it happened   !  </Link>
            <Link to="/" className="mr-12">Match Highlights: Germany vs Spain — as it happened   !  </Link>
            <Link to="/" className="mr-12">Match Highlights: Germany vs Spain — as it happened   ! </Link>
            
 
            </Marquee>
        </div>
    );
};

export default BreakingNews;