import { users } from "../data";
import { UserEntity } from "../entities/user.entity";
import { GQLMutationResolvers } from "../resolvers-types";

export const addUserMutation: GQLMutationResolvers['addUser'] = (obj, args, context) => {
    const newUser: UserEntity = {
        id: users.length.toString(),
        name: args.data.name,
    };
    users.push(newUser);

    return newUser
}
