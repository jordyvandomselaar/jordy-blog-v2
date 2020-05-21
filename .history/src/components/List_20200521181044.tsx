import React, {FunctionComponent, FC} from "react";
import styled from "styled-components";
import {color, ColorProps, typography, TypographyProps} from "styled-system";
import Box from "./Box";

export const StyledUnOrderedList = styled.ul<ColorProps & TypographyProps>`
  ${color}
  ${typography}
`;

export interface UnorderedListProps extends ColorProps, TypographyProps{

}

export const UnOrderedList: FunctionComponent<UnorderedListProps> = ({fontFamily = "primary", color = "list", ...props} ) => {
    return (
    // @ts-ignore
        <StyledUnOrderedList fontFamily={fontFamily} color={color} {...props}/>
    );
};

export const OrderedList: FunctionComponent<UnorderedListProps> = ({fontFamily = "primary", color = "list", ...props} ) => {
    return (
    // @ts-ignore
        <StyledUnOrderedList as="ol" fontFamily={fontFamily} color={color} {...props}/>
    );
};

export const ListItem: FC = ({children, ...props}) => {
    return (
        <li {...props}>
            <Box py={2}>
                {children}
            </Box>
        </li>
    )
}