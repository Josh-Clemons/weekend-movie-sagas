import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import './TableTest.css';
import { useEffect } from 'react';

const columns = [

    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 150 },
    { field: 'poster', headerName: 'Poster Link', width: 150 },
    { field: 'description', headerName: 'Description', width: 300 },
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




export default function TableTest() {


    // const rows = useEffect(store => store.movies)


    return (
        <div className='tableTest' style={{ marginBottom: 100, height: 400, width: '90%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}