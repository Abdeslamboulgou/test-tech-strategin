import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'email', headerName: 'E-mail', width: 300 },
    { field: 'password', headerName: 'Password', width: 300 }
  ];

const UsersList = (props) => {
 
    const rowsData = props.usersList.map((user, i) => {
        user.id = i + 1
        return user
      })
    return (
        <div>
            <div className='ag-theme-alpine' style={{ height: '80vh', width: '100%' }}>
              <AgGridReact
                defaultColDef={{sortable:true , filter:true}}
                rowsData={rowsData}
                columnDefs={columns}
                pagination={true}
              />
            </div>
        </div>
    );
};

export default UsersList;