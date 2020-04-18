import React from "react";
import styled from "styled-components";
import {typography, TypographyProps} from "styled-system"

interface TextProps extends TypographyProps {

}

const Text = styled.p<TextProps>`
${typography}
`

export default Text;
