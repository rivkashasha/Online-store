import { Container, Typography, Card, CardContent } from "@mui/material";

const About = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 5 }}>
            <Card elevation={3} sx={{ p: 3 }}>
                <CardContent>
                    <Typography variant="h4" fontWeight="bold" gutterBottom>
                        About Tech Haven
                    </Typography>
                    <Typography variant="body1" paragraph>
                        At Tech Haven, we bring you the best and latest technology at unbeatable prices.
                        Our catalog features a wide range of products, from smart home devices to the latest Apple accessories.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Founded by tech enthusiasts, our mission is to provide high-quality gadgets with outstanding customer service.
                        Join us and explore the future of technology today!
                    </Typography>
                </CardContent>
            </Card>
        </Container>
    );
};

export default About;