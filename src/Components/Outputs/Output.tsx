import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';

// Define your data array for the Inputs tab
const data = [
  // Example data
  { id: 1, name: 'Item 1', value: 'Value 1' },
  { id: 2, name: 'Item 2', value: 'Value 2' },
  // Add more data as needed
];

// Define your column definitions for the Inputs tab
const columns = [
  // Example columns
  { dataField: 'id', text: 'ID' },
  { dataField: 'name', text: 'Name' },
  { dataField: 'value', text: 'Value' },
  // Add more columns as needed
];

const Output: React.FC = () => {
  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={data}
      columns={columns}
    />
  );
};

export default Output;