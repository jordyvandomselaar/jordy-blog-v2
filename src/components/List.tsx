import React, { FunctionComponent, FC } from "react";
import styled from "styled-components";
import {
    color,
    ColorProps,
    typography,
    TypographyProps,
    space,
    SpaceProps,
} from "styled-system";
import Box from "./Box";
import Text from "./Text";

export const StyledUnOrderedList = styled.ul<ColorProps & TypographyProps>`
    ${color}
    ${typography}
`;

export interface UnorderedListProps extends ColorProps, TypographyProps {}

export const UnOrderedList: FunctionComponent<UnorderedListProps> = ({
    fontFamily = "primary",
    color = "list",
    ...props
}) => {
    return (
        // @ts-ignore
        <StyledUnOrderedList fontFamily={fontFamily} color={color} {...props} />
    );
};

export const OrderedList: FunctionComponent<UnorderedListProps> = ({
    fontFamily = "primary",
    color = "list",
    ...props
}) => {
    return (
        // @ts-ignore
        <StyledUnOrderedList
            as="ol"
            fontFamily={fontFamily}
            // @ts-ignore
            color={color}
            {...props}
        />
    );
};

export const ListItem: FC<SpaceProps> = props => {
    return (
        <Text as="li">
            <Box {...props} />
        </Text>
    )
}
