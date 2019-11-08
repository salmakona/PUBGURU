import { MainLayout } from 'components/Layout';
import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/style.scss';
import {  NumberWidget } from 'components/Widget';
import { FormControl, Grid, Row, Col } from 'react-bootstrap';
import moment from 'moment';
import DateTimeRangeContainer from './lib/index';
import { isFirefoxBelow53 } from './lib/utils/BrowserVersion';


const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

// const today = new Date();
// const lastWeek = new Date(
//   today.getFullYear(),
//   today.getMonth(),
//   today.getDate() - 7,
// );

class App extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedOption: "option1"
    };

    let start = moment(new Date(2019, 8, 20, 0, 0, 0, 0));
    let end = moment(start)
      .add(5, 'days')
      .subtract(1, 'second');
    this.state = {
      start: start,
      end: end,
    };

    this.onClick = this.onClick.bind(this);
    this.applyCallback = this.applyCallback.bind(this);
  }


  // datepicker 

  
local = {
  "format":"DD-MM-YYYY HH:mm",
  "sundayFirst" : false
}

applyCallback(startDate, endDate) {
  console.log('Apply Callback');
  console.log(startDate.format('DD-MM-YYYY HH:mm'));
  console.log(endDate.format('DD-MM-YYYY HH:mm'));
  this.setState({
    start: startDate,
    end: endDate,
  });
}

rangeCallback(index, value) {
  console.log(index, value);
}

onClick() {
  let newStart = moment(this.state.start).subtract(3, 'days');
  // console.log("On Click Callback");
  // console.log(newStart.format("DD-MM-YYYY HH:mm"));
  this.setState({ start: newStart });
}

renderVanillaPicker(ranges, local, maxDate) {
  let value = `${this.state.start.format('DD-MM-YYYY HH:mm')} - ${this.state.end.format('DD-MM-YYYY HH:mm')}`;
  let firefoxBelow35 = isFirefoxBelow53();
  let disabled = true;
  if (firefoxBelow35) {
    disabled = false;
  }
  return (
    <div>
      <div onClick={this.onClick}></div>
      <div> </div>
      <br />
      <DateTimeRangeContainer
        ranges={ranges}
        start={this.state.start}
        end={this.state.end}
        local={local}
        maxDate={maxDate}
        applyCallback={this.applyCallback}
        rangeCallback={this.rangeCallback}
        smartMode
      >
        <FormControl
          id="formControlsTextB"
          type="text"
          label="Text"
          placeholder="Enter text"
          style={{ cursor: 'pointer' }}
          disabled={disabled}
          value={value}
        />
      </DateTimeRangeContainer>
      <br />
    </div>
  );
}

  //


  handleOptionChange = changeEvent => {
    this.setState({
      selectedOption: changeEvent.target.value
    });
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    console.log("You have submitted:", this.state.selectedOption);
  };
 
  
  render() {

    // 
    let now = new Date();
    let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
    let end = moment(start)
      .add(1, 'days')
      .subtract(1, 'seconds');
    let ranges = {
      'Today Only': [moment(start), moment(end)],
      'Yesterday Only': [moment(start).subtract(1, 'days'), moment(end).subtract(1, 'days')],
      '3 Days': [moment(start).subtract(3, 'days'), moment(end)],
      '5 Days': [moment(start).subtract(5, 'days'), moment(end)],
      '1 Week': [moment(start).subtract(7, 'days'), moment(end)],
      '2 Weeks': [moment(start).subtract(14, 'days'), moment(end)],
      '1 Month': [moment(start).subtract(1, 'months'), moment(end)],
      '1 Year': [moment(start).subtract(1, 'years'), moment(end)],
    };
    let local = {
      format: 'DD-MM-YYYY HH:mm',
      sundayFirst: false,
    };
    let maxDate = moment(end).add(24, 'hour');
    //

    return (
      <BrowserRouter basename={getBasename()}>
          <Switch>
            <MainLayout breakpoint={this.props.breakpoint}>
              
                <div className="mainDiv">
                    <div className="mainchlidleft">
                      <button type="button" className="btn btn-default">                      GDPR REPORT
</button>

                    </div>
                    <div className="mainchlidright">
                      <div className="clander"></div>
                      <div className="container">
                      {this.renderVanillaPicker(ranges, local, maxDate)}

                    </div>  
                    </div>
                </div>

                <div className="dataDiv">
                  
                <div className="row">
                  <div className="col">
                        <div className="row">
                          <div className="col">
                              </div>
                            <div className="col">
                            <div className="mb-3 card card-body">
                              <button className="btn btn-outline-link btn-sm disabled" size="sm">
                                How to view pubguru dataplayground
                                </button>
                            </div>
                                </div>
                                <div className="col">
                                <div className="mb-3 card card-body">
                              <button className="btn btn-outline-link btn-sm disabled" size="sm">
                              How to view pubguru dataplayground
                                </button>
                            </div>
                                </div>
                                </div>
                                </div>
                                </div>
                               
                 
               
                </div>
            
                <div className="dataDiv">
                <Row>
          <Col lg={3} md={6} sm={6} xs={12}>
          <form onSubmit={this.handleFormSubmit}>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option1"
                    checked={this.state.selectedOption === "option1"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 1
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option2"
                    checked={this.state.selectedOption === "option2"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 2
                </label>
              </div>
              <div className="form-check">
                <label>
                  <input
                    type="radio"
                    name="react-tips"
                    value="option3"
                    checked={this.state.selectedOption === "option3"}
                    onChange={this.handleOptionChange}
                    className="form-check-input"
                  />
                  Option 3
                </label>
              </div>
              <div className="form-group">
                <button className="btn btn-primary mt-2" type="submit">
                  Save
                </button>
              </div>
            </form>
      
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Monthly Visitors"
              subtitle="This month"
              number="5,400"
              color="secondary"
              progress={{
                value: 45,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="New Users"
              subtitle="This month"
              number="3,400"
              color="secondary"
              progress={{
                value: 90,
                label: 'Last month',
              }}
            />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12}>
            <NumberWidget
              title="Bounce Rate"
              subtitle="This month"
              number="38%"
              color="secondary"
              progress={{
                value: 60,
                label: 'Last month',
              }}
            />
          </Col>
        </Row>

                 </div>
            </MainLayout>
            <Redirect to="/" />

          </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
