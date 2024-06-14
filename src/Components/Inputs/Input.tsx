import React from 'react';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import { getPODetails } from '../../Data/GetPOTabData';



// Define your column definitions for the Inputs tab
const columns = [
  // Example columns
  { dataField: 'MaterialNbr', text: 'MaterialNbr' },
  { dataField: 'MaterialDescription', text: 'MaterialDescription' },
  { dataField: 'BatchNbr', text: 'BatchNbr' },
  // Add more columns as needed
];

const Input: React.FC = () => {
  const { data: poDetails, isLoading, error } = getPODetails();


  return (
    <BootstrapTable
      bootstrap4
      keyField="MaterialNbr"
      data={poDetails?.Materials || []}
      columns={columns}
    />
  );
};

export default Input;