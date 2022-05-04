import { User, users } from "../data";
import { GQLMutationResolvers } from "../resolvers-types";

export const addUserMutation: GQLMutationResolvers['addUser'] = async (obj, args, context) => {
    const user: User = {
        id: (users.length + 1).toString(),
        name: args.data.name,
        friends: [],
    };
    await users.push(user);
    return user;
}
