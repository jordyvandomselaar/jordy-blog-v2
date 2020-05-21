import React from "react";
import styled, {css} from "styled-components";
import {flex, flexbox, FlexboxProps, FlexProps as _FlexProps, layout, LayoutProps} from "styled-system"

interface FlexProps extends FlexboxProps, _FlexProps, LayoutProps {

}

const Flex = styled.div<FlexProps>`
${flexbox}
${flex}
${layout}

${props => {
    if (!!props.flexDirection) {
        return css`display: flex;`;
    }

    return '';
}}
`

export default Flex;
