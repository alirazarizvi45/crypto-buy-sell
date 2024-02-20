import { Box, Container, useTheme } from "@mui/material";

import StepOne from "./stepers/StepOne";
import StepTwo from "./stepers/StepTwo";
import StepThree from "./stepers/StepThree";
import StepFour from "./stepers/StepFour";
import StepFive from "./stepers/StepFive";
// import StepOne from "./stepers/StepOne";
import { Stepper, Step, StepButton, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Done } from "@mui/icons-material";

const Steps = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const steps = [
    <StepOne />,
    <StepTwo />,
    <StepThree />,
    <StepFour />,
    <StepFive />,
  ];
  return (
    <Box sx={{ 
      // background: theme.palette.background.default,
     pt: "150px" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            // background: "#111B1F",
            border: "0.4px solid rgba(140, 140, 140, 0.40)",
            boxShadow: "0px 2px 9px 0px rgba(151, 151, 151, 0.19)",
            borderRadius: "20px",
            padding: "20px",
          }}
        >
          <div>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step key={label}>
                  <StepButton
                    onClick={handleStep(index)}
                    icon={
                      activeStep === index ? (
                        <Done 
                        style={{ color: "#4CAF50" }} 
                        />
                      ) : (
                        ""
                      )
                    }
                  />
                </Step>
              ))}
            </Stepper>
            <div>
              <Typography>{steps[activeStep]}</Typography>
              <Box
                mt={4}
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Button disabled={activeStep === 0} onClick={handleBack}>
                  Back
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? "Finish" : "Next"}
                </Button>
              </Box>
            </div>
          </div>
        </Box>
      </Container>
    </Box>
  );
};

export default Steps;
