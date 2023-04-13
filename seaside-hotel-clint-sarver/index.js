const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();
const stripe = require("stripe")(process.env.STRIP_SECRET);
const uuid = require('uuid').v4

const jwt = require('jsonwebtoken');


const app = express();
const port = process.env.PORT || 2000;


app.use(cors());
app.use(express.json());



//db connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyj8wdj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })


// jwt function

const verifyJwt = (req, res, next) => {

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('unAuthorize access')
    }
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
        if (err) {
            return res.status(403).send({ message: 'forbidden access' })
        }
        req.decoded = decoded;
        next();
    })

}  
const run = async () => {
    try {

        //db table 
        const userCollection = client.db(`${process.env.DB_USER}`).collection('user');
        const roomCollection = client.db(`${process.env.DB_USER}`).collection('room');
        const bookingCollection = client.db(`${process.env.DB_USER}`).collection('booking');
 

        //payment method
        app.post('/checkout', async (req, res, next) => {
            const {booking, token} = req.body; 
            const key = uuid();

            return stripe.customers.create({
                email: token.email,
                source: token.id
            })
                .then(customer => {
                    stripe.charges.create(
                        {
                            amount: booking.price*100,
                            currency: 'usd',
                            customer: customer.id,
                            receipt_email: token.email,
                            description: `Purchased the ${booking.title}`,
                            shipping: {
                                name: token.card.name,
        
                            }
                        }, { key })
                })
                .then(result => res.status(200).json(result))
                .catch(err => res.status(400).json(err))


                // const {id: customerId} = await stripe.customers.create({
                //     email: token.email,
                //     source: token._id,
                // })
            
            // const invoiceId = `${token.email}-${Math.random().toString()}-${Date.now().toString()}`

            // const charge = await stripe.charges.create({
            //     amount: booking.price*100,
            //     currency: 'usd',
            //     "payment_method_types": [ "card" ],
            //     customer: customerId.id,
            //     receipt_email: token.email,
            //     description: `Purchased the ${booking.title}`
            // },
            // {
            //     key
            // }).catch(err=>{ 
            //     console.log(err)
            //     return null;
            // });

            // if(!charge){
            //     res.status(5000).json({success: false});
            //     return;
            // }

            // res.status(201).json({success: true});




            
            // const key = uuid();
            // console.log(key)

            // const charge = await stripe.paymentIntents.retrieve({
            //     
            //     
            //     description: `Purchased the ${booking.title}`,
            //     
            // },

            // {
            //     key,
            // });

            // res.send({status: "success"})






            // const amount = price * 100;
            // const paymentIntent = await stripe.paymentIntents.create({
            //     amount: amount,
            //     currency: 'usd',
            //     "payment_method_types": [
            //         "card"
            //     ]
            // });
            // res.send({
            //     clientSecret: paymentIntent.client_secret,
            // });
        });


        // jwt api
        app.get('/jwt', async (req, res) => {
            const email = req.query.email;
            const query = { email: email }
            const user = await userCollection.findOne(query);
            if (user) {
                const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '1d' });
                return res.send({ accessToken: token });
            }
            return res.status(403).send({ accessToken: '' })

        });
        
        //create user
        app.post('/users', async (req, res) => {
            const user = req.body;
            const result = await userCollection.insertOne(user)
            res.send(result);
        });


        // find users
        app.get('/allUser/:role', verifyJwt, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await userCollection.findOne(query);
            if (user?.role !== 'Admin') {
                return res.status(403).send({ message: 'forbidden access' })
            }


            const role = req.params.role
            const roleQuery = {
                role: role
            }
            const result = await userCollection.find(roleQuery).toArray();
            res.send(result)
        });


        


        // delete user 

        app.delete('/user/delete/:id', verifyJwt, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await userCollection.findOne(query);
            if (user?.role !== 'Admin') {
                return res.status(403).send({ message: 'forbidden access' })
            }

            const id = req.params.id;
            const userQuery = {
                _id: ObjectId(id)
            }

            const result = await userCollection.deleteOne(userQuery);
            res.send(result);
        })

          // check admin user 
          app.get('/user/admins/:email', async (req, res) => {
            const email = req.params.email;
            const query = { email }
            const user = await userCollection.findOne(query)
            res.send({ isAdmin: user?.role === 'Admin' })

        });


        //get rooms data
        app.get('/rooms', async (req, res) => {
            const query = {}
            const result = await roomCollection.find(query).sort('date', -1).toArray();
            res.send(result);
        });


        //get rooms data using id
        app.get('/rooms/:id', async(req, res) => {
            const id = req.params.id;
            const query = {_id: new ObjectId(id)}
            const result = await roomCollection.findOne(query);
            res.send(result);
        });

        //Booking Room
        app.post('/booked', async (req, res) => {
            const user = req.body;
            const result = await bookingCollection.insertOne(user)
            res.send(result);
        });

         //get Booking using email
         app.get('/MyBooking/:email', verifyJwt, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await userCollection.findOne(query);
            if (user?.role !== 'Buyers') {
                return res.status(403).send({ message: 'forbidden access this feature only access a Buyers' })
            }


            const email = req.params.email;
            const myBookingQuery = {
                email: email,
            }
            const result = await bookingCollection.find(myBookingQuery).sort('date', -1).toArray();
            res.send(result)
        });

        //delete my booked item

        app.delete('/myBooking/delete/:id', verifyJwt, async (req, res) => {
            const decodedEmail = req.decoded.email;
            const query = { email: decodedEmail }
            const user = await userCollection.findOne(query);
            if (user?.role !== 'Buyers') {
                return res.status(403).send({ message: 'forbidden access' })
            }


            const id = req.params.id;
            console.log(id)
            const bookingQuery = {
                _id: new ObjectId(id)
            }
            const result = await bookingCollection.deleteOne(bookingQuery);
            res.send(result);
        })




    }
    finally {

    }
}
run().catch(console.dir);





app.get('/', (req, res) => {
    res.send('simple seaside-hotel server is running');
});



app.listen(port, () => {
    console.log(`simple seaside-hotel server running on prot ${port}`);
})