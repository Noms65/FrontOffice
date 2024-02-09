import { Box, Button, Grid, Paper } from "@mui/material";

export function CarFiche({ images, Titre, descriptions, dates }) {
  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper xs={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        <Grid container spacing={1} style={{ backgroundColor: 'gray' }}>
          {/* Grid pour les images */}
          <Grid item xs={12} lg={12} style={{ padding: '10px' }}>
            <Grid container spacing={1} style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Grid item xs={4} lg={4}>
                <img
                  alt={`profile-user-0`}
                  width="100%"
                  height="auto"
                  src={images[0]}
                  style={{ cursor: "pointer", borderRadius: "5px", objectFit: 'cover' }}
                />
              </Grid>
              <Grid item xs={4} lg={4}>
                <Grid container spacing={1} direction="column" style={{ height: '100%' }}>
                  <Grid item xs={12}>
                    <img
                      alt={`profile-user-1`}
                      width="100%"
                      height="50%"
                      src={images[1]}
                      style={{ cursor: "pointer", borderRadius: "5px", objectFit: 'cover' }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <img
                      alt={`profile-user-2`}
                      width="100%"
                      height="50%"
                      src={images[2]}
                      style={{ cursor: "pointer", borderRadius: "5px", objectFit: 'cover' }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={4} lg={4}>
                <img
                  alt={`profile-user-3`}
                  width="100%"
                  height="auto"
                  src={images[3]}
                  style={{ cursor: "pointer", borderRadius: "5px", objectFit: 'cover' }}
                />
              </Grid>
            </Grid>
          </Grid>
          {/* Grid pour le contenu */}
          <Grid item xs={12} lg={12} style={{ padding: '10px' }}>
            {Titre && (
              <Grid container item xs={12} justifyContent="space-between">
                <h4 style={{ alignSelf: 'flex-start', margin: '0' }}>{Titre}</h4>
                <p style={{ alignSelf: 'flex-end' }}>{dates}</p>
              </Grid>
            )}
            {descriptions && descriptions.map((description, index) => (
              <div key={index}>
                <p>{description}</p>
              </div>
            ))}
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
      </Paper>
    </Grid>
  );
};

const FicheVoiture = () => {
  // Exemple de données
  const images = ['../../alex.jpg', '../../image2.jpg', '../../image3.jpg', '../../image4.jpg'];
  const Titre = 't1';
  const descriptions = ["description 1", "description 2", "description 3"];
  const dates = '2023-02-01';

  return (
    <Box m="100px">
      <h1>Fiche</h1>
      <Grid container spacing={2}>
        <CarFiche images={images} Titre={Titre} descriptions={descriptions} dates={dates} />
      </Grid>
    </Box>
  );
};

export default FicheVoiture;
