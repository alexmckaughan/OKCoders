import {
    Button,
    Container,
    FormControl,
    FormHelperText,
    Stack,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Test");
        navigate('/menu');
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Stack mt={"1.5rem"} spacing={"1rem"}>

                    <FormControl>
                        <TextField
                            label="Email"
                            id="email"
                            type="email"
                            aria-describedby="email-helper"
                            value={formData.email}
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                        <FormHelperText id="email-helper">
                            We'll never share your email.
                        </FormHelperText>
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Password"
                            id="password"
                            type="password"
                            value={formData.password}
                            required
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Sign In
                    </Button>

                </Stack>
            </Form>
        </Container >
    );
};

export default Login;
