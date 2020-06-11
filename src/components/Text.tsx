import { themeGet } from "@styled-system/theme-get";
import { lighten } from "polished";
import React, {
    forwardRef,
    ForwardRefExoticComponent
} from "react";
import styled, { css } from "styled-components";
import {
    color,
    ColorProps,

    system, typography,
    TypographyProps,
    variant
} from "styled-system";

const textDecoration = system({
    textDecoration: {
        property: "textDecoration",
    }
  })

interface TextDecorationProps {
    textDecoration?: string;
}

interface TextProps extends TypographyProps, ColorProps, TextDecorationProps {
    variant?:
        | "default"
        | "title"
        | "logo"
        | "link"
        | "code"
        | "h1"
        | "h2"
        | "h3"
        | "h4"
        | "h5"
        | "h6";
    as?: React.ElementType;
    [key: string]: any;
}

const StyledText = styled.p<TextProps>`
${(props) =>
    variant({
        variants: {
            default: {
                fontFamily: "primary",
                color: "text",
                lineHeight: 1.5,
                wordBreak: "break-word",
                textDecoration: "none",
                fontSize: '1.25rem',
                textRendering: "optimizelegibility"
            },
            link: {
                fontFamily: "primary",
                color: "link",
                lineHeight: 1.5,
                wordBreak: "break-word",
                textRendering: "optimizelegibility"
            },
            h1: {
                fontFamily: "title",
                color: "title",
                fontSize: "2.5rem",
                fontWeight: "bold",
                textRendering: "optimizelegibility"
            },
            h2: {
                fontFamily: "title",
                color: "title",
                fontSize: "2rem",
                fontWeight: "bold",
                marginTop: "3.5rem",
                textRendering: "optimizelegibility"
            },
            h3: {
                fontFamily: "title",
                color: "title",
                fontSize: "1.5rem",
                marginTop: "3.5rem",
                fontWeight: "bold",
                textRendering: "optimizelegibility"
            },
            h4: {
                fontFamily: "title",
                color: "title",
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginTop: "3.5rem",
                fontVariant: "small-caps",
                textRendering: "optimizelegibility"
            },
            h5: {
                fontFamily: "title",
                color: "title",
                fontSize: "1.5rem",
                fontWeight: "normal",
                marginTop: "3.5rem",
                fontVariant: "small-caps",
                textRendering: "optimizelegibility"
            },
            h6: {
                fontFamily: "title",
                color: "title",
                fontSize: "1.5rem",
                fontWeight: "lighter",
                marginTop: "3.5rem",
                fontVariant: "small-caps",
                textRendering: "optimizelegibility"
            },
            logo: {
                fontFamily: "logo",
                color: "logo",
                fontSize: "logo",
                textDecoration: "none",
                fontWeight: "bold",
                textRendering: "optimizelegibility"
            },
            code: {
                fontFamily: "monospace",
                color: "text",
                backgroundColor: lighten(
                    0.2,
                    themeGet("colors.background")(props)
                ),
                lineHeight: 1.5,
                fontSize: "1.35rem",
                textRendering: "optimizelegibility"
            },
        },
    })}

${typography}
${color}
${textDecoration}

${props => (["h1", "h2", "h3", "h4", "h5", "h6"] as React.ElementType[]).includes(props.as) && css`
    a {
        text-decoration: none;
    }
`}
`;

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(
    ({ variant = "default", as, ...props }, ref) => {
        return <StyledText ref={ref} variant={variant} as={as} {...props} />;
    }
);

export default Text;
