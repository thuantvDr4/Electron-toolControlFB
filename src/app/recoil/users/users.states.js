import { atom, selector } from 'recoil';

// eslint-disable-next-line import/prefer-default-export
export const usersState = atom({
  key: 'users-state',
  default: [
    {
      id: 100066533145337,
      userName: 'React dev',
      email: 'reactnavtive@gmail.com',
      uid: 100066533145337,
      pass: 'Re@ctNative07082021',
    },
    { id: 1, userName: 'Snow', email: 'Jon', uid: 35 },
    { id: 2, userName: 'Lannister', email: 'Cersei', uid: 42 },
    { id: 3, userName: 'Lannister', email: 'Jaime', uid: 45 },
    { id: 4, userName: 'Stark', email: 'Arya', uid: 16 },
    { id: 5, userName: 'Targaryen', email: 'Daenerys', uid: null },
    { id: 6, userName: 'Melisandre', email: null, uid: 150 },
  ],
});

/*
 * removeUser
 * */
export const removeUser = (userId, userList) => {
  //
  let newUserList = [...userList];
  newUserList = userList.filter((user) => {
    return user.id !== userId;
  });
  //
  return newUserList;
};

/*
 * getUser
 * */
export const getUser = (userId, userList) => {
  //
  let newUserList = [...userList];
  newUserList = userList.filter((user) => {
    return user.id === userId;
  });
  //
  return newUserList;
};
