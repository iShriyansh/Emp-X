import React from 'react'
import { Box, Button,Avata, IconButton, TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { DataGrid,  } from '@mui/x-data-grid';
import { useState } from 'react';
export default function ManageEmployee() {
    return (
        <Box sx = {{width:"100%"}}>
            <DataGridDemo />
        </Box>
    
    )
}






const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    // editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    // editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    // editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];






 function DataGridDemo() {

const [searchFiledText, setSearchFiledText] = useState("");
const [searchedRow, setSearchedRow] = useState([]);

function searchRow(text)
{
    if(text.length > 0)
    {
     
                  let temp = rows.filter(row => {
                      if(row.firstName!=null){
 return row.firstName.toLowerCase().includes(text.toLowerCase());
                      }
                     
                  });
       
        setSearchedRow(temp);
        
  
    }
    else
    {
        setSearchedRow([]);
    }
    
// rows.forEach(function (row, index){
// var x = row.firstName;

// if(x!==null){
// if(x.includes(text)){
// setSearchedRow((row))
// }
// }else{
// }
// });



}

  return (
    <div style ={{display:"flex", flexDirection: "column"}}> 
       
       
         <Box  sx ={{display:"flex", flexDirection: {xs : "column" ,md:"row"}, justifyContent:"space-between", mb:2, alignItems:"start",  gap:2}}>
     
     <Box>
     <TextField size ="small"
     name = "searchBox"
             placeholder = "Search..."
             value = {searchFiledText}
             onChange = {function (e){ setSearchFiledText(e.target.value); searchRow(e.target.value);}}
             InputLabelProps = {
                { 
              
                }
             }
              />

                <IconButton onClick={()=>{}}>
        <Search />


      </IconButton>

     </Box>
   
        <Button variant="contained" >Add Employee</Button>
      
    </Box>
       
        <div style={{ height: 300, width: '100%' }}>
      <DataGrid
        rows={searchFiledText.length > 0 ? searchedRow : rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}

        disableSelectionOnClick
      />
    </div>
   
  

    </div>

    
  );
}
