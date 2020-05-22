import React, { FunctionComponent } from "react";
import Box from "../components/Box";
import Text from "../components/Text";
import Link from "next/link";
import styled from "styled-components";
import Flex from "../components/Flex";
import Grid from "../components/Grid";

export interface LayoutProps {}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.colors.background};
    overflow: auto;

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


const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <Grid height="100%" gridTemplateColumns="repeat(3, 1fr)" gridTemplateRows={[, "63px 63px 1fr"]} display="grid"
              gridAutoRows={["min-content"]}>
            {children}
        </Grid>
            {/* <Box pt={4} pb={5}>
                <Flex flexDirection="row" justifyContent="center">
                    <div>
                        <Link href="/">
                            <Text
                                variant="logo"
                                as="a"
                                href="/"
                                textAlign="center"
                            >
                                Jordy.app
                            </Text>
                        </Link>
                    </div>
                </Flex>
            </Box>
            {children} */}
        </Wrapper>
    );
};

export default Layout;
