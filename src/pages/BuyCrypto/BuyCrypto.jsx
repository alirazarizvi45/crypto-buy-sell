import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Grid,
  Rating,
  Container,
} from '@mui/material'
import { styled } from '@mui/system'
import MainButton from '../../components/CommonButton'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined'

const CenteredCardActions = styled(CardActions)({
  display: 'flex',
  justifyContent: 'center',
})

const StyledContainer = styled('div')({
  padding: '24px',
})

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '15px',
  borderTop: '1px solid #74f511',
  borderBottom: '1px solid #74f511',
})

const StyledCardContent = styled(CardContent)({
  flex: 1,
  backgroundColor: ' #111B1F',
  position: 'relative',
})

const BuyCrypto = () => {
  return (
    <Container
      maxWidth='lg'
      sx={{
        paddingTop: '100px',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <StyledCard>
            <StyledCardContent>
              <CardMedia
                component='img'
                image='public/formkit_bitcoin.png'
                sx={{
                  borderRadius: '50px',
                  width: '70px',
                  flexDirection: 'row',
                  position: 'absolute',
                  right: '7%',
                  top: '13%',
                }}
              />
              <Box
                sx={{
                  background: '#ABE900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px', // Add padding for spacing
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '13.23px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '17.07px',
                    wordWrap: 'break-word',
                  }}
                >
                  Limited Time
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '22.69px',
                    fontFamily: 'Inter',
                    fontWeight: 800,
                    wordWrap: 'break-word',
                    justifyContent: 'flex-end',
                  }}
                >
                  $3.879
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                <CardMedia
                  component='img'
                  image='./public/profile.webp'
                  sx={{
                    borderRadius: '500px',
                    width: '40px',
                    flexDirection: 'row',
                  }}
                />
                <Box
                  sx={{
                    marginLeft: '10px',
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h5'
                    color='white'
                    sx={{ marginLeft: '20px' }}
                  >
                    JUAN PEREZ
                  </Typography>
                  <Rating
                    name='user-rating'
                    value={5}
                    readOnly
                    sx={{ size: 'xs' }}
                  />
                </Box>
              </Box>
              <Typography variant='body2' color='#00A42E'>
                <FiberManualRecordIcon
                  sx={{ marginTop: '5px', fontSize: 'small', color: '#00A42E' }}
                />{' '}
                Online
              </Typography>
              <Box sx={{ marginBottom: 0 }}>
                <Box
                  sx={{
                    height: '60px',
                    marginTop: '20px',
                    display: 'flex',
                    marginBottom: '2%',
                  }}
                >
                  {/* Box with Data 1 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '5px',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      1 hour <br />
                      <span style={{ color: 'white', fontSize: '8px' }}>
                        Transaction time
                      </span>
                    </Typography>
                  </Box>

                  {/* Box with Data 2 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <GppGoodOutlinedIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      99% <br />
                      <span style={{ color: 'white', fontSize: '10px' }}>
                        Secure
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '.8rem',
                    padding: '6px',
                    marginLeft: '5%',
                  }}
                >
                  Payment Method
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    marginLeft: '6%',
                    font: 'bold',
                    marginBottom: '10%',
                  }}
                >
                  Bancolombia
                  <span
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      marginLeft: '17%',
                    }}
                  >
                    NEQUI
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2%',
                  marginBottom: '4%',
                }}
              >
                <Typography sx={{ color: '#00E909' }}>+180%</Typography>
                <CardMedia
                  component='img'
                  image='./public/Group 1000008936.png'
                  sx={{
                    width: '100%',
                    flexDirection: 'row',
                  }}
                />
              </Box>

              <Typography
                sx={{ textAlign: 'center' }}
                variant='body2'
                color='white'
              >
                Limits: $1.00 - $100.00
              </Typography>
              <CenteredCardActions>
                <MainButton
                  size='md'
                  sx={{
                    backgroundColor: '#ABE900',
                    padding: '10px 60px',
                    color: 'black',
                    '&:hover': {
                      color: 'white',
                      border: '1px solid #ABE900',
                    },
                  }}
                  loadingPosition='end'
                  endIcon={<span></span>}
                >
                  Exchange
                </MainButton>
              </CenteredCardActions>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={3}>
          <StyledCard>
            <StyledCardContent>
              <CardMedia
                component='img'
                image='public/formkit_bitcoin.png'
                sx={{
                  borderRadius: '50px',
                  width: '70px',
                  flexDirection: 'row',
                  position: 'absolute',
                  right: '7%',
                  top: '13%',
                }}
              />
              <Box
                sx={{
                  background: '#ABE900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px', // Add padding for spacing
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '13.23px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '17.07px',
                    wordWrap: 'break-word',
                  }}
                >
                  Limited Time
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '22.69px',
                    fontFamily: 'Inter',
                    fontWeight: 800,
                    wordWrap: 'break-word',
                    justifyContent: 'flex-end',
                  }}
                >
                  $3.879
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                <CardMedia
                  component='img'
                  image='./public/profile.webp'
                  sx={{
                    borderRadius: '500px',
                    width: '40px',
                    flexDirection: 'row',
                  }}
                />
                <Box
                  sx={{
                    marginLeft: '10px',
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h5'
                    color='white'
                    sx={{ marginLeft: '20px' }}
                  >
                    JUAN PEREZ
                  </Typography>
                  <Rating
                    name='user-rating'
                    value={5}
                    readOnly
                    sx={{ size: 'xs' }}
                  />
                </Box>
              </Box>
              <Typography variant='body2' color='#00A42E'>
                <FiberManualRecordIcon
                  sx={{ marginTop: '5px', fontSize: 'small', color: '#00A42E' }}
                />{' '}
                Online
              </Typography>
              <Box sx={{ marginBottom: 0 }}>
                <Box
                  sx={{
                    height: '60px',
                    marginTop: '20px',
                    display: 'flex',
                    marginBottom: '2%',
                  }}
                >
                  {/* Box with Data 1 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '5px',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      1 hour <br />
                      <span style={{ color: 'white', fontSize: '8px' }}>
                        Transaction time
                      </span>
                    </Typography>
                  </Box>

                  {/* Box with Data 2 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <GppGoodOutlinedIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      99% <br />
                      <span style={{ color: 'white', fontSize: '10px' }}>
                        Secure
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '.8rem',
                    padding: '6px',
                    marginLeft: '5%',
                  }}
                >
                  Payment Method
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    marginLeft: '6%',
                    font: 'bold',
                    marginBottom: '10%',
                  }}
                >
                  Bancolombia
                  <span
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      marginLeft: '17%',
                    }}
                  >
                    NEQUI
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2%',
                  marginBottom: '4%',
                }}
              >
                <Typography sx={{ color: '#00E909' }}>+180%</Typography>
                <CardMedia
                  component='img'
                  image='./public/Group 1000008936.png'
                  sx={{
                    width: '100%',
                    flexDirection: 'row',
                  }}
                />
              </Box>

              <Typography
                sx={{ textAlign: 'center' }}
                variant='body2'
                color='white'
              >
                Limits: $1.00 - $100.00
              </Typography>
              <CenteredCardActions>
                <MainButton
                  size='md'
                  sx={{
                    backgroundColor: '#ABE900',
                    padding: '10px 60px',
                    color: 'black',
                    '&:hover': {
                      color: 'white',
                      border: '1px solid #ABE900',
                    },
                  }}
                  loadingPosition='end'
                  endIcon={<span></span>}
                >
                  Exchange
                </MainButton>
              </CenteredCardActions>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={3}>
          <StyledCard>
            <StyledCardContent>
              <CardMedia
                component='img'
                image='public/formkit_bitcoin.png'
                sx={{
                  borderRadius: '50px',
                  width: '70px',
                  flexDirection: 'row',
                  position: 'absolute',
                  right: '7%',
                  top: '13%',
                }}
              />
              <Box
                sx={{
                  background: '#ABE900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px', // Add padding for spacing
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '13.23px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '17.07px',
                    wordWrap: 'break-word',
                  }}
                >
                  Limited Time
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '22.69px',
                    fontFamily: 'Inter',
                    fontWeight: 800,
                    wordWrap: 'break-word',
                    justifyContent: 'flex-end',
                  }}
                >
                  $3.879
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                <CardMedia
                  component='img'
                  image='./public/profile.webp'
                  sx={{
                    borderRadius: '500px',
                    width: '40px',
                    flexDirection: 'row',
                  }}
                />
                <Box
                  sx={{
                    marginLeft: '10px',
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h5'
                    color='white'
                    sx={{ marginLeft: '20px' }}
                  >
                    JUAN PEREZ
                  </Typography>
                  <Rating
                    name='user-rating'
                    value={5}
                    readOnly
                    sx={{ size: 'xs' }}
                  />
                </Box>
              </Box>
              <Typography variant='body2' color='#00A42E'>
                <FiberManualRecordIcon
                  sx={{ marginTop: '5px', fontSize: 'small', color: '#00A42E' }}
                />{' '}
                Online
              </Typography>
              <Box sx={{ marginBottom: 0 }}>
                <Box
                  sx={{
                    height: '60px',
                    marginTop: '20px',
                    display: 'flex',
                    marginBottom: '2%',
                  }}
                >
                  {/* Box with Data 1 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '5px',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      1 hour <br />
                      <span style={{ color: 'white', fontSize: '8px' }}>
                        Transaction time
                      </span>
                    </Typography>
                  </Box>

                  {/* Box with Data 2 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <GppGoodOutlinedIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      99% <br />
                      <span style={{ color: 'white', fontSize: '10px' }}>
                        Secure
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '.8rem',
                    padding: '6px',
                    marginLeft: '5%',
                  }}
                >
                  Payment Method
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    marginLeft: '6%',
                    font: 'bold',
                    marginBottom: '10%',
                  }}
                >
                  Bancolombia
                  <span
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      marginLeft: '17%',
                    }}
                  >
                    NEQUI
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2%',
                  marginBottom: '4%',
                }}
              >
                <Typography sx={{ color: '#00E909' }}>+180%</Typography>
                <CardMedia
                  component='img'
                  image='./public/Group 1000008936.png'
                  sx={{
                    width: '100%',
                    flexDirection: 'row',
                  }}
                />
              </Box>

              <Typography
                sx={{ textAlign: 'center' }}
                variant='body2'
                color='white'
              >
                Limits: $1.00 - $100.00
              </Typography>
              <CenteredCardActions>
                <MainButton
                  size='md'
                  sx={{
                    backgroundColor: '#ABE900',
                    padding: '10px 60px',
                    color: 'black',
                    '&:hover': {
                      color: 'white',
                      border: '1px solid #ABE900',
                    },
                  }}
                  loadingPosition='end'
                  endIcon={<span></span>}
                >
                  Exchange
                </MainButton>
              </CenteredCardActions>
            </StyledCardContent>
          </StyledCard>
        </Grid>
        <Grid item xs={12} md={3}>
          <StyledCard>
            <StyledCardContent>
              <CardMedia
                component='img'
                image='public/formkit_bitcoin.png'
                sx={{
                  borderRadius: '50px',
                  width: '70px',
                  flexDirection: 'row',
                  position: 'absolute',
                  right: '7%',
                  top: '13%',
                }}
              />
              <Box
                sx={{
                  background: '#ABE900',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px', // Add padding for spacing
                }}
              >
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '13.23px',
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    lineHeight: '17.07px',
                    wordWrap: 'break-word',
                  }}
                >
                  Limited Time
                </Typography>
                <Typography
                  variant='body1'
                  sx={{
                    color: '#070C0E',
                    fontSize: '22.69px',
                    fontFamily: 'Inter',
                    fontWeight: 800,
                    wordWrap: 'break-word',
                    justifyContent: 'flex-end',
                  }}
                >
                  $3.879
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginTop: '20px',
                  marginBottom: '10px',
                }}
              >
                <CardMedia
                  component='img'
                  image='./public/profile.webp'
                  sx={{
                    borderRadius: '500px',
                    width: '40px',
                    flexDirection: 'row',
                  }}
                />
                <Box
                  sx={{
                    marginLeft: '10px',
                    marginTop: '10px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant='h5'
                    color='white'
                    sx={{ marginLeft: '20px' }}
                  >
                    JUAN PEREZ
                  </Typography>
                  <Rating
                    name='user-rating'
                    value={5}
                    readOnly
                    sx={{ size: 'xs' }}
                  />
                </Box>
              </Box>
              <Typography variant='body2' color='#00A42E'>
                <FiberManualRecordIcon
                  sx={{ marginTop: '5px', fontSize: 'small', color: '#00A42E' }}
                />{' '}
                Online
              </Typography>
              <Box sx={{ marginBottom: 0 }}>
                <Box
                  sx={{
                    height: '60px',
                    marginTop: '20px',
                    display: 'flex',
                    marginBottom: '2%',
                  }}
                >
                  {/* Box with Data 1 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                      marginRight: '5px',
                    }}
                  >
                    <AccessTimeIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      1 hour <br />
                      <span style={{ color: 'white', fontSize: '8px' }}>
                        Transaction time
                      </span>
                    </Typography>
                  </Box>

                  {/* Box with Data 2 */}
                  <Box
                    sx={{
                      backgroundColor: 'black',
                      flex: 1,
                      borderRadius: '5px',
                      padding: '5px',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <GppGoodOutlinedIcon sx={{ color: 'white' }} />
                    <Typography
                      variant='body1'
                      sx={{ color: '#ABE900', marginLeft: '5px' }}
                    >
                      99% <br />
                      <span style={{ color: 'white', fontSize: '10px' }}>
                        Secure
                      </span>
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  backgroundColor: 'black',
                  borderRadius: '5px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '.8rem',
                    padding: '6px',
                    marginLeft: '5%',
                  }}
                >
                  Payment Method
                </Typography>
                <Typography
                  sx={{
                    fontSize: '1.2rem',
                    marginLeft: '6%',
                    font: 'bold',
                    marginBottom: '10%',
                  }}
                >
                  Bancolombia
                  <span
                    style={{
                      color: 'white',
                      fontSize: '16px',
                      marginLeft: '17%',
                    }}
                  >
                    NEQUI
                  </span>
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: '2%',
                  marginBottom: '4%',
                }}
              >
                <Typography sx={{ color: '#00E909' }}>+180%</Typography>
                <CardMedia
                  component='img'
                  image='./public/Group 1000008936.png'
                  sx={{
                    width: '100%',
                    flexDirection: 'row',
                  }}
                />
              </Box>

              <Typography
                sx={{ textAlign: 'center' }}
                variant='body2'
                color='white'
              >
                Limits: $1.00 - $100.00
              </Typography>
              <CenteredCardActions>
                <MainButton
                  size='md'
                  sx={{
                    backgroundColor: '#ABE900',
                    padding: '10px 60px',
                    color: 'black',
                    '&:hover': {
                      color: 'white',
                      border: '1px solid #ABE900',
                    },
                  }}
                  loadingPosition='end'
                  endIcon={<span></span>}
                >
                  Exchange
                </MainButton>
              </CenteredCardActions>
            </StyledCardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Container>
  )
}

export default BuyCrypto
