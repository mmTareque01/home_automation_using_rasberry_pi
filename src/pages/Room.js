import { Container } from '@mui/system'
import React from 'react'
import { styled } from '@mui/material/styles';
import { Divider, Grid, Toolbar, Typography } from '@mui/material';
import CustomizedSwitches from '../components/switch';
import { CONTROLLER } from '../api';

const RoomWrapper = styled('div')((props) => ({
    width: '500px',
    height: '100vh',
    backgroundColor: '#e1e6e752',
    margin: 'auto',
    boxShadow: '5px 5px 36px 28px #cacbcb52'
}));

export default function Room() {
    const [user, setUser] = React.useState({
        name: "Tareque",
        room: "Tareque's Room",
        email: "tareque@gmail.com"
    })
    const [commonSwitches, setCommonSwitches] = React.useState({
        mainDoor: false,
        refrigerator: false,
        television: false,
        waterPump: false,
    });

    const [switches, setSwitches] = React.useState({
        door: false,
        windows: false,
        light: false,
        fan: false,
        ac: false,
    });

    const handleDevice = (data)=>{
        CONTROLLER(data)
        .then(res=>{
            console.log(res.data)
        })
        .catch(e=>{
            console.log(e)
        })
    }

    const handleCommonSwitch = (event, value) => {
        setCommonSwitches({
            ...commonSwitches,
            [event.target.name]: value
        })
        handleDevice(
            {
                device:event.target.name,
                room: user.room,
                status: value
            }
        )
    }

    const handleSwitch = (event, value) => {
        setSwitches({
            ...switches,
            [event.target.name]: value
        })
    }


    React.useEffect(()=>{
        
    },[])

  

    return (
        <RoomWrapper>
            <Container>
                <Typography
                    fontWeight={900}
                    paddingTop="15px"
                >
                    Home Automation Using Raspberry Pi
                </Typography>
                <Divider />
                <Toolbar />

                <Typography
                    textAlign='left'
                    fontWeight={700}
                    paddingTop="15px"
                >
                    Logged In as: {user.name}
                </Typography>

                <Typography
                    textAlign='left'
                    paddingTop="15px"
                >
                    Room name : {user.room}
                </Typography>

                <Typography
                    textAlign='left'
                    paddingTop="15px"
                    paddingBottom='25px'
                >
                    Email: {user.email}
                </Typography>
                <Divider />

                <Typography
                    textAlign='left'
                    paddingTop="15px"
                    fontWeight={700}
                >
                    Common Devices:
                </Typography>

                {/* switches */}

                <Grid container >

                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Main Door:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="mainDoor" status={commonSwitches.mainDoor} controller={handleCommonSwitch} />
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Refrigerator:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="refrigerator" status={commonSwitches.refrigerator} controller={handleCommonSwitch} />
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Water Pump:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="waterPump" status={commonSwitches.waterPump} controller={handleCommonSwitch} />
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Television:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="television" status={commonSwitches.television} controller={handleCommonSwitch} />
                    </Grid>
                </Grid>
        <Toolbar/>

                <Divider />
                <Typography
                    textAlign='left'
                    paddingTop="15px"
                    fontWeight={700}
                >
                    Tareque's Room Devices:
                </Typography>


                <Grid container>

                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                             Door:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="door" status={switches.door} controller={handleSwitch} />
                    </Grid>


                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                           Windows:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="windows" status={switches.windows} controller={handleSwitch} />
                    </Grid>



                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Light:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="light" status={switches.light} controller={handleSwitch} />
                    </Grid>


                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            Fan:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="fan" status={switches.fan} controller={handleSwitch} />
                    </Grid>


                    <Grid paddingTop={1} item xs={6}>
                        <Typography
                            textAlign='left'
                            fontWeight={100}
                        >
                            AC:
                        </Typography>
                    </Grid>

                    <Grid paddingTop={1} item xs={6}>
                        <CustomizedSwitches name="ac" status={switches.ac} controller={handleSwitch} />
                    </Grid>
                </Grid>
            </Container>
        </RoomWrapper>
    )
}
