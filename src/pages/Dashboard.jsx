import { Box, Button, Grid, Paper } from "@mui/material";
import React, { useState } from 'react';


export const BoutonFavori = ({ initialFavori = false }) => {
  const [favori, setFavori] = useState(initialFavori);

  const toggleFavori = () => {
    setFavori(!favori);
  };

  return (
    <button
      style={{ backgroundColor: favori ? 'red' : 'transparent', color: 'white' }}
      onClick={toggleFavori}
    >
      {favori ? '❤️' : '🤍'} favoris
    </button>
  );
};



export function CarAnnonce({ image, Titre, description, date }) {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper xs={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        <Grid container spacing={1} style={{ backgroundColor: 'gray' }}>
          <Grid item xs={6} lg={2} style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box display="flex" justifyContent="center" alignItems="center" style={{ width: '100%', height: '100%' }}>
              <img
                alt="profile-user"
                width="100%" // Set width to 100% to make the image responsive
                height="auto" // Allow the height to adjust proportionally
                src={`${image}`}
                style={{ cursor: "pointer", borderRadius: "50%", objectFit: 'cover' }} // Adjust object-fit as needed
              />
            </Box>
            <br />
          </Grid>
          <Grid item xs={12} lg={10} style={{ padding: '10px' }}>
            <Grid container item xs={12} justifyContent="space-between">
              <h4 style={{ alignSelf: 'flex-start', margin: '0' }}>{Titre}</h4>
              <p style={{ alignSelf: 'flex-end' }}>{date}</p>
            </Grid>
            <p>{description} </p>
            <Grid container item xs={12} justifyContent="center" spacing={2} style={{ marginTop: '10px' }}>
              <Grid item>
                <BoutonFavori/>
              </Grid>
              <Grid item>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: 'green',
                    color: 'white',
                    width: '100px',
                    textTransform: 'uppercase',
                    fontWeight: 'bold'
                  }}
                >
                  Voir
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>

  );
};



const Dashboard = () => {

  return (
    <Box m="100px">

      <h1>Annonces</h1>

      <Grid container spacing={2}>
        <CarAnnonce Titre={'t1'} image={'../../alex.jpg'} description={"Explore the open road with our meticulously maintained and stylishly designed [Car Brand and Model]. This exceptional vehicle boasts a powerful [Engine Size] engine, ensuring a smooth and exhilarating driving experience. Its sleek [Color] exterior and well-appointed interior create an impressive combination of aesthetics and comfort. With low mileage and a comprehensive service history, this car is not just a mode of transportation; it's a statement of sophistication and reliability. Packed with advanced safety features and modern conveniences, this [Car Model] is ready to elevate your journeys. Don't miss the opportunity to own this exceptional vehicle, perfectly suited for those who demand excellence on every drive"} date={'2023-02-01'} />
      </Grid>

      {/* HEADER */}
      {/* <Box display="flex" justifyContent="space-between" alignItems="center"> */}
      {/*  
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>

      </Box> */}

      {/* GRID & CHARTS */}
      {/* <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
     
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

      {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="431,225"
            subtitle="Sales Obtained"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

      {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="32,441"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}

      {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="1,325,134"
            subtitle="Traffic Received"
            progress="0.80"
            increase="+43%"
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box> */}



      {/* </Box> */}
    </Box>
  );
};

export default Dashboard;