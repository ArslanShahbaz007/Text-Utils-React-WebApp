import React from "react";

export default function Alert(props) {
  return (
    props.alert && <div class="alert alert-success" role="alert">
      <strong>{props.alert.msg}</strong>
    </div>
  );
}
