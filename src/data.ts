export interface User {
    id: string;
    name: string;
    friends: string[];
}

export const users: User[] = [
    {
        id: '1',
        name: 'Alan Jhonnes',
        friends: [
            '2',
        ]
    },
    {
        id: '2',
        name: 'Nathan',
        friends: [
            '1',
        ]
    }
]
