import React from "react";
import styled from "styled-components";
import {border, BorderProps, color, ColorProps, layout, LayoutProps, position, PositionProps} from "styled-system"

interface ImageProps extends PositionProps, LayoutProps, BorderProps, ColorProps {

}

const Image = styled.img<ImageProps>`
max-width: 100%;
max-height: 100%;

${position}
${layout}
${border}
${color}
`


export default Image;
