import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import binance from '../../../assets/binance.png'; 
// import Lineimage from '../../../assets/Lineimage.png'; 
import { Stack, Typography } from '@mui/material';

export default function USTDcard(props) {
  return (

    <Card sx={{ width: "181px", bgcolor:" #111B1F" }}>
      <Stack>
        <CardContent sx={{ textAlign: 'center' }}>
          <Box>
            <img src={binance} alt="binance" />
          </Box>
          <Box >
            <img src={props.src} alt="Lineimage" 
            width="130px"/>
          </Box>
          <Typography variant='p'>USDT</Typography>
          <Stack direction="row" sx={{paddingTop:"20px", paddingLeft:"30px"}} >
    <Typography sx={{color:"#ABE900", marginRight:"2px"}}>$3.917</Typography>
    <Typography>{props.title}</Typography>
</Stack>

        </CardContent>
      </Stack>
    </Card>
  );
}
    