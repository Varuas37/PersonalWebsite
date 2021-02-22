import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Fragment } from "react";
import Modal from "../../layout/Modal/Modal";
import { Pre, Line, LineNo, LineContent } from "./styles";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { getCode } from "../../../Redux/action/github";
function FileView({ data, getCode }) {
  const [codeContent, setCodeContent] = useState(null);
  const [codeLoaded, setCodeLoaded] = useState(false);
  useEffect(() => {
    // setCodeContent(getCode(data.download_url));
    getCode(data.download_url).then((code, err) => {
      try {
        console.log(code.data);
        setCodeContent(`${code.data.toString()}`);
        setCodeLoaded(true);
      } catch (err) {
        console.log("This is error " + err);
      }
    });

    setCodeContent(false);
  }, [data]);

  const exampleCode = `
import React, { useState } from "react";

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
`.trim();
  // ? () => setCurrRepo(data.name, true)
  // : () => setPath(data.name)
  return (
    codeLoaded && (
      <div style={{width:"100%",overflowX:"hidden"}}>
        <Highlight
          {...defaultProps}
          theme={theme}
          code={codeContent ? codeContent : exampleCode}
          language="jsx"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <Pre className={className} style={style}>
              {tokens.map((line, i) => (
                <Line key={i} {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>
                  <LineContent>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </LineContent>
                </Line>
              ))}
            </Pre>
          )}
        </Highlight>
      </div>
    )
  );
}

FileView.propTypes = {
  currRepo: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  github: state.github,
});

export default connect(mapStateToProps, { getCode })(FileView);
