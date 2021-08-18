import { GraphQLID, GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { friends, users } from "../data";
import { UserEntity } from "../entities/user.entity";
import { GQLUserResolvers } from "../resolvers-types";

export const userResolver: GQLUserResolvers = {
    id: (obj, args, context) => obj.id,
    name: (obj) => obj.name,
    friends: (obj) => {
        return friends
            .filter(userFriend => userFriend.userId === obj.id)
            .map(userFriend => users.find(user => user.id === userFriend.friendId)!);
    },
    firstName: (obj) => {
        return obj.name.split(' ')[0];
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
