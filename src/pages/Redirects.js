export function Redirects() {
  const Historique = () => {
    const token = localStorage.getItem('token');
    if (token) {
      window.location.href = '/Acceuille';
    } else {
      alert("Vous devez être connecté pour accéder à cette page");
      window.location.href = '/Login';
    }
  };

  Historique(); // Appeler la fonction historique

  // Vous pouvez retourner d'autres éléments ou effectuer d'autres actions ici si nécessaire
}
