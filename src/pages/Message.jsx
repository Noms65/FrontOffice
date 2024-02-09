import { Box, Button, Grid, Paper } from "@mui/material";

export function Message({ images, Titre, descriptions, dates }) {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        <Grid container spacing={1} style={{ backgroundColor: 'gray', padding: '10px', borderRadius: '10px' }}>
          {/* Grid pour les images */}
          <Grid item xs={3} lg={2}>
            <img
              alt={`profile-user-0`}
              width="100%"
              height="auto"
              src={images[0]}
              style={{ cursor: "pointer", borderRadius: "50%", objectFit: 'cover' }}
            />
          </Grid>
          {/* Grid pour le contenu */}
          <Grid item xs={9} lg={10}>
            <Grid container direction="column" spacing={1}>
              <Grid item>
                <h4>{Titre}</h4>
              </Grid>
              <Grid item>
                <p>{descriptions[0]}</p>
              </Grid>
              <Grid item>
                <p>{dates}</p>
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

const BoiteMessages = () => {
  // Exemple de données
  const images = ['../../alex.jpg'];
  const Titre = 'Titre du message';
  const descriptions = ["Contenu du message"];
  const dates = '2023-02-01';

  return (
    <Box m="100px">
      <h1>Boîte de Messages</h1>
      <Grid container spacing={2}>
        <Message images={images} Titre={Titre} descriptions={descriptions} dates={dates} />
      </Grid>
    </Box>
  );
};

export default BoiteMessages;
