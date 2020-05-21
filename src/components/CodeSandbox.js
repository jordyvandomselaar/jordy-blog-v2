import React from 'react'
import propTypes from 'prop-types'

const CodeSandbox = ({ title, url }) => (
  <iframe
    src={`${url}?view=preview&fontsize=14`}
    title={title}
    style={{
      width: '100%',
      height: '500px',
      border: '0',
      borderRadius: '4px',
      overflow: 'hidden',
    }}
    sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  />
)

CodeSandbox.propTypes = {
  title: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
}

export default CodeSandbox
