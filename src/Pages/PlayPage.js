import ChromeDinoGame from "react-chrome-dino";
import Menu from "../Components/Menu";
import { useNavigate } from "react-router-dom";
import { Grid, createTheme, ThemeProvider } from "@mui/material";

function PlayPage() {
  const navigate = useNavigate();
  const menuData = {
    title: " ",
    items: [
      {
        title: "←",
        onClick: () => navigate("/"),
      },
    ],
  };

  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1280,
        xl: 1920,
        custom: 1000, // Custom breakpoint at 1000px
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid container>
          <Menu align="left" title={menuData.title} items={menuData.items} />
          <Grid item xs={7}>
            <ChromeDinoGame />
          </Grid>
          <Grid item xs={1}></Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
}

export default PlayPage;
