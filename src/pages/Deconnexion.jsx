import React, { useEffect } from 'react';
import { Grid } from "@mui/material";

export function Logout() {
    const handleLogout = () => {
        localStorage.removeItem('token');
        alert('Vous avez été déconnecté !');
        window.location.href = '/';
    }
    useEffect(() => {
        handleLogout();
    }, []);

    return null;
}

const Deconnexion = () => {
    return (
        <Grid>
            <Logout/>
        </Grid>
    );
};
export default Deconnexion;
