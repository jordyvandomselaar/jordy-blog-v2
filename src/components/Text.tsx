import React, { FunctionComponent, forwardRef, ForwardRefExoticComponent } from "react";
import styled from "styled-components";
import {
    color,
    ColorProps,
    typography,
    TypographyProps,
    variant,
    get
} from "styled-system";
import { darken, lighten } from "polished";
import {themeGet} from "@styled-system/theme-get"

interface TextProps extends TypographyProps, ColorProps {
    variant?: "default" | "title" | "logo" | "link" | "code" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    as?: React.ElementType;
    [key: string]: any
}

const StyledText = styled.p<TextProps>`
${props => variant({
    variants: {
        default: {
            fontFamily: "primary",
            color: "text",
            lineHeight: 1.5,
            wordBreak: "break-word"
        },
        link: {
            fontFamily: "primary",
            color: "text",
            lineHeight: 1.5,
            wordBreak: "break-word"
        },
        h1: {
            fontFamily: "title",
            color: "title",
            fontSize: "3rem"
        },
        h2: {
            fontFamily: "title",
            color: "title",
            fontSize: "2.5rem"
        },
        h3: {
            fontFamily: "title",
            color: "title",
            fontSize: "2rem"
        },
        h4: {
            fontFamily: "title",
            color: "title",
            fontSize: "1.5rem"
        },
        h5: {
            fontFamily: "title",
            color: "title",
            fontSize: "1.25rem"
        },
        h6: {
            fontFamily: "title",
            color: "title",
            fontSize: "1.1rem"
        },
        logo: {
            fontFamily: "logo",
            color: "logo",
            fontSize: "logo",
            textDecoration: "none",
            fontWeight: "bold"
        },
        code: {
            fontFamily: "monospace",
            color: "text",
            backgroundColor: lighten(.2, themeGet("colors.background")(props)),
            lineHeight: 1.5,
            fontSize: "1.1rem"
        }
    },
})}

${typography}
${color}
`;

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(({ variant = "default", as, ...props }, ref) => {
    return <StyledText ref={ref} variant={variant} as={as} {...props} />;
});

export default Text;
