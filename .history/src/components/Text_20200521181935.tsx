import React, { FunctionComponent, forwardRef } from "react";
import styled from "styled-components";
import {
    color,
    ColorProps,
    typography,
    TypographyProps,
    variant,
} from "styled-system";

interface TextProps extends TypographyProps, ColorProps {
    variant?: "default" | "title" | "logo";
    as?: React.ElementType;
    [key: string]: any
}

const StyledText = styled.p<TextProps>`
${variant({
    variants: {
        default: {
            fontFamily: "primary",
            color: "text",
            lineHeight: 1.5
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

const Text: FunctionComponent<TextProps> = forwardRef(({ variant, as, ...props }) => {
    const _variant = (() => {
        if (typeof variant === "string") {
            return variant;
        }

        if (titleElements.includes(as?.toString())) {
            return "title";
        }

        return "default";
    })();

    return <StyledText variant={_variant} as={as} {...props} />;
});

export default Text;
