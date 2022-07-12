import React from 'react'

function Content(props) {
  return (
    <body class ="table">
    <div class="child" id="ad">{props.ad1}</div>
    <div class="child" id="body">{props.name}</div>
    <div class="child" id="ad">{props.ad2}</div>
    </body>
  )
}

export default Content;

