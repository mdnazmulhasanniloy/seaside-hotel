import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';





const MyBookingTable = ({ booking, index, handelDelete, loader}) => {
    const {img, title, roomType, price, paid, _id} = booking;


     //payment 

     const handelToken = async(token, address) =>{
        // const response = await axios.post('https://seaside-hotel-sarver.vercel.app/checkout',{token, booking})

        // //token res 

        // console.log(response.status)
    }

    return (
        <tr>
            <th>
                {index + 1}
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={img} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                {title}
            </td>
            <td>
                {roomType}
            </td>
            <td>
                {price}$
            </td>

            <th>
                {
                    paid===true ? <p className=' text-green-500'>Payment Paid</p>
                        : <StripeCheckout 
                            stripeKey='pk_test_51M8prXIXB0idujJUScQk1pRCxpDgfObu86XZ4ckSZmzdTnmFp1709TBuFtYNZkRa2YvIU9a9vCksVAn5tCoffXY200MPcYPb2Q'
                            name={title}
                            token={handelToken}
                            currency="USD"
                            panelLabel={`Booking`}
                            amount={price*100}

                        />
                }
            </th>
            <th>
                <button className={`${loader?"btn btn-error btn-sm text-white loading" : "btn btn-error btn-sm text-white"}`} 
                        onClick={()=>handelDelete(_id)}>{loader? 'Loading' : 'Delete'}</button>
            </th>
        </tr>
    );
};

export default MyBookingTable;