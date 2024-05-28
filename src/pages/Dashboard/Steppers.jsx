import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
  'Verify your Email',
  'Verify your Phone No',
  'Connect your wallet',
  'Become a pioneer',   
];

export default function HorizontalLinearAlternativeLabelStepper() {
  return (
  
    <Box sx={{ width: '100%', marginTop:"100px" }}>
      <Stepper activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  
  );
}
