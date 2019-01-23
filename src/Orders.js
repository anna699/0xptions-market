import React, { Component } from 'react';
import {ButtonGroup, ButtonToolbar, ToggleButtonGroup} from 'react-bootstrap';
import { Jumbotron, Table, Button} from 'react-bootstrap';
import { FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import ToggleButton from 'react-toggle-button'
import './App.css';

const borderRadiusStyle = { borderRadius: 2 }


class OrderPage extends Component {

state={
  value:'ture',
}

  render() {
    return (

      <div className="grid-container">
        <div className="a">

            <div id='topa'>

                  <span id='top'>Order Form</span>
                  <div className="tog">

                  <label class="slide-btn-alt">
   <input type="checkbox"/>
   <span class="slide-btn-content" data-off="Off" data-on="On"></span>
 </label>
                   </div>
            </div>

            <div className='h'>
             <button className="onoff">BUY</button>
             <button  className="onoff">SELL</button>
            </div>
            <hr/>



<div className="l">

<form className='form1'>
<label for="fname">Amount</label>
<input type="text" id="fname" name="fname" value="0"/>

<label for="lname">Price</label>
<input type="text" id="lname" name="lname" value="0"/>
</form>

</div>
<div className="p">

<span><span className="disc">Value:</span><span className="info1"></span><span className="disc2">USA</span></span>
<br/>
<span><span className="disc">Fee:</span><span className="info2"></span><span className="disc2">USA</span></span>
<br/>
<span><span className="disc">Total:</span><span className="info3"></span><span className="disc2">USA</span></span>

</div>


<div className="r">
Your Balances
</div>


      <hr/>


        </div>
        <div className="b">


        <div id='topa'>

              <span id='top'>Open Orders</span>

              <ButtonToolbar >
             <ButtonGroup bsSize="xsmall">
               <Button bsStyle="primary">LONG</Button>
               <Button bsStyle="primary">SHORT</Button>
             </ButtonGroup>
           </ButtonToolbar>
        </div>



            <Table className="table">

              <tr>
              <th></th>
               <th>Size</th>
               <th>Price(ETH)</th>
               <th>Value(USD)</th>

             </tr>
             </Table>

        </div>
        <div className="c">



        <div id='topa'>

              <span id='top'>Charts</span>

              <ButtonToolbar >
             <ButtonGroup bsSize="xsmall">
               <Button bsStyle="primary">LONG</Button>
               <Button bsStyle="primary">SHORT</Button>
             </ButtonGroup>
           </ButtonToolbar>
        </div>




        </div>
        <div className="d">
        <div id='topa'>

              <span id='top'>Trade history</span>

              <Table >
                <tr>
                 <th>Size</th>
                 <th>Price(ETH)</th>
                 <th>Value(USD)</th>
                 <th>Time</th>
               </tr>
               </Table>

        </div>
</div>
        <div className="e">


        <div id='topa'>

              <span id='top'>Your Orders <span></span>opens</span>

        </div>



        </div>
      </div>

    );
  }
}

export default OrderPage;
