import { addUserMutation } from "./mutations/add-user.mutation";
import { GQLMutationResolvers } from "./resolvers-types";


// Feito via metodo code-first:
// export const mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addUser: addUserMutation,
//     }
// })

export const mutationResolvers: GQLMutationResolvers = {
    addUser: addUserMutation,
}
