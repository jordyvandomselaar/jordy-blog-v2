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
    SpaceProps
} from "styled-system"

interface BoxProps extends PositionProps, ColorProps, LayoutProps, SpaceProps, ShadowProps, BorderProps, BackgroundProps{

}

const Box = styled.div<BoxProps>`
${position}
${color}
${layout}
${space}
${shadow}
${border}
${background}
`


export default Box;
