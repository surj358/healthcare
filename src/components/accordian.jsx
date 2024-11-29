import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { lightBlue } from '@mui/material/colors';

export function Info() {
  
  return (
    <div className='bg-blue-50'>
      <div className=' my-28 p-20 w-[1000px] mx-auto'>

      <Accordion sx={{marginBottom: '10px'}}>
        <AccordionSummary sx={{ background:'lightyellow'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold py-2'>How long do I have to be on the treatment?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className='py-2'>Duration of treatment will vary based on your goals and progress. Study groups were followed for many years. Rebound weight loss was common with shorter duration of treatment.</p> </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: '10px'}}>
        <AccordionSummary sx={{ background:'lightyellow'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold py-2'>How much does this treatment cost?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className='py-2'>Duration of treatment will vary based on your goals and progress. Study groups were followed for many years. Rebound weight loss was common with shorter duration of treatment.</p> </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: '10px'}}>
        <AccordionSummary sx={{ background:'lightyellow'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold py-2'>How long do I have to be on the treatment?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className='py-2'>Duration of treatment will vary based on your goals and progress. Study groups were followed for many years. Rebound weight loss was common with shorter duration of treatment.</p> </AccordionDetails>
      </Accordion>
      <Accordion sx={{marginBottom: '10px'}}>
        <AccordionSummary sx={{ background:'lightyellow'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <h1 className='font-bold py-2'>How long do I have to be on the treatment?</h1>
        </AccordionSummary>
        <AccordionDetails>
          <p className='py-2'>Duration of treatment will vary based on your goals and progress. Study groups were followed for many years. Rebound weight loss was common with shorter duration of treatment.</p> </AccordionDetails>
      </Accordion>

      </div>

      
    </div>
  );
}
