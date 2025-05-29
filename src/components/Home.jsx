import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", width: "100%" }}>
            <Container maxWidth="lg" sx={{ textAlign: "center" }}>
                <Typography variant="h2" fontWeight="bold" gutterBottom>
                    Welcome to Tech Haven
                </Typography>
                <Typography variant="h5" color="textSecondary" paragraph>
                    Your one-stop shop for the latest tech gadgets and accessories.
                </Typography>
                <Box mt={3}>
                    <Button variant="contained" color="primary" size="large" sx={{textTransform: 'capitalize', mr: 2 }} component={Link} to="/products">
                        Explore Products
                    </Button>
                    <Button variant="outlined" color="secondary" size="large" sx={{ textTransform: 'capitalize'}} component={Link} to="/about">
                        Learn More
                    </Button>
                </Box>
            </Container>
        </div>
    );
};

export default Home;