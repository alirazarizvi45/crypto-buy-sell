import React from "react";

import BuyCrypto from "../BuyCrypto/BuyCrypto";
import HorizontalLinearAlternativeLabelStepper from "./Steppers";
import DropdownMenus from "./DropdownMenu";
import Sellcard from "./sellCard";
import Dashbord2 from "./Dashbord2/Dashbord2";






// import CustomizedSteppers from "./CustomizedSteppers";

const Dashoboard = ({mode}) => {
  return (
    <>
   
     <HorizontalLinearAlternativeLabelStepper/>
<DropdownMenus/>
  
      <BuyCrypto mode={mode} />
<Sellcard/>
<Dashbord2/>

    </>
  );
};

export default Dashoboard;
