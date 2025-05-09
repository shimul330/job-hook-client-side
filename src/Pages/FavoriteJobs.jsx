import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getToFavourite, removeFavourite } from '../localStorage';
import FavoriteCard from './FavoriteCard';
import Empty from './Empty';
import { toast } from 'react-toastify';

const FavoriteJobs = () => {
    const [favourite, setFavourite] = useState([]);
    useEffect(()=>{
        const savedFavourite = getToFavourite();
        setFavourite(savedFavourite);
    },[])

    const handleRemoveFavourite =(id)=>{
        removeFavourite(id);
        setFavourite(getToFavourite())
        toast.warning("Cancel Successfull!")
    }
    if (favourite.length < 1) return <Empty></Empty>
    return (
        <div>
            <h1 className='text-3xl font-bold mb-6 text-center text-amber-500'>Your Favourite Jobs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 mx-auto'>
                {
                    favourite.map(fav=> <FavoriteCard key={fav.id} fav={fav} handleRemoveFavourite={handleRemoveFavourite} ></FavoriteCard> )
                }
            </div>
        </div>
    );
};

export default FavoriteJobs;