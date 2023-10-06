import Header from '../Shared/Header/Header'
import Navbar from '../Shared/Navbar/Navbar'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCard from './NewsCard';
const Home = () => {
    const news = useLoaderData()
    console.log(news)
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                <div>
                    <LeftSideNav></LeftSideNav>
                </div>
                {/* news container */}
                <div className='col-span-2 border rounded-md border-s-[#E7E7E7] p-5'>
                    {news.map(aSingleNews => (
                        <NewsCard
                        key={aSingleNews._id}
                        news={aSingleNews}
                        />
                    ))}
                    </div>

                <div>
                    <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Home;