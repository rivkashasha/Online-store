import { Paper, Box, Button, Checkbox, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useSelector, useDispatch } from "react-redux";
import { decreaseNumOfProducts } from "../redux/productsSlice";
import { updateQuantity, deleteProduct } from "../redux/cartsSlice";
import { useState } from "react";
import Popup from "./Popup";

const Carts = () => {
    const [isChecked, setIsChecked] = useState(false);
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.carts.productsList);

    const handleQuantityChange = (id, actionToDo) => {
        dispatch(updateQuantity({ id, actionToDo }));
    };

    const handleDeleteProduct = (id) => {
        dispatch(deleteProduct({ id }));
        dispatch(decreaseNumOfProducts({ id }));
    };

    const rows = productsList.map((product) => {
        return {
            id: product.id,
            name: product.title,
            price: product.price,
            quantity: product.quantity || 1,
            subtotal: (product.price * (product.quantity || 1)).toFixed(2),
        };
    });

    const columns = [
        { field: 'id', headerName: 'ProductID', width: 70 },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'price', headerName: 'Price', width: 130 },
        {
            field: 'quantity',
            headerName: 'Quantity',
            width: 180,
            renderCell: (params) => (
                <Box display="flex" alignItems="center" justifyContent="center">
                    <Typography variant="body1" sx={{ fontWeight: "bold", mr: 1 }}>
                        {params.row.quantity}
                    </Typography>
                    <Box display="flex" flexDirection="column" alignItems="center">
                        <Button
                            onClick={() => handleQuantityChange(params.row.id, 'increase')}
                            sx={{ width: 30, height: 25, borderRadius: 2 }}
                        >
                            +
                        </Button>
                        <Button
                            onClick={() => handleQuantityChange(params.row.id, 'decrease')}
                            sx={{ width: 30, height: 25, borderRadius: 2 }}
                            disabled={params.row.quantity === 1}
                            className="cart-decrease-btn"
                        >
                            -
                        </Button>
                    </Box>
                </Box>
            )
        },
        { field: 'subtotal', headerName: 'Subtotal', width: 130 },
        {
            field: 'delete', headerName: 'Delete', width: 130,
            renderCell: (params) => (
                <Button
                    variant="contained"
                    color="error"
                    onClick={() => handleDeleteProduct(params.row.id)}
                    sx={{ height: 30, width: "100%" }}
                >
                    Delete
                </Button>
            )
        }
    ];

    const totalPrice = (productsList.reduce((total, product) => {
        return total + (product.price * (product.quantity || 1));
    }, 0) + (isChecked ? 50 : 0)).toFixed(2);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const paginationModel = { page: 0, pageSize: 5 };

    return (
        <Box sx={{ margin: 2 }}>
            <Paper sx={{ height: 400, width: '100%', p: 2, boxShadow: 3 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{ pagination: { paginationModel } }}
                    pageSizeOptions={[5, 10]}
                    sx={{ border: 0 }}
                />
            </Paper>

            <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
                <Typography variant="h6" sx={{ mb: 1 }}>Total Price: {totalPrice}$</Typography>
                <Box display="flex" alignItems="center" mb={2}>
                    <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
                    <Typography>Home delivery</Typography>
                </Box>
            </Box>

            <Popup setIsChecked={setIsChecked} />
        </Box>
    );
};

export default Carts;