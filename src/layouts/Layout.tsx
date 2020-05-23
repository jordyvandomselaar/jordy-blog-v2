import React, { FC } from "react";
import Grid from "../components/Grid";
import Text from "../components/Text";
import Flex from "../components/Flex";
import Box from "../components/Box";
import Head from "next/head";
import Link from "next/link";
import styled, { createGlobalStyle } from "styled-components";

export interface LayoutProps {}

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box
    }
    body {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: ${(props) => props.theme.colors.background};
        overflow: auto;
        margin: 0;
        padding: 0;

        #__next {
            height: 100%;
            width: 100%;
        }
    }



    @font-face {
        font-family: Arvo;
        src: url(${require("../assets/fonts/Arvo/Arvo-Regular.ttf")})
            format("truetype");
        font-weight: normal;
    }

    @font-face {
        font-family: Arvo;
        src: url(${require("../assets/fonts/Arvo/Arvo-Bold.ttf")})
            format("truetype");
        font-weight: bold;
    }
`;

const Layout: FC<LayoutProps> & {
    SiteName: FC;
    Content: FC;
    Footer: FC;
} = ({ children }) => {
    return (
        <>
            <GlobalStyles />
            <Grid
                height="100%"
                gridTemplateColumns="repeat(3, 1fr)"
                gridTemplateRows="auto 1fr 62px"
                display="grid"
                gridAutoRows={["min-content"]}
            >
                    {children}
            </Grid>
        </>
    );
};

Layout.SiteName = () => (
    <Grid gridColumn="1/span 3" gridRow={1}>
        <Box height="100%" mt={4}>
            <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
            >
                <Link href="/">
                    <Text as="a" href="/" variant="logo">
                        Jordy.app
                    </Text>
                </Link>
            </Flex>
        </Box>
    </Grid>
);

Layout.Content = ({ children }) => (
    <Grid gridRow={2} gridColumn="1 / span 3">
        {children}
    </Grid>
);

Layout.Footer = ({ children }) => {
    return (
        <Grid gridRow={3} gridColumn="1 / span 3">
            <Box width="100%" height="100%" variant="footer">
                <Flex
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    height="100%"
                >
                    <Text>
                        <Text
                            as="a"
                            variant="link"
                            href="https://twitter.com/Jordy_vD_"
                            target="_blank"
                        >
                            Twitter
                        </Text>
                        <Box display="inline" px={2}>
                            <Text as="span">-</Text>
                        </Box>
                        <Text
                            as="a"
                            variant="link"
                            href="https://github.com/jordyvandomselaar"
                            target="_blank"
                        >
                            Github
                        </Text>
                        <Box display="inline" px={2}>
                            <Text as="span">-</Text>
                        </Box>
                        <Text
                            as="a"
                            variant="link"
                            href="https://github.com/jordyvandomselaar/jordy-blog-v2"
                            target="_blank"
                        >
                            Source Code
                        </Text>
                    </Text>
                </Flex>
            </Box>
        </Grid>
    );
};

export default Layout;
