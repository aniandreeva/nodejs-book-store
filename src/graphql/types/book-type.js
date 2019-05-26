export default `

    input BookInput {
        _id: String!,
        title: String!,
        imageUrl: String,
        price: Int!,
        authorId: String!,
        publisher: String!
    }

    type Book {
        _id: String!,
        title: String!,
        imageUrl: String,
        price: Int!,
        authorId: String!,
        publisher: String!
    }

    type Query {
        book(_id: String!): Book
        books: [Book]
    }

    type Mutation {
        addBook(title: String!, imageUrl: String, price: Int!, authorId: String!, publisher:  String!): Book
        editBook(_id: String!, title: String!, imageUrl: String, price: Int!, authorId: String!, publisher:  String!): Book
        deleteBook(_id: String!): Book
    }
`;