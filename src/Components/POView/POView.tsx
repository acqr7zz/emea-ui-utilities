import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import styles from './Main.module.css';
import Input from '../Inputs/Input';
import Output from '../Outputs/Output';
import Time from '../Time/Time';
import { ShowPODataInputsDef } from '../../Models/PODataModel';

const Main: React.FC = () => {

const poData: ShowPODataInputsDef = window.POData;

  // Use poData in your component
  console.log("React POData" , poData.POData.PODetails);

  return (
    <div className={styles.mainContainer}>
      <Tabs defaultActiveKey="inputs" id="main-tabs" className="mb-3">
        <Tab eventKey="inputs" title="Inputs">
          <Input />
        </Tab>
        <Tab eventKey="outputs" title="Outputs">
          <Output />
        </Tab>
        <Tab eventKey="time" title="Time">
          <Time />
        </Tab>
      </Tabs>
    </div>
  );
};

export default Main;