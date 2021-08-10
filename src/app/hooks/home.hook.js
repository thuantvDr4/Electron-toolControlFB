/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import _ from 'lodash/core';
import { ipcRenderer } from 'electron';
//
import { usersState, removeUser, getUser } from '../recoil/users/users.states';

export default () => {
  const [isEnable, setIsEnable] = useState(false);
  const [userList, setUserList] = useState('');
  const [idSelected, setIdSelected] = useState([]);

  const [userData, setUserData] = useRecoilState(usersState);

  useEffect(() => {
    // console.log(userList);
  }, [userList]);

  //   handleUserListOnChange
  function handleUserListOnChange(event) {
    // eslint-disable-next-line prefer-destructuring
    const value = event.target.value;
    setUserList(value);
    if (value.length && value.trim().length) {
      setIsEnable(true);
    } else {
      setIsEnable(false);
    }
  }
  //---->1234 |AAAAA |abc@gmail.com |pass123
  // add users
  function addUsers() {
    const resutls = convertStingToArray(userList);
    setUserData([...resutls, ...userData]);
  }

  //
  const convertStingToArray = (strings) => {
    const mixString = strings.split(/\n/);
    const results = [];
    //
    for (const item of mixString) {
      const res = item.split('|');
      const obj = {
        id: res[0].trim(),
        uid: res[0].trim(),
        userName: res[1].trim(),
        email: res[2].trim(),
        pass: res[3].trim(),
      };
      results.push(obj);
    }
    console.log(results);
    return results;
  };
  // onSelectionChange
  function onSelectionChange(idList) {
    setIdSelected(idList);
  }

  // deleteItem
  function deleteItem() {
    if (_.isEmpty(idSelected)) {
      return;
    }
    //
    // console.log(idSelected);
    const newList = removeUser(idSelected[0], userData);
    setUserData(newList);
  }

  // run-user
  function runLoginUser() {
    if (_.isEmpty(idSelected)) {
      return;
    }
    // console.log(idSelected);
    const user = getUser(idSelected[0], userData);
    console.log(user);
    ipcRenderer.send('login-fb', user);
  }

  //
  return {
    userList,
    handleUserListOnChange,
    addUsers,
    onSelectionChange,
    isEnable,
    deleteItem,
    runLoginUser,
  };
};
