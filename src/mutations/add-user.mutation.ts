import { GQLMutationResolvers } from "../resolvers-types";

export const addUserMutation: GQLMutationResolvers['addUser'] = (obj, args, context) => {
    return {
        id: '1',
        name: args.data.name,
    }
}
