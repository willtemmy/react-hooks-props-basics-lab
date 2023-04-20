import React from "react";

function Links(props){
    //console.log(props.githubs);
    return (
        <div>
      <h3>Links</h3>
      <a href={props.githubs}>{props.githubs}git</a>
      <a href={props.linkedins}>{props.linkedins}</a>
      </div>
    );
  }

export default Links;