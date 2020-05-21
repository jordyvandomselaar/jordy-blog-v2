import React, { FunctionComponent } from "react";
import Box from "../components/Box";
import Text from "../components/Text";
import Link from "next/link";
import styled from "styled-components";
import Flex from "../components/Flex";

export interface LayoutProps {}

const Wrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: ${(props) => props.theme.background};
    overflow: auto;

    @font-face {
        font-family: Arvo;
        src: url(${require("../assets/fonts/Arvo/Arvo-Regular.ttf")})
            format("truetype");
        font-weight: 400;
    }
`;

const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
    return (
        <Wrapper>
            <Box pt={4} pb={5}>
                <Flex flexDirection="row" justifyContent="center">
                    <Link href="/">
                        <Text variant="logo" as="a" href="/" textAlign="center">
                            Jordy.app
                        </Text>
                    </Link>
                </Flex>
            </Box>
            {children}
        </Wrapper>
    );
};

export default Layout;
