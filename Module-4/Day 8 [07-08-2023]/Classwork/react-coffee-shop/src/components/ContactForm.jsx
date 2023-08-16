import {
    Button,
    Container,
    FormControl,
    Stack,
    TextField,
} from "@mui/material";
import { useState } from "react";
import { Form } from "react-router-dom";

const ContactForm = () => {


    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            firstName: "",
            lastName: "",
            email: ""
        })
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Stack mt={"5rem"} spacing={"1rem"}>
                    <FormControl>
                        <TextField
                            label="First Name"
                            id="firstName"
                            type="text"
                            value={formData.firstName}
                            variant="filled"
                            onChange={(e) =>
                                setFormData({ ...formData, firstName: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Last Name"
                            id="lastName"
                            type="lastName"
                            value={formData.lastName}
                            variant="filled"
                            onChange={(e) =>
                                setFormData({ ...formData, lastName: e.target.value })
                            }
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            label="Email"
                            id="email"
                            type="email"
                            value={formData.email}
                            variant="filled"
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>

                </Stack>
            </Form>
        </Container >
    );
};

export default ContactForm;
