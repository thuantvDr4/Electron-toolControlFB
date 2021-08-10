import React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { useRecoilValue } from 'recoil';
//
import useHook from './hooks/home.hook';
//
import { usersState } from './recoil/users/users.states';
//
const useStyles = makeStyles((theme) => ({
  icon_row: {
    width: '100%',
    position: 'relate',
  },
  icon_delete: {
    position: 'absolute',
    right: 0,
  },
}));

const columns = [
  { field: 'id', headerName: 'UID', width: 150 },
  {
    field: 'userName',
    headerName: 'User name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  {
    field: 'uid',
    headerName: 'Key',
    type: 'string',
    width: 200,
    editable: true,
  },
  {
    // field: '',
    // headerName: '',
    // description: 'This column has a value getter and is not sortable.',
    // sortable: false,
    // width: 160,
    // eslint-disable-next-line react/display-name
    // renderCell: (params) => {
    //   return (
    //     <div
    //       className="d-flex justify-content-between align-items-center"
    //       style={{ cursor: 'pointer' }}
    //     >
    //       {params.getValue(params.id, 'id')}
    //     </div>
    //   );
    // },
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
];

const rows = [
  { id: 1, userName: 'Snow', email: 'Jon', uid: 35 },
  { id: 2, userName: 'Lannister', email: 'Cersei', uid: 42 },
  { id: 3, userName: 'Lannister', email: 'Jaime', uid: 45 },
  { id: 4, userName: 'Stark', email: 'Arya', uid: 16 },
  { id: 5, userName: 'Targaryen', email: 'Daenerys', uid: null },
  { id: 6, userName: 'Melisandre', email: null, uid: 150 },
  { id: 7, userName: 'Clifford', email: 'Ferrara', uid: 44 },
  { id: 8, userName: 'Frances', email: 'Rossini', uid: 36 },
  { id: 9, userName: 'Roxie', email: 'Harvey', uid: 65 },
];

const TableData = () => {
  const classes = useStyles();
  const userList = useRecoilValue(usersState);
  const { onSelectionChange, deleteItem, runLoginUser } = useHook();
  return (
    <div>
      {/* ----- */}
      <div className={classes.icon_row}>
        <Button onClick={runLoginUser} variant="contained" color="primary">
          Run
        </Button>

        <IconButton
          className={classes.icon_delete}
          color="primary"
          aria-label="upload picture"
          component="span"
          onClick={deleteItem}
        >
          <DeleteIcon style={{ color: 'red' }} />
        </IconButton>
      </div>
      {/* --------table-data */}
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          onSelectionModelChange={onSelectionChange}
          rows={userList}
          columns={columns}
          pageSize={5}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default TableData;
