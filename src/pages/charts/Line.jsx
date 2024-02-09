import { LineChart, Header } from "../../components";
import { Box } from "@mui/material";

const Line = () => {

  return (
    <Box m="20px">

      <Header title="Statistique chiffre Affaire" subtitle="2024" />

      <Box height="75vh">
        <LineChart />
      </Box>

    </Box>
  );
};

export default Line;