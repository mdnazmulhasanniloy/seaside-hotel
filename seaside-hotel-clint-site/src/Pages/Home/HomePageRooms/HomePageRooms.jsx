import React from 'react';
import { useQuery } from '@tanstack/react-query';
import RoomShowCard from '../../Shared/RoomShowCard/RoomShowCard';



const HomePageRooms = () => {

    const { data: rooms = [], refetch, isLoading } = useQuery({
        queryKey: ['advertisementItems'],
        queryFn: async () => {
            const res = await fetch(`https://seaside-hotel-sarver.vercel.app/rooms`)
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <h3 className='text-5xl text-center'>Loading...</h3>
    }

    return (
        <div className='py-24'>
            <div className="w-11/12 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px]">
                    { rooms.map(room => <RoomShowCard room={room} key={room?._id}/>)}
                </div>
            </div>
        </div>
    );
};

export default HomePageRooms;