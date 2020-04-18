import React from "react";
import styled, {css} from "styled-components";
import {flex, flexbox, FlexboxProps, FlexProps as _FlexProps} from "styled-system"

interface FlexProps extends FlexboxProps, _FlexProps {

}

const Flex = styled.div<FlexProps>`
${flexbox}
${flex}

${props => {
    if (!!props.flexDirection) {
        return css`display: flex;`;
    }

    return '';
}}
`

export default Flex;
