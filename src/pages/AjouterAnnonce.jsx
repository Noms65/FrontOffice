import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, MenuItem } from "@mui/material";

const AjoutAnnonce = () => {
    const [description, setDescriptionAnnonce] = useState("");
    const [images, setImages] = useState([]);
    const [annee, setAnnee] = useState("");
    const [etat, setEtat] = useState("");
    const [nombrePlace, setNombrePlace] = useState("");
    const [nombrePorte, setNombrePorte] = useState("");
    const [puissane, setPuissance] = useState("");
    const [kilometrage, setKilometrage] = useState("");
    const [tarif, setTarif] = useState("");
    const [idCarburant, setIdCarburant] = useState("");
    const [idCategorieVoiture, setIdCategorieVoiture] = useState("");
    const [idModeleVoiture, setIdModeleVoiture] = useState("");

    const handleImageChange = (e) => {
        const selectedImages = Array.from(e.target.files);
        setImages(selectedImages);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Créer un objet JSON avec les données du formulaire
        const formData = {
            description,
            images,
            annee,
            etat,
            nombrePlace,
            nombrePorte,
            puissane,
            kilometrage,
            tarif,
            idCarburant,
            idCategorieVoiture,
            idModeleVoiture
        };

        try {
            // Effectuer une requête POST vers votre backend
            const response = await fetch('https://autotrader-productiona56f.up.railway.app/api/annonce', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // Ajouter des headers d'authentification si nécessaire
                },
                body: JSON.stringify(formData)
            });

            // Vérifier si la requête a réussi (code de statut 2xx)
            if (response.ok) {
                console.log('Annonce ajoutée avec succès !');
                // Réinitialiser les champs après la soumission
                setDescriptionAnnonce("");
                setImages([]);
                setAnnee("");
                setEtat("");
                setNombrePlace("");
                setNombrePorte("");
                setPuissance("");
                setTarif("");
                setIdCarburant("");
                setIdCategorieVoiture("");
                setIdModeleVoiture("");
            } else {
                console.error('Erreur lors de l\'ajout de l\'annonce');
                // Traiter les erreurs de requête si nécessaire
            }
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
            // Traiter les erreurs d'exception si nécessaire
        }
    };

    // Integer annee;
	// String descriptionAnnonce;
	// int nombrePlace;
	// int nombrePorte;
	// double puissance;
	// double kilometrage;
	// double tarif;
    // Integer idCarburant;
	// Integer idCategorieVoiture;
	// Integer idModeleVoiture;

    // Gérer la soumission du formulaire ici
    // console.log("Description:", description);
    // console.log("Images:", images);
    // console.log("annee:", annee);
    // console.log("etat:", etat);
    // console.log("nombrePlace:", nombrePlace);
    // console.log("nombrePorte:", nombrePorte);
    // console.log("puissane:", puissane);
    // console.log("kilometrage:", kilometrage);
    // console.log("tarif:", tarif);
    // console.log("idCarburant:", idCarburant);
    // console.log("idCategorieVoiture:", idCategorieVoiture);
    // console.log("idModeleVoiture:", idModeleVoiture);


    return (
        <Box m="100px">
            <h1>Ajouter une Annonce</h1>
            <Paper sx={{ p: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            fullWidth
                            label="Description voiture"
                            multiline
                            rows={4}
                            value={description}
                            onChange={(e) => setDescriptionAnnonce(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            type="date"
                            label="Annee"
                            value={annee}
                            onChange={(e) => setAnnee(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            label="Carburant"
                            value={idCarburant}
                            onChange={(e) => setIdCarburant(e.target.value)}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            label="Catégorie"
                            value={idCategorieVoiture}
                            onChange={(e) => setIdCategorieVoiture(e.target.value)}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            select
                            fullWidth
                            label="Modele"
                            value={idModeleVoiture}
                            onChange={(e) => setIdModeleVoiture(e.target.value)}
                        >
                            <MenuItem value="1">1</MenuItem>
                            <MenuItem value="2">2</MenuItem>
                            <MenuItem value="3">3</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Etat"
                            value={etat}
                            onChange={(e) => setEtat(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Nombre Place"
                            value={nombrePlace}
                            onChange={(e) => setNombrePlace(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Nombre Porte"
                            value={nombrePorte}
                            onChange={(e) => setNombrePorte(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Puissance"
                            value={puissane}
                            onChange={(e) => setPuissance(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Kilometrage"
                            value={kilometrage}
                            onChange={(e) => setKilometrage(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            fullWidth
                            label="Tarif"
                            value={tarif}
                            onChange={(e) => setTarif(e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Ajouter Annonce
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    );
};

export default AjoutAnnonce;
