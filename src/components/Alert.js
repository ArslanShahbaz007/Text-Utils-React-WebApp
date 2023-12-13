import React from "react";

export default function Alert(props) {
  return (
      <div style={{height:'30px'}}> 
       {props.alert && <div class="alert alert-success" role="alert">
      <strong>{props.alert.msg}</strong>
    </div>}
      </div>
  );
}
