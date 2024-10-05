export interface PostType {
  userName: string;
  title: string;
  dateCreated: string;
  description: string;
  imgUrl: string;
}

export const posts: PostType[] = [
  {
    userName: 'Random Person 1',
    title: 'Some random generic title from a user',
    dateCreated: '2021-02-01T22:45:00',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 2',
    dateCreated: '2021-02-01T21:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1668037381937-f7df1b888573?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    userName: 'Random Person 3',
    dateCreated: '2021-02-01T21:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 4',
    dateCreated: '2021-02-01T19:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl: 'https://plus.unsplash.com/premium_photo-1668037381937-f7df1b888573?q=80&w=3221&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    userName: 'Random Person 5',
    dateCreated: '2021-02-01T23:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  },
  {
    userName: 'Random Person 6',
    dateCreated: '2021-02-02T10:45:00',
    title: 'Some random generic title from a user',
    description: 'Some random description from a user.',
    imgUrl:
      'https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fHJhbmRvbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
  }
];
