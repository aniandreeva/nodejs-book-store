import { makeExecutableSchema } from "graphql-tools";
import { mergeResolvers, mergeTypes } from "merge-graphql-schemas";

import Author from "./types/author-type"
import Book from "./types/book-type";
import AuthorResolver from "./resolvers/author-resolver";
import BookResolver from "./resolvers/book-resover";

const typeDefs = mergeTypes([Author, Book]);
const resolvers = mergeResolvers([AuthorResolver, BookResolver]);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

export default schema;