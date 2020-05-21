import React, {FunctionComponent} from "react";
import Highlight, {defaultProps, Language} from "prism-react-renderer"

export interface CodeBlockProps extends React.FunctionComponent{
    code: string;
    className: string;
}

const CodeBlock: FunctionComponent<CodeBlockProps> = ({code, className, ...props}) => {
    const language = className?.replace(/language-/, '') as Language;

    return (
        <Highlight {...defaultProps} code={code} language={language} {...props}>
            {({className, style, tokens, getLineProps, getTokenProps}) => (
                <pre className={className} style={{...style, padding: '20px', overflow: "auto"}}>
          {tokens.map((line, i) => (
              <div key={i} {...getLineProps({line, key: i})}>
                  {line.map((token, key) => (
                      <span key={key} {...getTokenProps({token, key})} />
                  ))}
              </div>
          ))}
        </pre>
            )}
        </Highlight>
    );
};

export default CodeBlock;
