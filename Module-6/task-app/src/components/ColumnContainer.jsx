import React, { useState } from "react";
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
    FormControl,
    Input,
    InputLabel,
    Button,
    TextField,
} from "@mui/material";
import { TaskCard } from "./TaskCard";
import { useRouter } from "next/router";

export function ColumnContainer(props) {
    const router = useRouter();
    const { id } = router.query;
    const [columnStyles, setColumnStyles] = useState(props.columnStyles);
    const [column, setColumn] = useState(props.column);
    const [tasks, setTasks] = useState(props.tasks);
    const [isVisible, setIsVisible] = useState(false);

    //State to store form input values
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        status: "Pending",
        due: "",
        created: new Date(),
        modified: new Date(),
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        fetch("/api/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not ok" ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                router.push("/");
                console.log(data);
            })
            .catch((error) => console.error(error));
    };

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });

        // console.log(formData);
    };

    const addTaskForm = (
        <Box>
            <TextField
                id="title"
                name="title"
                label="Title"
                variant="outlined"
                fullWidth
                required
                size="large"
                value={formData.title}
                onChange={handleChange}
            />

            <TextField
                id="description"
                name="description"
                label="Description"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                size="large"
                value={formData.description}
                onChange={handleChange}
            />

            <InputLabel htmlFor="due">Due Date</InputLabel>
            <Input
                id="due"
                name="due"
                label="Due Date"
                variant="outlined"
                fullWidth
                type="date"
                size="large"
                value={formData.due}
                onChange={handleChange}
            />
        </Box>
    );

    const addTaskButton = (
        <Button onClick={() => setIsVisible(!isVisible)}>Add Task</Button>
    );
    const cancelTaskButton = (
        <Button onClick={() => setIsVisible(!isVisible)}>Cancel</Button>
    );
    const submitTaskButton = <Button onClick={handleSubmit}>Submit</Button>;

    return (
        <Grid key={column.id} item xs={12} sm={4}>
            <Paper elevation={3} sx={columnStyles.column}>
                <Typography variant="h4">
                    {column.title}
                    <hr />
                </Typography>
                {tasks
                    .filter((task) => task.status === column.status)
                    .map((task) => (
                        <Box key={task._id}>
                            <TaskCard task={task} />
                        </Box>
                    ))}
                <form>
                    {isVisible ? addTaskForm : null}
                    {isVisible ? submitTaskButton : null}
                    {!isVisible ? addTaskButton : cancelTaskButton}
                </form>
            </Paper>
        </Grid>
    );
}
