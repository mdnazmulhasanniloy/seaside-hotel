import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import AllUserTable from './AllUserTable/AllUserTable';
import { toast } from 'react-hot-toast';
import Spanner from './../../../Shared/Spanner/Spanner';
import background from '../../../../Assets/BookingPageBG/BookingPageBG.jpg'
import { Pagination } from 'swiper';

const AllUser = () => {
    
    const [items, setItems] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(5);
    const [toggleTab, setToggleTab] = useState('Buyers')


    const { data: users = [], refetch, isLoading } = useQuery({
        queryKey: ['users', toggleTab],
        queryFn: async () => {
            const res = await fetch(`http://localhost:2000/allUser/${toggleTab}`,{
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            setItems(data);
            return data;
        }
    })


    //delete user 
    const handelToDelete = (id) => {
        fetch(`http://localhost:2000/user/delete/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {

                if (data.deletedCount > 0) {
                    toast.success('User deleted successfully.');
                    refetch()
                }
            })
            .catch(err => {
                toast.error(err.message)
            });
    }

    //verify user

    const handelToVerified = (id) => {
        fetch(`http://localhost:2000/user/role/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Admin successfully added')
                    refetch()
                }
            })
            .catch(err => {
                toast.error(err.message)
            })
    }


    //get current post

const indexOfLastItem = currentPage * itemPerPage;
const indexOfFirstItem =indexOfLastItem - itemPerPage;
const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);


    if (isLoading) {
        return <Spanner />
    }

    return (
    <div className="h-screen w-screen bg-cover bg-center bg-no-repeat overflow-y-scroll
    relative" 
    style={{background: `url(${background})`}}>

        <div className="w-11/12 mx-auto mt-36">
            <div className="mb-4 border-b border-gray2-00 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px text-lg  justify-between px-40 font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li className="mr-2" role="presentation">
                        <button
                            onClick={() => setToggleTab('Buyers')}
                            className={toggleTab === 'Buyers' ?
                                "inline-block  p-4 rounded-t-lg  border-b-2  text-blue-600  hover:text-blue-600  dark:text-blue-500   dark:hover:text-blue-500   border-blue-600  "
                                : "inline-block p-4 rounded-t-lg  border-b-2 border-transparent  hover:text-gray-600  hover:border-gray-300  dark:hover:text-gray-300 dark:border-transparent  text-gray-500 dark:text-gray-400  border-gray-100  dark:border-gray-700"
                            }
                        >Buyers</button>
                    </li> 
                    <li className="mr-2" role="presentation">
                        <button
                            onClick={() => setToggleTab('Admin')}
                            className={toggleTab === 'Admin' ?
                                "inline-block  p-4 rounded-t-lg  border-b-2  text-blue-600  hover:text-blue-600  dark:text-blue-500   dark:hover:text-blue-500   border-blue-600  "
                                : "inline-block p-4 rounded-t-lg  border-b-2 border-transparent  hover:text-gray-600  hover:border-gray-300  dark:hover:text-gray-300 dark:border-transparent  text-gray-500 dark:text-gray-400  border-gray-100  dark:border-gray-700"
                            }
                            type="button">Admins</button>
                    </li>
                </ul>
            </div>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Delete Account</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            currentItems.map((user, index) => <AllUserTable
                                user={user}
                                index={index}
                                handelToDelete={handelToDelete}
                                handelToVerified={handelToVerified}
                                key={user._id} />)
                        }
                    </tbody>
                </table>
                {
                    users.length > 5 &&
                    <div className="flex justify-center mt-10">
                        <Pagination totalItem={items.length} itemPerPage={itemPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                    </div> 
                }
            </div>
        </div>
        </div>
    );
};

export default AllUser;