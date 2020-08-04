import styled from "styled-components";
import {lighten} from "polished"
import React from "react";
import Text from "./Text"

const Wrapper = styled.div`
    background-color: ${props => lighten(.1, props.theme.colors.primary)};
    border-left: 10px solid ${props => lighten(.05, props.theme.colors.primary)};
    padding: 20px;
    margin: 30px 0;

    *:last-child {
      margin-bottom: 0;
    }

    strong + * {
    margin-top: 10px;
    }
`;

const Tip = ({variant = "tip", children,  ...props}) => {
    const titleMap = {
        tip: "Tip",
        note: "Note"
    }

    const title = titleMap[variant];

    if(!title) {
        throw new Error(`No title found for ${variant}!`);
    }

    return (
        <Wrapper {...props}>
          <Text as="strong">{title}</Text>
          {children}
        </Wrapper>
    );
};

export default Tip;
