import React, { useState } from 'react';
import { Box, Button, Grid, Paper, TextField, Avatar } from "@mui/material";

export function Message({ messages, setMessages }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      // Ajouter le nouveau message à la liste des messages avec les informations de l'utilisateur actuel
      setMessages([...messages, { content: inputValue, user: "me" }]);
      setInputValue(""); // Effacer le champ de saisie après l'envoi du message
      
      // Afficher le nouveau message dans la console
    console.log("Nouveau message:", inputValue);
    }
  };

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', maxWidth: '100%' }}>
        <Grid container spacing={2}>
          {/* Affichage des messages précédents */}
          <Grid item xs={12}>
            {messages.map((message, index) => (
              <div key={index} style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
                {/* Affichage de l'avatar de l'utilisateur actuel ou de l'autre utilisateur */}
                {message.user !== "me" && (
                  <Avatar
                    alt={`${message.user} Avatar`}
                    src={`url_de_l_image_du_profil_${message.user}`}
                    sx={{ width: 32, height: 32, marginRight: 10 }}
                  />
                )}
                {/* Affichage du message */}
                <p style={{ color: message.user === "me" ? "blue" : "green" }}>
                  {message.user !== "me" && `${message.user}: `}
                  {message.content}
                
                </p>
                
                {/* Affichage de l'avatar de l'utilisateur actuel */}
                {message.user === "me" && (
                  <Avatar
                    alt="Mon Avatar"
                    src="url_de_mon_image_de_profil"
                    sx={{ width: 32, height: 32, marginLeft: 'auto' }}
                  />
                )}
              </div>
            ))}
          </Grid>
          {/* Formulaire d'envoi de message */}
          <Grid item xs={12}>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={9}>
                <TextField
                  fullWidth
                  label="Votre message"
                  variant="outlined"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={3}>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSendMessage}
                >
                  Envoyer
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

const ContentMessage = () => {
  // Liste des messages avec un état local
  const [messages, setMessages] = useState([
    { content: "Bonjour!", user: "Autre Utilisateur" },
    { content: "Comment ça va?", user: "Moi" }
  ]);

  return (
    <Box m="100px">
      <h1>Messages</h1>
      <Grid container spacing={2}>
        <Message messages={messages} setMessages={setMessages} />
      </Grid>
    </Box>
  );
};

export default ContentMessage;
