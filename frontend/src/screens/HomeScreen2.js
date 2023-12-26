import Cards from '../components/Cards';
import {Productsnew} from '../components/Productsnew';
import React from 'react';


class HomeScreen2 extends React.Component {
  state = {
    data: {},
    country: '',
  }



  render() {
    const { data, country } = this.state;

    return (
      <div className="aaa">
        <Cards />
        <Productsnew/>
      </div>
    );
  }
}


export default HomeScreen2;
