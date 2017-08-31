import React, { Component } from 'react';

export default class TodoInput extends Comment {
  render(){
    return <input type="text" value={this.props.content}/>
  }
}