import mongoose from 'mongoose';
import Book from './Book';

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    books: {
        type: [Book.schema]
    }
})

const Author = mongoose.model("Author", AuthorSchema);
export default Author;