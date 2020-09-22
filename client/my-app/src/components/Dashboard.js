import React, { useEffect, useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {  getAlertOnTime} from '../../src/actions/alertdb';
import {Pie, Doughnut,Bar} from 'react-chartjs-2';


const Dashboard = ({ getAlertOnTime, alert }) => {
    useEffect(() => {
      getAlertOnTime();
      }, []);

const containerstyle = {
  display: 'flex',
 
  justifyContent:'center'
}

      const mystyle = {
        backgroundColor: 'black',
        margin: '10',
        padding: '20',
        fontSize: '30'
    };

    const Header = {
      padding: "10px 20px",
      textAlign: "center",
      color: "#B10DC9",
      fontSize: "26px",
      backgroundColor:'black'
    }
      
    

    let logData = alert;

    function breakIntoSegments(logData) {
      return logData.split('\n');
  }


  function getAttributesValueCount(logData, attr) {
    const countObj = {};
    logData.forEach(fullLog => {
        const _logData = fullLog.full_log;
        const segments = breakIntoSegments(_logData);
      //  console.log('segments', segments);
        getDifferentValuesForAttributes(
            segments,
            attr,
            countObj
        );
    });
    console.log('countObj',countObj);
    return countObj;
}

function getDifferentValuesForAttributes(segments, attribute, countObj) {
  const _attr = `${attribute}:`;
  segments.forEach(elem => {
      if (elem.indexOf(_attr) >= 0) {
          let [attribute, attributeValue] = elem.split(`${_attr} `);
          if (!countObj.hasOwnProperty(attributeValue)) {
              countObj[attributeValue.trim()] = 1;
          } else {
              countObj[attributeValue.trim()]++;
          }
      }
  });
};


function getIntegerityCount(logData){
  return getAttributesValueCount(logData,'vulnerability.cvss.cvss2.vector.integrity_impact');
}

function getAuthenticationCount(logData) {
  return getAttributesValueCount(logData,'vulnerability.cvss.cvss2.vector.authentication');
}

function getComplexityCount(logData) {
  return getAttributesValueCount(logData,'vulnerability.cvss.cvss2.vector.access_complexity');
}

function getConfidentialityCount(logData){
  return getAttributesValueCount(logData,'vulnerability.cvss.cvss2.vector.confidentiality_impact');
}

function getSeverityCount(logData){
  return getAttributesValueCount(logData,'vulnerability.severity');
}

function getAvailibiltyCount(logData){
  return getAttributesValueCount(logData,'vulnerability.cvss.cvss3.vector.availability');
}

function getStateCount(logData){
  return getAttributesValueCount(logData,'vulnerability.state');
}

function getPackageCount(logData){
  return getAttributesValueCount(logData,'vulnerability.package.name');
}


let countAuth = getAuthenticationCount(logData);
let countObj = getIntegerityCount(logData);
let countComplex = getComplexityCount(logData);
let countConfid = getConfidentialityCount(logData);
let countSeverity = getSeverityCount(logData);
let Availibilty =  getAvailibiltyCount(logData);
let State = getStateCount(logData);
let packageVul = getPackageCount(logData);




const statepieAuth = {
  labels: Object.keys(countAuth),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(countAuth)}
  ]
}

const statepie = {
  labels: Object.keys(countObj),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(countObj)
    }
  ]
}

const statepieComplex = {
  labels: Object.keys(countComplex),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(countComplex)
    }
  ]
}


const statepieConfid = {
  labels: Object.keys(countConfid ),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(countConfid )
    }
  ]
}


const statepieSever = {
  labels: Object.keys(countSeverity),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(countSeverity)
    }
  ]
}

const statepieAvailibilty = {
  labels: Object.keys(Availibilty),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(Availibilty)}
  ]
}


const statepieState  = {
  labels: Object.keys(State),
  datasets: [
    {
      label: 'Rainfall',
      backgroundColor: [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
      '#501800',
      '#4B5000',
      '#175000',
      '#003350',
      '#35014F'
      ],
      data: Object.values(State)}
  ]
}


const stateBarComplex = {
  labels: Object.keys(countComplex),
  datasets: [
    {
      label: 'Vulneribility',
      backgroundColor:  [
        '#B21F00',
        '#C9DE00',
        '#2FDE00',
        '#00A6B4',
        '#6800B4'
      ],
      hoverBackgroundColor: [
        '#501800',
        '#4B5000',
        '#175000',
        '#003350',
        '#35014F'
        ],
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: Object.values(countComplex)
    }
  ]
}

const stateBarPackage = {
  labels: Object.keys(packageVul),
  datasets: [
    {
      label: 'Vulneribility',
      backgroundColor:'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: Object.values(packageVul)
    }
  ]
}


function hello ( ) {
  console.log('working')
}



    // console.log(checkingstate);
  //   const valuesneeded = ['vulnerability', 'cve', 'title', 'severity'];

  //   let chartvalues = valuesneeded.reduce((object, eachvalue) => {
  //     return (object || {})[eachvalue]; // Oliver Steele's pattern
  // }, checkingstate[0])

  // console.log('chartvalues=>', chartvalues);

  // var prop = checkingstate[0]['vulnerability'];
  // console.log(prop);

  // var prop = JSON.parse(checkingstate[0]);
  // console.log(prop);

  //console.log("full_log " in checkingstate[0]);

    return (
          <div style={Header}>Vulneribilities Dashboard
        <div style={containerstyle}>
          <div style={mystyle}>
            <Doughnut onElementsClick={hello}
          data={statepie}
          options={{
            title:{
              display:true,
              text:'Integrity_impact',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        


<div style={mystyle}>

            <Pie
          data={statepieAuth}
          options={{
            title:{
              display:true,
              text:'Authentication Vulneribility',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        </div>
<div style={containerstyle}>
<div style={mystyle}>
            <Doughnut
          data={statepieComplex}
          options={{
            title:{
              display:true,
              text:'Complexity Vulneribility',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>


<div style={mystyle}>
            <Pie
          data={statepieConfid}
          options={{
            title:{
              display:true,
              text:'Confidentiality Vulneribility',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        </div>

        <div style={containerstyle}>
<div style={mystyle}>
            <Doughnut
          data={statepieAvailibilty}
          options={{
            title:{
              display:true,
              text:'Availibilty Vulneribilty ',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>
        <div style={mystyle}>
            <Pie
          data={statepieState}
          options={{
            title:{
              display:true,
              text:'State of Vulneribilty',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
        </div>

        
          

        </div>
<div style={containerstyle}>
        <div style={mystyle} >
        <Bar
          data={stateBarComplex}
          options={{
            title:{
              display:true,
              text:'Access_complexity',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>

     
      </div>
      <div style={mystyle} >
        <Bar
          data={stateBarPackage}
          options={{
            title:{
              display:true,
              text:'Packages Vulneribilty',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
          
          </div>
      );
            };


            Dashboard.propTypes = {
                getAlertOnTime: PropTypes.func.isRequired,
                alert: PropTypes.object.isRequired,
                
              };
              
              const mapStateToProps = state => ({
                alert: state.alertreducer.alert
                
              });
              
              export default connect(mapStateToProps, { getAlertOnTime})(
                Dashboard
              );
              