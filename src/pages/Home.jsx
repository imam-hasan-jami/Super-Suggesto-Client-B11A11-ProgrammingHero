import React from 'react';
import Slider from '../components/Slider';
import RecentQueries from '../components/RecentQueries';
import HowItWorks from '../components/HowItWorks';
import FeaturedRecommendations from '../components/FeaturedRecommendations';

const Home = () => {
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div className='bg-gray-50 py-16'>
                <div className='w-9/12 mx-auto'>
                    <HowItWorks />
                </div>
            </div>
            <div className='w-9/12 mx-auto my-20'>
                <RecentQueries />
            </div>
            <div className='bg-red-50 py-16'>
                <div className='w-9/12 mx-auto'>
                    <FeaturedRecommendations />
                </div>
            </div>
        </div>
    );
};

export default Home;