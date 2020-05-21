import React, { FunctionComponent } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import styled from "styled-components";
import theme from "prism-react-renderer/themes/palenight"

export interface CodeBlockProps extends React.FunctionComponent {
    code: string;
    className: string;
}

const LineNumber = styled.span`
    user-select: none;
    display: inline-block;
    padding-left: 1em;
    padding-right: 1em;
    width: 1.2em;
    user-select: none;
    opacity: 0.5;
    text-align: center;
    position: relative;
`;

const CodeBlock: FunctionComponent<CodeBlockProps> = ({
    code,
    className,
    ...props
}) => {
    const language = className?.replace(/language-/, "") as Language;
    return (
        <Highlight {...defaultProps} theme={theme} code={code.trim()} language={language} {...props}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre
                    className={className}
                    style={{ ...style, padding: "20px", overflow: "auto", borderRadius: "10px"}}
                >
                    {tokens.map((line, i) => {
                        const lineProps = getLineProps({ line, key: i });

                        return (
                            <div key={i} {...lineProps}>
                                <LineNumber>{i + 1}</LineNumber>
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({ token, key })}
                                    />
                                ))}
                            </div>
                        );
                    })}
                </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
