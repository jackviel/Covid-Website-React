import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

import { fetchCountries } from '../../api';

const countries = fetchCountries();
console.log(countries);

const columns = [
  { field: 'country', headerName: 'Country', width: 280 },
  { field: 'confirmed', headerName: 'Confirmed', width: 280 },
  { field: 'recovered', headerName: 'Recovered', width: 280 },
  { field: 'deaths', headerName: 'Deaths', width: 280 },
  { field: 'deathRate', headerName: 'Death Rate', width: 280 },
  { field: 'recoveryRate', headerName: 'Recovery Rate', width: 280 },
];

const rows = [
    { id: 1, country: 'Test', confirmed: '0', recovered: '0', deaths: 0, deathRate: '0%', recoveryRate: '0%'},
    { id: 2, country: 'Test', confirmed: '0', recovered: '0', deaths: 0, deathRate: '0%', recoveryRate: '0%'},
];

export default function Table() {
  return (
    <div style={{ height: 500, width: 1800}}>
      <DataGrid rows={rows} columns={columns} checkboxSelection={false} disableColumnMenu hideFooter />
    </div>
  );
}
