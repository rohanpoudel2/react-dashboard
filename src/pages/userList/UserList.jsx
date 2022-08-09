import './userlist.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Userrows } from '../../dummyData';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const UserList = () => {

  const [data, setDate] = useState(Userrows);

  const handleDelete = (id) => {
    setDate(data.filter((i) => i.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'username', headerName: 'User', width: 200, renderCell: (params) => {
        return (
          <div className='userRender'>
            <img src={params.row.avatar} alt="userImg" className='img' />
            {params.row.username}
          </div>
        )
      }
    },
    { field: 'email', headerName: 'Email', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/user/' + params.row.id}>
              <button className="btnEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className='btnDelete' onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];


  return (
    <div className="userlist">
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default UserList