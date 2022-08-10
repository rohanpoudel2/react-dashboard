import './productlist.scss'
import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Productrows } from '../../dummyData';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const ProductList = () => {
  const [data, setData] = useState(Productrows);

  const handleDelete = (id) => {
    setData(data.filter((i) => i.id !== id))
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
        return (
          <div className='productRender'>
            <img src={params.row.image} alt="productImg" className='img' />
            {params.row.name}
          </div>
        )
      }
    },
    { field: 'stock', headerName: 'Stock', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="btnEdit">Edit</button>
            </Link>
            <DeleteOutlineIcon className='btnDelete' onClick={() => handleDelete(params.row.id)} />
          </>
        )
      }
    }
  ];


  return (
    <div className="productlist">
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

export default ProductList