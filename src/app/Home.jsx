import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import TableData from './TableData.component';
//hook
import useHook from './hooks/home.hook';
//
const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  form: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '80%',
    },
    flex: 1,
  },
  // eslint-disable-next-line prettier/prettier
  row_st: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  btn: {
    width: '100px',
  },
}));

const LIST = [
  { id: 1, name: 'AAA', UID: '1', email: '@gmail.com' },
  { id: 2, name: 'BBB', UID: '2', email: '@gmail.com' },
  { id: 3, name: 'CCC', UID: '3', email: '@gmail.com' },
  { id: 4, name: 'DDD', UID: '4', email: '@gmail.com' },
];

const HomePage = () => {
  const classes = useStyles();
  const { userList, handleUserListOnChange, addUsers, isEnable } = useHook();
  return (
    <div className={classes.root}>
      <div className={classes.row_st}>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            placeholder="uid3233 | user-name | email@gmail.com |pass12345"
            id="outlined-multiline-static"
            label="List User:UID |user-name |email |pass"
            multiline
            rows={4}
            fullWidth
            defaultValue=""
            variant="outlined"
            value={userList}
            onChange={handleUserListOnChange}
          />
        </form>
        <Button
          disabled={!isEnable}
          onClick={addUsers}
          variant="contained"
          color="primary"
          className={classes.btn}
        >
          ADD
        </Button>
      </div>
      {/* ------- */}
      <TableData />
    </div>
  );
};

export default HomePage;
