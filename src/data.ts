import { UserEntity, UserFriends } from "./entities/user.entity";

export const users: UserEntity[] = [
    {
        id: '1',
        name: 'Alan Jhonnes',
    },
    {
        id: '2',
        name: 'Nathan',
    }
]

export const friends: UserFriends[] = [
    {
        userId: '1',
        friendId: '2',
    },
    {
        userId: '2',
        friendId: '1',
    }
]
