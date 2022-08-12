import React, { Component } from 'react'

class PushPin extends Component {
  static defaultProps = {
    fillColor: '#000',
    height: 16,
    width: 16,
  }

  render() {
    const { className, height, width } = this.props

    return (
      <svg
        className={className}
        width={`${width}px`}
        height={`${height}px`}
        viewBox={`0 0 100 100`}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Required in WHERE clause</title>
        <path d="m30.559 53.977h15.781c0.042968 2.707 0.50391 28.57 2.9297 40.43 0.074219 0.34766 0.37891 0.59375 0.73047 0.59375s0.65625-0.24609 0.73047-0.59375c2.4258-11.863 2.8867-37.727 2.9297-40.43h15.781c0.55469 0 1.0898-0.22266 1.4844-0.61719s0.61719-0.92969 0.61719-1.4844c-0.003907-5.6914-4.207-10.504-9.8477-11.273l-3.4141-29.738h2.1211c1.6211 0 2.9336-1.3125 2.9336-2.9297 0-1.6211-1.3125-2.9336-2.9336-2.9336h-20.805c-1.6211 0-2.9336 1.3125-2.9336 2.9336 0 1.6172 1.3125 2.9297 2.9336 2.9297h2.1211l-3.4141 29.738c-5.6406 0.76953-9.8438 5.582-9.8477 11.273 0 0.55469 0.22266 1.0898 0.61719 1.4844s0.92969 0.61719 1.4844 0.61719z" />
      </svg>
    )
  }
}

export default PushPin
