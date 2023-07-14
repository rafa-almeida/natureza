import React from 'react';
import Carousel from 'react-material-ui-carousel'
import  { Container, Grid, Box, Typograghy, Chip, Card, CardHeader, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles((theme) => ({
    container: {
        marginTop:'5%',
        width:'50%',
        
    },

    titulo: {
        fontFamily:'Caprasimo',
        display:'flex',
        justifyContent:'center',
        justifyItems:'center',
        marginBottom: '30px',
    },

    grid: {
        display:'flex',
        justifyContent:'center',
        justifyItems:'center',
    },
    
    card: {
        
    },

    CardMedia:{
        paddingTop: '50%',
        width: '500px',
        height: '700px',
        overflow: 'hidden',
    },

    titulo1:{
        fontFamily:'Caprasimo',
        display:'flex',
        justifyContent:'center',
        justifyItems:'center',
        marginTop: '150px',
    }
   

  }))


 function Gallery() {
const classes = useStyles()
return (

   
    <Container maxWidth="lg" className= {classes.container}>
        <Container className= {classes.titulo}>
            <h1>Ensaio África</h1>
        </Container>
        <Grid container spacing={3} className= {classes.grid}>
            <Grid item xs={8}>
                <Box className= {classes.box} >
                    <Carousel
                        autoplay={false}
                        navButtonsAlwaysVisible='true'
                        navButtonsProps={{          
                            style: {
                               color: 'white',
                                 
                            }
                        }} 
                    >
                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/564x/de/a5/1f/dea51fc77cd4ec9c08a8163b198e32e9.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/564x/37/36/2c/37362c0206418282692a566c9955ab3a.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.dailymail.co.uk/i/pix/2017/11/29/10/46CBDBAD00000578-0-image-a-1_1511951507768.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/85/8f/df/858fdf53e7b4a18af51eda7a35302012.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/e8/f3/ad/e8f3adc23481510c283d71274f9526d5.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/64/d3/67/64d36753cf5566481e5346eabcbc0b17.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/2d/25/45/2d25451a71843c2aac260011d869b05a.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/a9/a0/d0/a9a0d0fafb77c98afc401baa8cfb42a0.jpg"
                            
                        />
                    </Card>

                    <Card className={classes.card}>
                    <CardMedia  
                            className= {classes.CardMedia}
                            image="https://i.pinimg.com/474x/5e/b9/bb/5eb9bb4f5fee56c567af1dd5ce260f1f.jpg"
                            
                        />
                    </Card>

                    
                    
                    </Carousel>
                </Box>
            </Grid>
        </Grid>



        <Container className= {classes.titulo1}>
            <h1>Ensaio Austrália</h1>
        </Container>
        <Grid container spacing={3} className= {classes.grid}>
            <Grid item xs={8}>
                <Box className= {classes.box} >
                    <Carousel
                        autoplay={false}
                        navButtonsAlwaysVisible='true'
                        navButtonsProps={{          
                            style: {
                               color: 'white',
                                 
                            }
                        }} 
                    >
                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2020/01/11/09/58/koala-4757068_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2023/04/02/09/24/rainbow-lorikeet-7894138_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2019/07/03/10/10/wallaby-4314086_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2012/07/08/13/50/horse-51733_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2016/04/26/22/35/coral-1355474_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2015/02/09/21/26/crocodile-630233_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2023/05/27/08/59/eastern-grey-kangaroo-8021096_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2023/04/10/10/28/blue-tongue-skink-7913420_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2020/06/09/22/35/bird-5280272_1280.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://cdn.pixabay.com/photo/2023/05/27/06/58/crimson-rosella-8020885_1280.jpg"
                                
                            />
                        </Card>
                    </Carousel>
                </Box>
            </Grid>
        </Grid>

        <Container className= {classes.titulo1}>
            <h1>Ensaio Brasil</h1>
        </Container>
        <Grid container spacing={3} className= {classes.grid}>
            <Grid item xs={8}>
                <Box className= {classes.box} >
                    <Carousel
                        autoplay={false}
                        navButtonsAlwaysVisible='true'
                        navButtonsProps={{          
                            style: {
                               color: 'white',
                                 
                            }
                        }} 
                    >
                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/66/f8/54/66f854c2a45ee0e5ef0df3e650df350c.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/96/d4/e2/96d4e2d698861ba7bebe4ecd5404d69b.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/36/e0/a8/36e0a8e582e30170842cd451eb3eb5b7.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/d4/a4/d8/d4a4d8838b66f3bdf8c78b05f6b24e9d.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/c6/b0/8c/c6b08ca77d5f7a12edf40b206e471b84.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/a9/7b/57/a97b5704d70a903cc6ee69aeff3764ad.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/22/02/7a/22027a1259885517eb75666b42d2e507.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/07/f9/08/07f908e10c74a2bea3379afb8e46f1c8.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/79/de/94/79de94ca532ed3b5460955e10e8100bb.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/ae/fa/c6/aefac65ed1801004ea9d272ff0dd34f2.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/f2/50/42/f25042d7dd1089a51f2238fc9f5695bd.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/9d/6c/15/9d6c154fe3b68280c613ae876a26accd.jpg"
                                
                            />
                        </Card>

                        <Card className={classes.card}>
                        <CardMedia  
                                className= {classes.CardMedia}
                                image="https://i.pinimg.com/474x/78/3f/5e/783f5e7aa22aea6bc351dd02bfa57f91.jpg"
                                
                            />
                        </Card>

                    </Carousel>
                </Box>
            </Grid>
        </Grid>

    </Container>


    
    

    



)}

export default Gallery;