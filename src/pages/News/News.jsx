import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const News = () => {
    const {id}= useParams()
    return (
        <div className="container mx-auto">
            <Header></Header>
            <Navbar></Navbar>

            <div className="grid md:grid-cols-4">
            <div className="col-span-3">
            <p className="text-2xl font-semibold text-[#403F3F]">Dragon News</p>
                {id}
            </div>
            <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default News;