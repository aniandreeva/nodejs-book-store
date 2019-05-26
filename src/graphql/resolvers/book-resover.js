import Book from '../../models/Book';

const BookResolver = {
    Query: {
        book: (root, args) => {
            return new Promise((resolve, reject) => {
                Book.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        books: () => {
            return new Promise((resolve, reject) => {
                Book.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addBook: (root, { title, imageUrl, price, authorId, publisher }) => {
            const book = new Book({ title, imageUrl, price, authorId, publisher });

            return new Promise((resolve, reject) => {
                book.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editBook: (root, { _id, title, imageUrl, price, authorId, publisher }) => {
            return new Promise((resolve, reject) => {
                Book.findOneAndUpdate({ _id }, { $set: { title, imageUrl, price, authorId, publisher } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deleteBook: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Book.findByIdAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default BookResolver;