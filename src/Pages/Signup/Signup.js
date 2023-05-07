import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container'
import Firststep from '../../Components/Firststep';
import Secondstep from '../../Components/Secondstep';
import ThirdStep from '../../Components/ThirdStep';
import Fourthstep from '../../Components/Fourthstep';
import { useState } from 'react';

const steps = ['Profile information ', 'Health information', 'Account Verfication','Confirm'];
 export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  
  const[data,setData] = useState({
    firstName: '',
    lastName: '',
    contact: '',
    nicNumber: '',
    dateOfBirth: '',
    location:'',
    weight: '',
    height: '',
    bloodGroup: '',
    healthupdates: '',
    email:'',
    password:'',
    usertype:'',
  })

  const isStepOptional = (step) => {
    return step === 1;
  };
const handleChange =(id) =>(e) => {
  const value = e.target.value;
  setData(prevData => ({...prevData,[id]:value}));
} 

  const handleNext = () => {    
    setActiveStep((prevActiveStep) => prevActiveStep + 1); 
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
  <div className='register-page'>
    <div className='register-box'>
    
    <Container>
      <h2>Create Your Account</h2> 
        <Box sx={{ bgcolor: '#f3f6f8'}} >
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="error"></Typography>
              );
            }
        
            return (
              <Step color="error" key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All Inforamtions Added - you&apos;re finished
              <br></br>
              Thank you for Joining With Us!
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button color="error" onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : ( 
          <React.Fragment>
           
            {activeStep === 0 && (<Firststep handleChange={handleChange} values={data} />)}
            {activeStep === 1 && (<Secondstep handleChange={handleChange} values={data}/>)} 
            {activeStep === 2 && (<ThirdStep handleChange={handleChange} values={data} />)} 
            {activeStep === 3 && (<Fourthstep  handleChange={handleChange} values={data}/>)}
             <Typography sx={{ mt: 2, mb: 1 }}></Typography> 
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="error"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1,display:activeStep === 4? 'none':'inherit' }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              {/* {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Skip
                </Button>
              )} */}
              <Button color="error" onClick={handleNext}  style={activeStep === 4 ? {display:'none'}:{}}>
                {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
      </Container>
      </div>
      </div>
    );
}

