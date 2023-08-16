import { Button, CardMedia, Grid, Paper, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const [menuItems, setMenuItems] = useState([]);
  const [spacing, setSpacing] = useState(2);
  const router = useRouter();

  async function fetchMenuItems() {
    try {
      const response = await fetch("/api/menu");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      if (Array.isArray(data)) {
        // Check if the response is an array
        setMenuItems(data);
      } else {
        console.warn("Menu data not found");
        setMenuItems([]);
      }
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  }

  useEffect(() => {
    fetchMenuItems();
  }, []);

  return (
    <>
      <Grid
        sx={{ flexGrow: 1, backgroundColor: "bisque", padding: "5vh" }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            {menuItems.map((menuItem) => (
              <Grid key={menuItem._id} item>
                <Paper
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    height: 600,
                    width: 600,
                    backgroundColor: (theme) =>
                      theme.palette.mode === "dark" ? "#1A2027" : "#FAF3E0",
                    padding: "2vh",
                  }}
                >
                  <Typography variant="h4" component="div">
                    {menuItem.name}
                  </Typography>
                  <CardMedia
                    component="img"
                    image={menuItem.imageUrl}
                    alt={menuItem.name}
                    sx={{ height: 400, width: "100%", objectFit: "cover" }}
                  />
                  <Typography variant="body1" component="div">
                    {menuItem.description}
                  </Typography>
                  <Typography variant="h6" component="div">
                    ${menuItem.price.toFixed(2)}
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => router.push(`/menu/${menuItem._id}`)}
                  >
                    Order
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
