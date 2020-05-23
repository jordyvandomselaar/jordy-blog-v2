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
            maxWidth: "700px",
            margin: "0 auto",
            px: [3, 0]
        },
        footer: {
            backgroundColor: darken(0.05, themeGet("colors.background")(props))
        }
    }
})}
`


export default Box;
