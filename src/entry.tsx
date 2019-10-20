import GoogleAutoComplete from './GoogleAutoComplete'
import React from 'react'
import ReactDOM from 'react-dom'

const root = document.getElementById('root')
console.log("### root", root);

ReactDOM.render(
  <GoogleAutoComplete onAutocompleteChange={(value) => {
    console.log("### place", value)
  }}/>,
  document.getElementById('root')
)
