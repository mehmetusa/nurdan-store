import Dashboard from '../components/dashboards/dashboard';

import React from 'react';


class AdminScreen extends React.Component {
  state = {
    data: {},
    country: '',
  }



  render(props) {
    const { data, country } = this.state;

    return (
      <div className="aaa">
        <Dashboard history= {this.props.history}/>
      </div>
    );
  }
}


export default AdminScreen;