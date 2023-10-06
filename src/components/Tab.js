import React, {useState, useEffect, createRef} from 'react';
import Form1 from "./Form1";
import Form2 from "./Form2";
import TabExample from "./TabExample";
import ModalExample from "./ModalExample";

const Tab = () => {
  return (
    <div className="container">
      <h1>localStorage with React hooks</h1>
      <Form1 />
      <Form2 />
      <TabExample></TabExample>
      <ModalExample></ModalExample>
    </div>
  );
};
export default Tab;