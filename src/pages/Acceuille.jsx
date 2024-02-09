import { Box, Grid, Paper } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState, useEffect } from 'react';

export function CarAnnonce({ annonce }) {
    const {
        idAnnonce,
        image,
        descriptionAnnonce: description,
        dateAnnonce: date,
        nombrePlace,
        nombrePorte,
        puissance,
        kilometrage,
        tarif,
        carburant,
        categorieVoiture,
        modeleVoiture
    } = annonce || {};

    return (
        <Grid item xs={12} md={12} lg={12}>
            <Paper xs={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
                <Grid container spacing={1} style={{ backgroundColor: 'gray' }}>
                    <Grid item xs={6} lg={2} style={{ padding: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Box display="flex" justifyContent="center" alignItems="center" style={{ width: '100%', height: '100%' }}>
                            <img
                                alt="profile-user"
                                width="100%"
                                height="auto"
                                src={`${image}`}
                                style={{ cursor: "pointer", borderRadius: "50%", objectFit: 'cover' }}
                            />
                        </Box>
                        <br />
                    </Grid>
                    <Grid item xs={12} lg={10} style={{ padding: '10px' }}>
                        <Grid container item xs={12} justifyContent="space-between">
                            <h4 style={{ alignSelf: 'flex-start', margin: '0' }}>{idAnnonce}</h4>
                            <p style={{ alignSelf: 'flex-end' }}>{date}</p>
                        </Grid>
                        <Grid container item xs={12} justifyContent="space-between">
                        <p>idAnnonce {idAnnonce} </p>
                        <p>description {description} </p>
                        <p>nombrePlace {nombrePlace} </p>
                        <p>nombrePorte {nombrePorte} </p>
                        <p>puissance {puissance} </p>
                        <p>kilometrage {kilometrage} </p>
                        <p>tarif {tarif} </p>
                        <p>carburant {carburant} </p>
                        <p>categorieVoiture {categorieVoiture} </p>
                        <p>modeleVoiture {modeleVoiture} </p>
                        </Grid>
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

const Acceuille = () => {
    const [carAnnonces, setCarAnnonces] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://autotrader-production-a56f.up.railway.app/api/public/annonce", {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                });
                console.log(response);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des données');
                }
                const data = await response.json();
                console.log("Données récupérées:", data); 
                setCarAnnonces(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des données:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <Box m="100px">
            <h1>Listes Annonce</h1>
            <Grid container spacing={2}>
                {carAnnonces.map((annonce, index) => (
                    <Grid item xs={12} key={index}>
                        <CarAnnonce
                            idAnnonce={annonce.idAnnonce}
                            image={annonce.image}
                            descriptionAnnonce={annonce.descriptionAnnonce}
                            dateAnnonce={annonce.dateAnnonce}
                            nombrePlace={annonce.nombrePlace}
                            nombrePorte={annonce.nombrePorte}
                            puissance={annonce.puissance}
                            kilometrage={annonce.kilometrage}
                            tarif={annonce.tarif}
                            idCarburant={annonce.idCarburant}
                            idCategorieVoiture={annonce.idCategorieVoiture}
                            idModeleVoiture={annonce.idModeleVoiture}
                        />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default Acceuille;