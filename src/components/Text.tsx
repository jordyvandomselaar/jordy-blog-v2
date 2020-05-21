import React, { FunctionComponent, forwardRef, ForwardRefExoticComponent } from "react";
import styled from "styled-components";
import {
    color,
    ColorProps,
    typography,
    TypographyProps,
    variant,
} from "styled-system";

interface TextProps extends TypographyProps, ColorProps {
    variant?: "default" | "title" | "logo" | "link";
    as?: React.ElementType;
    [key: string]: any
}

const StyledText = styled.p<TextProps>`
${variant({
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
            textDecoration: "none",
            wordBreak: "break-word"
        },
        title: {
            fontFamily: "title",
            color: "title",
        },
        logo: {
            fontFamily: "logo",
            color: "logo",
            fontSize: "logo",
            textDecoration: "none",
        },
    },
})}

${typography}
${color}
`;

const titleElements = ["h1", "h2", "h3", "h4", "h5", "h6"];

const Text: ForwardRefExoticComponent<TextProps> = forwardRef(({ variant, as, ...props }, ref) => {
    const _variant = (() => {
        if (typeof variant === "string") {
            return variant;
        }

        if (titleElements.includes(as?.toString())) {
            return "title";
        }

        return "default";
    })();

    return <StyledText ref={ref} variant={_variant} as={as} {...props} />;
});

export default Text;
