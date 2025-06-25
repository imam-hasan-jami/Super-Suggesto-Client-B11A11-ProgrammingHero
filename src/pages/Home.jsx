import React from 'react';
import Slider from '../components/Slider';
import RecentQueries from '../components/RecentQueries';

const Home = () => {
    return (
        <div>
            <div>
                <Slider />
            </div>
            <div className='w-9/12 mx-auto my-20'>
                <RecentQueries />
            </div>
        </div>
    );
};

export default Home;