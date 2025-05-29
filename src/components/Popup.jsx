import React, { useState } from "react";
import { Modal, Button } from "@mui/material";
import ModalDialog from '@mui/joy/ModalDialog';
import { clearCart } from "../redux/cartsSlice";
import { resetNumOfProducts } from "../redux/productsSlice";
import { useDispatch } from "react-redux";
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import Box from '@mui/joy/Box';

const Popup = ({ setIsChecked }) => {
    const [layout, setLayout] = React.useState(undefined);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const dispatch = useDispatch();

    const handleConfirm = () => {
        setLayout('center');
        dispatch(resetNumOfProducts());
        dispatch(clearCart());
        setIsChecked(false);
        handleClose();
    };

    const handleCancel = () => {
        setLayout('center');
        handleClose();
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Button 
                onClick={handleOpen} 
                variant="contained" 
                sx={{ textTransform: 'capitalize', margin: 2 }}
            >
                Order and Payment
            </Button>
            <Modal open={open} onClose={handleClose}>
                <ModalDialog 
                    layout={layout} 
                    sx={{ width: 400, padding: 3, borderRadius: 2, boxShadow: 3 }}
                >
                    <DialogTitle sx={{ fontSize: 22, fontWeight: 'bold', textAlign: 'center' }}>Complete Your Order</DialogTitle>
                    <DialogContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <h4>Would you like to complete the order?</h4>
                        <Box sx={{ display: 'flex', gap: 2, flexDirection: 'row', justifyContent: 'center' }}>
                            <Button 
                                onClick={handleConfirm} 
                                variant="contained" 
                                sx={{ textTransform: 'capitalize'}}
                            >
                                Confirm
                            </Button>
                            <Button 
                                onClick={handleCancel} 
                                variant="outlined" 
                                sx={{ textTransform: 'capitalize', color: 'red', borderColor: 'red', '&:hover': { borderColor: 'darkred', color: 'darkred' } }}
                            >
                                Cancel
                            </Button>
                        </Box>
                    </DialogContent>
                </ModalDialog>
            </Modal>
        </Box>
    );
};

export default Popup;
