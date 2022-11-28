import React, { Component } from "react";

const Hello = () => {
    // return <h1>Hello Mrunal</h1>
    return React.createElement('div', null, React.createElement('h1', null, 'Hello Mrunal'))
}

export default Hello