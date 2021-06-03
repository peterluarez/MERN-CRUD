const express = require('express')
const mongoose = require('mongoose')
const app = express();
// import the book,js
const bookModel = require('./models/book')

// app.use is a middleware. Now, you can load the files that are in the public directory
app.use(express.json())

mongoose.connect("mongodb+srv://newdb:passdb@crud.nh3ll.mongodb.net/booking?retryWrites=true&w=majority", {
    useNewUrlParser: true,
})

app.get('/', async (req, res) => {
    const book = new bookModel({
        fullName: "Juan",
        roomType: "Economy",
        daysStayIn: 3
    });
    try {
        await book.save();
        // response
        res.send("data inserted!");
    } catch (err) {
        console.log(err)
    }
});

// bind and listen the connections on the specified host and port
app.listen(3001, () => {
    console.log("server running in port 3001");
});


// db user: newdb pass: passdb