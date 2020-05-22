import React, {FunctionComponent} from "react";
import styled from "styled-components";
import {
    background, BackgroundProps,
    border, BorderProps,
    color,
    ColorProps,
    layout,
    LayoutProps,
    position,
    PositionProps, shadow,
    ShadowProps,
    space,
    SpaceProps,
    variant
} from "styled-system"

interface BoxProps extends PositionProps, ColorProps, LayoutProps, SpaceProps, ShadowProps, BorderProps, BackgroundProps{
    variant?: "container"
}

const Box = styled.div<BoxProps>`
${position}
${color}
${layout}
${space}
${shadow}
${border}
${background}

${variant({
    variants: {
        container: {
            paddingRight: [3, "25%"],
            paddingLeft: [3, "25%"]
        }
    }
})}
`


export default Box;
