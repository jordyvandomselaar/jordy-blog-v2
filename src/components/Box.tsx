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
import { darken } from "polished";
import { themeGet } from "@styled-system/theme-get";

interface BoxProps extends PositionProps, ColorProps, LayoutProps, SpaceProps, ShadowProps, BorderProps, BackgroundProps{
    variant?: "container" | "footer"
}

const Box = styled.div<BoxProps>`
${position}
${color}
${layout}
${space}
${shadow}
${border}
${background}

${props => variant({
    variants: {
        container: {
            paddingRight: [3, "25%"],
            paddingLeft: [3, "25%"]
        },
        footer: {
            backgroundColor: darken(0.05, themeGet("colors.background")(props))
        }
    }
})}
`


export default Box;
