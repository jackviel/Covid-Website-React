import React from 'react';

import { Cards, Chart, Table } from './components';
import styles from './App.module.css';
import { fetchData } from './api';

class App extends React.Component {
    state = {
        data: {},
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <h1>Corona Data</h1>
        <Cards data={data} />
        <Chart data={data}/> 
        <Table></Table>
        <h1>Data last updated on: {new Date(data.lastUpdate).toLocaleDateString()} </h1>
      </div>
    );
  }
}

export default App;