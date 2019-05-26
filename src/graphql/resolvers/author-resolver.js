import Author from '../../models/Author';

const AuthorResolver = {
    Query: {
        author: (root, args) => {
            return new Promise((resolve, reject) => {
                Author.findOne(args).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        authors: () => {
            return new Promise((resolve, reject) => {
                Author.find({}).populate().exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    },
    Mutation: {
        addAuthor: (root, { name }) => {
            const author = new Author({ name });

            return new Promise((resolve, reject) => {
                author.save((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        },
        editAuthor: (root, { _id, name }) => {
            return new Promise((resolve, reject) => {
                Author.findOneAndUpdate({ _id }, { $set: { name } })
                    .exec((err, res) => {
                        err ? reject(err) : resolve(res);
                    });
            });
        },
        deleteAuthor: (root, { _id }) => {
            return new Promise((resolve, reject) => {
                Author.findByIdAndRemove({ _id }).exec((err, res) => {
                    err ? reject(err) : resolve(res);
                });
            });
        }
    }
};

export default AuthorResolver;