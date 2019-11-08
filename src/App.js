import { MainLayout } from 'components/Layout';
import React from 'react';
import { BrowserRouter, Redirect, Switch } from 'react-router-dom';
import './styles/style.scss';
import {  NumberWidget } from 'components/Widget';

import {
  // Badge,
  // Button,
  // Card,
  // CardBody,
  // CardDeck,
  // CardGroup,
  // CardHeader,
  // CardTitle,
  Col,
  // ListGroup,
  // ListGroupItem,
  Row,
} from 'reactstrap';
// import { Bar, Line } from 'react-chartjs-2';
// import {
//   MdBubbleChart,
//   MdInsertChart,
//   MdPersonPin,
//   MdPieChart,
//   MdRateReview,
//   MdShare,
//   MdShowChart,
//   MdThumbUp,
// } from 'react-icons/md';

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
  }

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
                    <button type="button" className="btn btn-default">Calender</button>
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
