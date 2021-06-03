const moongose = require("mongoose")

const bookSchema = new moongose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    roomType: {
        type: String,
        required: true,
    },
    daysStayIn: {
        type: Number,
        required: true,
    }
})

const Book = moongose.model("booking", bookSchema)
module.exports = Book;