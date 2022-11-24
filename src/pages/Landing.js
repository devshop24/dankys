import React from "react";

import Button from '@mui/material/Button';
import Divider from "@mui/material/Divider";
import Stack from '@mui/material/Stack';
import Typography from "@mui/material/Typography";

import BannerImage from '../assets/banner.jpg';
import MicroImage from '../assets/micro-demo.png';
import GrowImage from '../assets/grow-demo.png';
import BloomImage from '../assets/bloom-demo.png';
import SugareeImage from '../assets/sugaree-demo.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSeedling, faCannabis, faLightbulb } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {

    return (
        <PageContainer>
            {/* Title Bar */}
            <Stack justifyContent="center" alignItems="center" sx={{height: '100px', py: 1}}>
                <Text component="h4" message="Danky's" sx={{fontSize: '22px', mb: 1, fontWeight: '500'}} />
                <Text component="p" message="Hydroponics Equipment Supplier" sx={{fontSize: '19px', fontWeight: '500'}} />
            </Stack>

            {/* Navigation Bar */}
            <Stack direction="row" justifyContent="center" alignItems="center" sx={{height: '80px', bgcolor: 'info.main', color: '#C0C0C0', borderBottom: '15px solid red', borderColor: 'primary.dark'}}>
                <Text component="p" message="Home" onClick={() => console.log('go home')} sx={{mx: 3, fontWeight: 600, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}, color: 'white'}} />
                <Text component="p" message="Shop" onClick={() => console.log('go shop')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
                <Text component="p" message="Contact" onClick={() => console.log('go contact')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
                <Text component="p" message="FAQ" onClick={() => console.log('go faq')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
                <Text component="p" message="Forum" onClick={() => console.log('go forum')} sx={{mx: 3, fontWeight: 200, fontSize: '17.5px', cursor: 'pointer', '&:hover': {color: 'white'}}} />
            </Stack>

            {/* Banner Image */}
            <Stack sx={{
                backgroundImage: `url(${BannerImage})`,
                backgroundPosition: 'left center',
                backgroundSize: 'cover',
                height: '28em',
                textAlign: 'center',
                position: 'relative',
            }}>
                <Text component="h2" message="Spread Kindess Like Confetti" sx={{
                        fontSize: '48px',
                        color: 'white',
                        letterSpacing: '1.5px',
                        textShadow: '-2px -2px 0 #000, 2px -2px 0 #000, -2px 2px 0 #000, 2px 2px 0 #000', 
                        position: 'absolute',
                        top: '30%',
                        left: '50%',
                        transform: 'translate(-50%, -30%)'
                    }} 
                />

                <Stack 
                    justifyContent="center"
                    alignItems="center"
                    sx={{width: 1, height: '100px', position: 'absolute', bottom: 0, bgcolor: 'rgba(27, 27, 27, 0.75)'}}
                >
                    <Button color="primary" variant="contained" sx={{width: '165px', height: '45px'}}>
                        Learn More
                    </Button>
                </Stack>
            </Stack>

            {/* Overview */}
            <Stack direction="row" justifyContent="space-evenly" sx={{py: 15, px: 10}}>
                    <Stack width="270px" alignItems="center">
                        <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                            <FontAwesomeIcon icon={faSeedling} size="3x" color="white" />
                        </Stack>
                        <Text component="h4" message="Grow" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
                        <Text component="body1" message="We will walk you step by step through the process of creating your very own hydroponic gardening system" align="center" sx={{color: '#474747', opacity: 0.7}} />
                    </Stack>

                    <Stack width="270px" alignItems="center">
                        <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                            <FontAwesomeIcon icon={faCannabis} size="3x" color="white"/>
                        </Stack>
                        <Text component="h4" message="Give" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
                        <Text component="body1" message="We will be offering free grow classes where members can share their knowledge of growing and cultivating herbs and plants for the purpose of bettering the quality of life of our members" align="center" sx={{color: '#474747', opacity: 0.7}} />
                    </Stack>

                    <Stack width="270px" alignItems="center">
                        <Stack sx={{width: '50px', mb: '35px', bgcolor: 'primary.main', p:3, borderRadius: '50%', boxShadow: '0 0 0 7px white, 0 0 0 8px #e0e0e0'}}>
                            <FontAwesomeIcon icon={faLightbulb} size="3x" color="white"/>
                        </Stack>
                        <Text component="h4" message="Supply" align="center" sx={{mt:2, mb: '20px', fontSize: '1.5em'}} />
                        <Text component="body1" message="We are dedicated to providing top notch hydroponic supplies including lights, nutrients, and seeds" align="center" sx={{color: '#474747', opacity: 0.7}} />
                    </Stack>
            </Stack>

            {/* Slogan */}
            <Stack alignItems="center" justifyContent="center" height="265px" sx={{bgcolor: 'info.light'}}>
                    <Text component="h2" message="It's All About The Supplies" align="center" sx={{fontSize: '39px'}} />
                    <Divider variant="middle" sx={{width: 0.8, my: 2.5}} />
                    <Text component="h5" message="Qaulity Product Comes From Quality Equipment" algin="center" sx={{color: '#999999', fontSize: '26px', textAlign: 'center'}} />
            </Stack>

            {/* Product Preview */}
            <Stack sx={{py: 10, px: 14}}>
                <Stack direction="row" justifyContent="space-evenly" sx={{width: 1, mb: 10}}>
                    <Stack direction="row" sx={{width: 1/3}}>
                        <img src={MicroImage} alt="Mirco 6-0-0" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                        <Stack sx={{ml: 4}}>
                            <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Micro 6-0-0™" />
                            <Text sx={{opacity: 0.6}} component="p" message="This is the foundation for the 3-Part formula and is used at the same rate through the entire life cycle of your plants. It contains all of the micronutrients needed for peak health." />
                        </Stack>
                    </Stack>

                    <Stack direction="row" sx={{width: 1/3}}>
                        <img src={GrowImage} alt="Grow 2-1-6" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                        <Stack sx={{ml: 4}}>
                            <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Grow 2-1-6™" />
                            <Text sx={{opacity: 0.6}} component="p" message="This is one of three components that create the complete Cutting Edge Solutions® 3-Part Base family. Grow 2-1-6™ is only uses in the vegetative and transitional stages of plant life." />
                        </Stack>
                    </Stack>
                </Stack>

                <Stack direction="row" justifyContent="space-evenly" sx={{width: 1}}>
                    <Stack direction="row" sx={{width: 1/3}}>
                        <img src={BloomImage} alt="Bloom 0-6-5" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                        <Stack sx={{ml: 4}}>
                            <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Bloom 0-6-5™" />
                            <Text sx={{opacity: 0.6}} component="p" message="Finally we have the last component to the complete Cutting Edge Solutions® 3-Part Base family. Bloom is used for the majority in the flowering stage of life, as well as small amounts in the vegetative stage." />
                        </Stack>
                    </Stack>

                    <Stack direction="row" sx={{width: 1/3}}>
                        <img src={SugareeImage} alt="Sugaree" style={{height: '140px', width: '140px', borderRadius: '8%'}} />
                        <Stack sx={{ml: 4}}>
                            <Text sx={{mb: 1, fontSize: '21px'}} component="h4" message="Sugaree™" />
                            <Text sx={{opacity: 0.6}} component="p" message="Sugaree™ or Sour-Dee™ supercharges your plants ability to solubilize and absorb phosphorus from your medium, increasing yields." />
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            {/* CTA */}
            <Stack direction="row" alignItems="center" justifyContent="center" sx={{boxSizing: 'border-box', width: 1, height: '125px', py: 6.5, bgcolor: 'primary.dark'}}>
                    <Text component="body1" message="Start Growing Today" sx={{mr: 4, color: 'white', fontSize: '30px', fontWeight: 600}} />
                    <Button variant="contained" sx={{mr: 4,height: '50px', width: '150px', fontWeight: 600, color: 'primary.main', bgcolor: 'white', '&:hover': { bgcolor: 'info.light' }}}>Get In Touch</Button>
            </Stack>

            {/* Footer */}
            <Stack justifyContent="space-around" alignItems="space-between" sx={{bgcolor: 'info.light', height: '70vh'}}>
                <Stack direction="row" justifyContent="space-evenly" alignItems="center">
                    <Stack>
                        <Text component="h5" message="Danky's Hydro" sx={{mb: 2, fontWeight: 600}} />
                        <Text component="body1" message="Home" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                        <Text component="body1" message="Shop" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                        <Text component="body1" message="Contact" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                        <Text component="body1" message="FAQ" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                        <Text component="body1" message="Forum" sx={{mb: 2, opacity: 0.6, cursor: 'pointer', '&:hover': { textDecoration: 'underline' }}} />
                    </Stack>

                    <Stack>
                        <Text component="h6" message="Email:" sx={{mb: 0.5, fontWeight: 600}} />
                        <Text component="body1" message="Dankyshydro@gmail.com" sx={{mb: 2, opacity: 0.6}} />
                       
                        <Text component="h6" message="Phone:" sx={{mb: 0.5, fontWeight: 600}} />
                        <Text component="body1" message="276-268-0093" sx={{mb: 2, opacity: 0.6}} />

                        <Text component="h6" message="Address:" sx={{mb: 0.5, fontWeight: 600}} />
                        <Text component="body1" message="120 Spurgeon Lane" sx={{mb: 2, opacity: 0.6}} />
                        <Text component="body1" message="Bristol, Va. 24201" sx={{mb: 2, opacity: 0.6}} />
                    </Stack>

                    <Stack>
                        <p>input</p>
                        <p>input</p>
                        <p>TextArea</p>
                        <Button variant="contained" color="primary">
                            Send Message
                        </Button>
                    </Stack>
                </Stack>
                <Text align="center" component="subtitle2" message="© Untitled. All rights reserved | Design: HTML5 UP | Built By DevShop24" sx={{opacity: 0.6}} />
            </Stack>
        </PageContainer>
    )
}

export default Landing;

const PageContainer = ({children}) => (
    <Stack sx={{ width: 1 }}>
        {children}
    </Stack>
);

const Text = ({ component, message, align, truncate, sx, onClick, className }) => (
    <Typography className={className} variant={component} align={align} onClick={onClick} sx={{ ...sx }}>
        {!Boolean(truncate) ? message : `${message.substring(0, truncate)}...`}
    </Typography>
);