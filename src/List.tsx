import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {color, ColorProps, typography, TypographyProps} from "styled-system";

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
