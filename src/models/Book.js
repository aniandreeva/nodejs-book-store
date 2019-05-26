import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String
    },
    price: {
        type: Number,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", BookSchema);
export default Book;