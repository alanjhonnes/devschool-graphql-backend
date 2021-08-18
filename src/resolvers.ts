import { mutationResolvers } from "./mutation";
import { queryResolvers } from "./query";
import { GQLResolvers } from "./resolvers-types";
import { userResolver } from "./types/user.type";

export const resolvers: GQLResolvers = {
    User: userResolver,
    Mutation: mutationResolvers,
    Query: queryResolvers,
}
