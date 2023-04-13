import React from 'react';
import background from '../../Assets/BookingPageBG/BookingPageBG.jpg';
import Login from './Login';
import Register from './../../Register/Register';
import { Tabs, TabsHeader, TabsBody, Tab, TabPanel} from "@material-tailwind/react";

const PrivateRoutLogin = () => {

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
    ];

    return (
        <div className="h-[120vh] w-screen flex items-center justify-center
                        bg-cover bg-center bg-no-repeat
                        relative" 
            style={{background: `url(${background})`}}>

            <div className="hero mt-10">
                <div className="card flex-shrink-0 w-full max-w-[600px] shadow-2xl bg-base-100">
                    <div className="card-body">
                    <div className="w-11/12 mx-auto">
                    {/* tabs */}
                    <Tabs id="custom-animation" className='mt-10' value="login">
                        <TabsHeader>
                            {data.map(({ label, value }) => (
                            <Tab key={value} value={value} className="text-accent">
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
        </div>
    );
};

export default PrivateRoutLogin;