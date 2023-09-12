import React from "react";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import Container from "@mui/material/Container";
import MainImage from "../Assets/image 1.png";
import { useTheme } from '@mui/material/styles';

export default function Hero() {

    const theme = useTheme();
    const mob = useMediaQuery(theme.breakpoints.down("sm"));
    const tab = useMediaQuery(theme.breakpoints.down(900));

    return (
        <div
            style={{
                backgroundColor: "#ffb3b3",
                padding: mob ? "0px 20px 25px" : "5px 20px 85px 20px",
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={mob ? 12 : tab ? 12 : 6}>
                        {mob?<img
                            src={MainImage}
                            width={320}
                            style={{ borderRadius: "100%" }}
                        />:tab?
                        <img
                            src={MainImage}
                            width={800}
                            style={{ borderRadius: "100%" }}
                        />:
                        <img
                            src={MainImage}
                            width={690}
                            style={{ borderRadius: "100%" }}
                        />}
                    </Grid>
                    <Grid
                        item
                        xs={mob ? 12 : tab ? 12 : 6}
                        sx={{
                            textAlign: mob ? "center" :tab?"center": "right",
                            padding: 15,
                            '@media (max-width: 600px)': {
                                textAlign: 'center',
                            },
                            '@media (max-width: 900px)': {
                                textAlign: 'center',
                            },
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: mob ? 35 : 45,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: mob ? "center" : tab?"center":"right",
                                marginTop: mob ? 1 :tab?5: 18,
                                '@media (max-width: 600px)': {
                                    fontSize: 30,
                                },
                            }}
                        >
                            Femprish
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 25,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: mob ? "center" : tab?"center":"right",
                                marginTop: 1,
                                '@media (max-width: 600px)': {
                                    fontSize: 20,
                                },
                            }}
                        >
                            Only women can be feminists
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 20,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: mob ? "center" : tab?"center":"right",
                                marginTop: 1,
                                '@media (max-width: 600px)': {
                                    fontSize: 16,
                                },
                            }}
                        >
                            Working towards equality <br />
                            for all = Getting rid of the negative <br />
                            connotation that accompanies 'feminist'.
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: 18,
                                fontFamily: "Merienda",
                                fontWeight: "bold",
                                color: "#ffffff",
                                textAlign: mob ? "center" : tab?"center":"right",
                                marginTop: 1,
                                '@media (max-width: 600px)': {
                                    fontSize: 14,
                                },
                            }}
                        >
                            A feminist is anyone who recognises <br />
                            the equality and full humanity <br />
                            of women and men.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}
