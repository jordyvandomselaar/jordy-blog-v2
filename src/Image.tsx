import React from "react";
import styled from "styled-components";
import {border, BorderProps, layout, LayoutProps, position, PositionProps} from "styled-system"

interface ImageProps extends PositionProps, LayoutProps, BorderProps {

}

const Image = styled.img<ImageProps>`
max-width: 100%;
max-height: 100%;

${position}
${layout}
${border}
`


export default Image;
