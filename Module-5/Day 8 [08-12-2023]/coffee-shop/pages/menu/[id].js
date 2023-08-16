import {
  Button,
  Container,
  TextField,
  Typography,
  Stack,
  Grid,
  Paper,
  CardMedia,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function MenuItem() {
  const router = useRouter();
  const { id } = router.query;
  const [menuItem, setMenuItem] = useState({});
  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [spacing, setSpacing] = useState(2);

  async function fetchMenuItem() {
    const response = await fetch(`/api/menu/${id}`);
    const data = await response.json();
    setMenuItem(data);
  }

  async function submitOrder() {
    const response = await fetch(`/api/order`, {
      method: "POST",
      body: JSON.stringify({ ...order, menuItemId: id }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    router.push("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    submitOrder();
  };

  useEffect(() => {
    if (id) {
      fetchMenuItem();
    }
  }, [id]);

  return (
    <>
      <Grid
        sx={{ flexGrow: 1, backgroundColor: "bisque", padding: "5vh" }}
        container
        spacing={2}
      >
        <Grid item xs={12}>
          <Grid container justifyContent="center" spacing={spacing}>
            <Grid item>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "space-between",
                  height: "auto",
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
                  image={menuItem.imageUrl} // Fixed the image property
                  alt={menuItem.name}
                  sx={{ height: 400, width: "100%", objectFit: "cover" }}
                />
                <Typography variant="h6" component="div">
                  ${menuItem.price}
                </Typography>
                <Typography variant="body1" component="div">
                  {menuItem.description}
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack
                    spacing={2}
                    sx={{
                      width: "100%", // This ensures that the stack takes up the full width
                      alignItems: "center", // Align items center
                      marginTop: "5vh",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={2}
                      alignItems="center"
                      width="100%"
                    >
                      <TextField
                        label={"First Name"}
                        value={order.firstName}
                        onChange={(e) =>
                          setOrder({ ...order, firstName: e.target.value })
                        }
                        fullWidth
                        required
                      />
                      <TextField
                        label={"Last Name"}
                        value={order.lastName}
                        onChange={(e) =>
                          setOrder({ ...order, lastName: e.target.value })
                        }
                        fullWidth
                        required
                      />
                    </Stack>
                    {/* Other text fields with full width and required attributes */}
                    <TextField
                      label={"Email"}
                      value={order.email}
                      onChange={(e) =>
                        setOrder({ ...order, email: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <TextField
                      label={"Phone"}
                      value={order.phone}
                      onChange={(e) =>
                        setOrder({ ...order, phone: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <TextField
                      label={"Address Line 1"}
                      value={order.addressLine1}
                      onChange={(e) =>
                        setOrder({ ...order, addressLine1: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <TextField
                      label={"Address Line 2"}
                      value={order.addressLine2}
                      onChange={(e) =>
                        setOrder({ ...order, addressLine2: e.target.value })
                      }
                      fullWidth
                    />
                    {/* More text fields with required attributes */}
                    <TextField
                      label={"City"}
                      value={order.city}
                      onChange={(e) =>
                        setOrder({ ...order, city: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <TextField
                      label={"State"}
                      value={order.state}
                      onChange={(e) =>
                        setOrder({ ...order, state: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <TextField
                      label={"Zip"}
                      value={order.zip}
                      onChange={(e) =>
                        setOrder({ ...order, zip: e.target.value })
                      }
                      fullWidth
                      required
                    />
                    <Button type="submit">Submit Order</Button>
                  </Stack>
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
