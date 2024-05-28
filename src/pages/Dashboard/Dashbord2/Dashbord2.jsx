import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Container, Stack, Typography } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

// Import images
import binance from '../../../assets/binance.png';
import Lineimage from '../../../assets/Lineimage.png';
import Coinbase from '../../../assets/Coinbase.png';
import Huobi from '../../../assets/Huobi.png';
import BYBT from '../../../assets/BYBT.png';
import CoinDCX from '../../../assets/CoinDCX.png';
import BITTREX from '../../../assets/BITTREX.png';
import FEDAPPROVESCard from './FEDAPPROVESCard';
import swapbtn from "../../convert/assets/swap-btn.png";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DropdownMenu2 from './DropdownMenu2';
import BuyCrypto from '../../BuyCrypto/BuyCrypto';
import Sellcard from '../sellCard';


// Define card data array
const cardData = [
  {
    id: 1,
    image: binance,
    altText: 'binance',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'COP'
  },
  {
    id: 2,
    image: Coinbase,
    altText: 'Coinbase',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 3,
    image: Huobi,
    altText: 'Huobi',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 4,
    image: BYBT,
    altText: 'BYBT',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 5,
    image: CoinDCX,
    altText: 'CoinDCX',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 6,
    image: BITTREX,
    altText: 'BITTREX',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'COP'
  },
  {
    id: 7,
    image: binance,
    altText: 'binance',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'COP'
  },
  {
    id: 2,
    image: Coinbase,
    altText: 'Coinbase',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 3,
    image: Huobi,
    altText: 'Huobi',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 4,
    image: BYBT,
    altText: 'BYBT',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 5,
    image: CoinDCX,
    altText: 'CoinDCX',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'BTC'
  },
  {
    id: 6,
    image: BITTREX,
    altText: 'BITTREX',
    lineImage: Lineimage,
    currency: 'USDT',
    amount: '$3.917',
    unit: 'COP'
  },
];

export default function Dashboard2() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Container maxWidth="lg" sx={{ paddingTop: "50px" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
        sx={{
          alignItems: "center",
          // backgroundColor: '#474747',
          boxShadow: 'none',
          position: 'relative',
          zIndex: 1,
          '& .MuiTabs-scrollButtons': {
            backgroundColor: '#ABE900',
            borderRadius: '100%',
            height: '40px',
       
            '&:hover': {
              backgroundColor: '#474747',
              height: '50px'
            },
          },
        }}
      >
        {cardData.map((card, index) => (
          <Tab key={index} label={
            <Card sx={{ width: "181px", height: "135px", bgcolor: "#111B1F", color: '#fff' }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Box>
                  <img src={card.image} alt={card.altText} width="80%" height="30px" />
                </Box>
                <Box>
                  <img src={card.lineImage} alt="Lineimage" width="130px" />
                </Box>
                <Typography>{card.currency}</Typography>
                <Stack direction="row" sx={{ paddingTop: "3px", paddingLeft: "30px" }}>
                  <Typography sx={{ color: "#ABE900", marginRight: "2px" }}>{card.amount}</Typography>
                  <Typography>{card.unit}</Typography>
                </Stack>
              </CardContent>
            </Card>
          } />
        ))}
      </Tabs>
      <FEDAPPROVESCard/>
    </Container>
   <DropdownMenu2/>
   <BuyCrypto/>
   <Sellcard/>  
    </>
  );
}

