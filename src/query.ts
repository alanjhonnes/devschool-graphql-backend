import { usersQuery } from "./queries/users.query";
import { GQLQueryResolvers } from "./resolvers-types";


export const queryResolvers: GQLQueryResolvers = {
    users: usersQuery,
}
 