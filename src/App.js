import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Papa from 'papaparse';
import './App.css';

function App() {

  const columns = [
    {
      name: 'id',
      selector: row => row.id,
      sortable: true,
    },
    {
      name: 'first_name',
      selector: row => row.first_name,
      sortable: true,
    },
    {
      name: 'last_name',
      selector: row => row.last_name,
      sortable: true,
    },
    {
      name: 'email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Gender',
      selector: row => row.gender,
      sortable: true,
    },
    {
      name: 'ip_address',
      selector: row => row.ip_address,
      sortable: true,
    },
    {
      name: 'airport code',
      selector: 'airport code',
      sortable: true,
    },
    {
      name: 'time',
      selector: row => row.time,
      sortable: true,
    },
    {
      name: 'status',
      selector: row => row.status,
      sortable: true,
    },
    {
      name: 'mobile',
      selector: row => row.mobile,
      sortable: true,
    },
    {
      name: 'area',
      selector: row => row.area,
      sortable: true,
    },
    {
      name: 'show',
      selector: row => row.show,
      sortable: true,
    },
    {
      name: 'edit',
      selector: row => row.edit,
      sortable: true,
    },
  ];

  const [data, setData] = useState([]);
  const handleFile = (file) => {
    Papa.parse(file, {
      header:true,
      complete: (res) => {
        setData(res.data);
      }
    });
  };

  const conditionalRowStyles = [
    {
      when: row => row.toggleSelected,
      style: row => ({
        backgroundColor: row.status.includes(true) ? 'green' : 'red',
        color: 'white',
        }
      ),
    },
  ];

  const handleRowOnClick = (row) => {
    const updated = data.map(item => {
      if (row.id !== item.id) {
        return item;
      }
      return {
        ...item,
        toggleSelected: !item.toggleSelected
      };
    }
    );
    setData(updated);
  }

    return (
    <div className="App">
     <input type="file" onChange={(e) => handleFile(e.target.files[0])
    }
    />
      <DataTable
      pagination
      highlightOnHover
      columns={columns}
      data={data}
      responsive={true}
      onRowClicked={handleRowOnClick}
      conditionalRowStyles={conditionalRowStyles}
      >
      </DataTable>
    </div>
  );
}

export default App;

