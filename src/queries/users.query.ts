import { users } from "../data";
import { GQLQueryResolvers } from "../resolvers-types"

export const usersQuery: GQLQueryResolvers['users'] = async (obj, args, context) => {
    return users;
} 
