import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { UserEntity } from "../entities/user.entity";
import { GQLUserResolvers } from "../resolvers-types";

export const userResolver: GQLUserResolvers = {
    id: (obj) => obj.id,
    name: (obj) => obj.name,
    friends: (obj) => {
        return [];
    }
}

// Feito via metodo code-first:
// export const userType = new GraphQLObjectType<UserEntity>({
//     name: 'User',
//     fields: {
//         id: {
//             type: new GraphQLNonNull(GraphQLID),
//             resolve: (obj) => obj.id,
//         },
//         name: {
//             type: new GraphQLNonNull(GraphQLString),
//             resolve: (obj) => obj.name,
//         }
//     }
// })
