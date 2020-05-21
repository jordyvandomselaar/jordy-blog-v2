import styled from "styled-components";
import {lighten} from "polished"
import React from "react";
import Text from "./Text"

const Wrapper = styled.div`
    background-color: ${props => lighten(.45, props.theme.colors.primary)};
    border-left: 10px solid ${props => lighten(.45, props.theme.colors.primary)};
    padding: 20px;
    margin: 30px 0;

    *:last-child {
      margin-bottom: 0;
    }

    strong + * {
    margin-top: 10px;
    }
`;

const Tip = ({title = "Tip", children,  ...props}) => {
    return (
        <Wrapper {...props}>
          <Text as="strong">{title}</Text>
          {children}
        </Wrapper>
    );
};

export default Tip;
