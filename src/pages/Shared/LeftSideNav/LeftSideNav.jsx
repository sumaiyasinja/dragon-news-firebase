import { useEffect, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

  
    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div className="space-y-6">
        <h2 className="text-2xl">All Categories</h2>      
    
        {
            categories.map(category => <Link
            className="block ml-4 text-xl font-semibold" 
                    key={category.id}
                    to={`/category/${category.id}`}
                    >{category.name}</Link>)
                } 


{/* card container */}
                <div>
                <div className="card bg-base-100 shadow-xl">
                <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-[#403F3F] font-bold text-xl ">
                    Shoes!
                    </h2>
                    
                    <div className="card-actions flex items-center justify-between">
                    <div className="text-[#403F3F]e text-lg font-medium">Sports</div> 
                    <div className="flex items-center gap-3 ">
                    <FaCalendar></FaCalendar>
                    <div className=" text-[#9F9F9F] text-lg font-medium">Jan 4, 2022</div>
                    </div>
                    </div>
                </div>
                </div>
                </div>
        </div>
              
    );
};

export default LeftSideNav;