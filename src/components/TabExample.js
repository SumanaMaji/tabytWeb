import React, {useState, useEffect, createRef} from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

//import Sonnet from '../../components/Sonnet';

function TabExample() {
//   return (
//     <Tabs
//       defaultActiveKey="profile"
//       id="fill-tab-example"
//       className="mb-3"
//       fill
//     >
//       <Tab eventKey="home" title="Home">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="profile" title="Profile">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="longer-tab" title="Loooonger Tab">
//         <Sonnet />
//       </Tab>
//       <Tab eventKey="contact" title="Contact" disabled>
//         <Sonnet />
//       </Tab>
//     </Tabs>
//   );
return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      <h4>React-Bootstrap Tab Component</h4>
      <Tabs defaultActiveKey="second">
        <Tab eventKey="first" title="Dashboard">
          Hii, I am 1st tab content
        </Tab>
        <Tab eventKey="second" title="Setting">
          Hii, I am 2nd tab content
        </Tab>
        <Tab eventKey="third" title="Aboutus">
          Hii, I am 3rd tab content
        </Tab>
      </Tabs>
    </div>
  );
}

export default TabExample;