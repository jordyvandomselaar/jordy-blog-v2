import styled from "styled-components";
import {lighten} from "polished"
import React from "react";

const Wrapper = styled.blockquote`
    background-color: ${props => lighten(.1, props.theme.colors.primary)};
    border-left: 10px solid ${props => lighten(.05, props.theme.colors.primary)};
    padding: 20px;
    margin: 30px 0;
`;

const BlockQuote = props => {
    return (
        <Wrapper {...props} />
    );
};

export default BlockQuote;
