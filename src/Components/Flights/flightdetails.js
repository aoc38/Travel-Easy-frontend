import React from 'react';
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import { Link } from "react-router-dom";
import "./flightdetails.css";
function Flightdetails(props) {
    return (
        <div className='container'>
            <Card style={{ margin: 10 }}>
            <CardContent>
                <div className="row">
                  <div className="col-md-12">
                    <div className="title">
                      <span className="fromto">IAH (Houston)</span>
                      {"-"}
                      <span>MAA (Chennai)</span>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className="brdr-btm">
                        <span>Departure</span>{": "}
                        <span>Monday, Nov 21</span>
                        <span>{"("}</span><span>arrives{" wednesday "}, {"Nov"} {"23"}</span><span>{")"}</span>
                        <span style={{float: "right"}}>{"20hr15min"}</span>
                    </div>
                  </div>
                  <div className='col-md-12'>
                    <div className="col-md-2" style={{display: "inline-block"}}>
                        <div className="">{"qatar"}</div>
                        <div>{"Flight 212"}</div>
                        <div>{"Boeing"}-{"332154"}</div>
                    </div>
                    <div className="col-md-4" style={{display: "inline-block"}}>
                        <div className="">{"7:10"}</div>
                        <div>{"Houston"}, {"TX"}</div>
                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                    </div>
                    <div className="col-md-4" style={{display: "inline-block"}}>
                        <div className="">{"7:10"}</div>
                        <div>{"Houston"}, {"TX"}</div>
                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                    </div>
                    <div className="col-md-2" style={{display: "inline-block"}}>
                        <div>{"14hr35m"}</div>
                    </div>
                    
                  </div>
                  <div>Connection in {"Dubai"}, {"United Arab Emirates"}</div>
                  <div className='col-md-12'>
                    <div className="col-md-2" style={{display: "inline-block"}}>
                        <div className="">{"qatar"}</div>
                        <div>{"Flight 212"}</div>
                        <div>{"Boeing"}-{"332154"}</div>
                    </div>
                    <div className="col-md-4" style={{display: "inline-block"}}>
                        <div className="">{"7:10"}</div>
                        <div>{"Houston"}, {"TX"}</div>
                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                    </div>
                    <div className="col-md-4" style={{display: "inline-block"}}>
                        <div className="">{"7:10"}</div>
                        <div>{"Houston"}, {"TX"}</div>
                        <div>{"("} {"IAH"} {")"}-{"George Bush Intercon"}</div>
                    </div>
                    <div className="col-md-2" style={{display: "inline-block"}}>
                        <div>{"14hr35m"}</div>
                    </div>
                    
                  </div>
                  {/* <button className='btn btn-primary'>Book Now</button> */}
                  <Link to="/BookForm" className='btn btn-primary'>Book Now</Link>
                 </div>
            </CardContent>
            </Card>
        </div>
    );
}

export default Flightdetails;