export default `

    type Author {
        _id: String!,
        name: String!,
        books: [Book]
    }

    type Query {
        author(_id: String!): Author
        authors: [Author]
    }

    type Mutation {
        addAuthor(name: String!): Author
        editAuthor(_id: String!, name: String!): Author
        deleteAuthor(_id: String!): Author
    }
`;