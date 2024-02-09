import {AnnonceFavori,Vente, ContentMessage,Message, Dashboard, SidebarMenu, Topbar,Deconnexion,Acceuille,Login ,FicheVoiture,MesAnnonces} from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { Outlet } from 'react-router-dom';



const App = () => {

  const [theme, coloMode] = useMode();

  return (
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>

          <Routes>
          <Route path="Login" element={<Login />} exact></Route> 
            <Route path="/*" exact element={
              <main className="app">
                <SidebarMenu />
                <section className="content">
                  <Topbar />
                  <Outlet />
                </section>
              </main>
            }>
              <Route index element={<Acceuille />} exact></Route> 
              <Route path="Dashboard" element={<Dashboard />} exact></Route> 
              <Route path="Message" element={<Message />} exact></Route>
              <Route path="ContentMessage" element={<ContentMessage />} exact></Route>
              <Route path="AnnonceFavori" element={<AnnonceFavori />} exact></Route>
              <Route path="MesAnnonces" element={<MesAnnonces />} exact></Route>
              <Route path="FicheVoiture" element={<FicheVoiture />} exact></Route>
              <Route path="Vente" element={<Vente />} exact></Route>
              <Route path="Deconnexion" element={<Deconnexion />} exact></Route> 
              
            </Route>

            <Route path="*" element={<Dashboard />} exact></Route> 
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App;