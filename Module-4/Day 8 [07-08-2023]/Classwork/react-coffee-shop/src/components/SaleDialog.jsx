import { Dialog, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { useEffect, useState } from "react";

const SaleDialog = () => {

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setOpen(true), 3000);
    }, []);

    return (
        <Dialog
            onClose={() => setOpen(false)}
            open={open}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Today's Specials
            </DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    These are today's specials, blah, blah, blah
                </DialogContentText>
            </DialogContent>
        </Dialog>
    )
}


export default SaleDialog