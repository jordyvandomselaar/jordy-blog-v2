import React, {FunctionComponent} from "react";
import Box from "../Box";
import Text from "../Text";
import Link from "next/link";

export interface LayoutProps {

}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    return (
        <Box position="absolute" left={0} top={0} right={0} bottom={0} bg="background" overflow="auto">
            <Box>
                <Link href="/">
                    <a href="/">
                        <Text variant="logo" textAlign="center">Jordy.app</Text>
                    </a>
                </Link>
            </Box>
            {children}
        </Box>
    );
};

export default Layout;
