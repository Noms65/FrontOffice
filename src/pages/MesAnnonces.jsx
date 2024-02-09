import { Box, Button, Grid, Paper } from "@mui/material";


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
                  Etat
                </Button>
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



const MesAnnonces = () => {
  

  return (
    <Box m="100px">

      <h1>Mes Annonce</h1>

      <Grid container spacing={2}>
        <CarAnnonce Titre={'t1'} image={'../../alex.jpg'} description={"Explore the open road with our meticulously maintained and stylishly designed [Car Brand and Model]. This exceptional vehicle boasts a powerful [Engine Size] engine, ensuring a smooth and exhilarating driving experience. Its sleek [Color] exterior and well-appointed interior create an impressive combination of aesthetics and comfort. With low mileage and a comprehensive service history, this car is not just a mode of transportation; it's a statement of sophistication and reliability. Packed with advanced safety features and modern conveniences, this [Car Model] is ready to elevate your journeys. Don't miss the opportunity to own this exceptional vehicle, perfectly suited for those who demand excellence on every drive"} date={'2023-02-01'} />
      </Grid>
    </Box>
  );
};

export default MesAnnonces;