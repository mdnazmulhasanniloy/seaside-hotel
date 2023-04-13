
import React, { useState } from 'react';
import { GrFormClose } from 'react-icons/gr'; 
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
import Login from '../../Login/Login';
import Register from '../../../Register/Register';

const LoginModal = () => {
    

    const data = [
        {
          label: "LOGIN",
          value: "login",
          desc: <Login />,
        },
        {
          label: "REGISTER",
          value: "register",
          desc: <Register />,
        }
    ]
    return (
        <div>
            <input type="checkbox" id="Login-Modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="Login-Modal" className="absolute right-2 top-2 hover:rotate-90 transform-all duration-500 cursor-pointer" title='Close'><GrFormClose className='text-4xl text-accent' /></label>
                    <div className="w-11/12 mx-auto">
                    {/* tabs */}
                    <Tabs id="custom-animation" className='mt-10' value="login">
                        <TabsHeader>
                            {data.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                {label}
                            </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody
                            animate={{
                            initial: { y: 250 },
                            mount: { y: 0 },
                            unmount: { y: 250 },
                            }}
                        >
                            {data.map(({ value, desc }) => (
                            <TabPanel key={value} value={value}>
                                {desc}
                            </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;