import styled from "styled-components";
import theme from "../../config/theme"
import {lighten} from "polished"
import React from "react";

const Wrapper = styled.div`
    background-color: ${lighten(.45, theme.colors.primary)};
    border-left: 10px solid ${theme.colors.primary};
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
          <strong>{title}</strong>
          {children}
        </Wrapper>
    );
};

export default Tip;
