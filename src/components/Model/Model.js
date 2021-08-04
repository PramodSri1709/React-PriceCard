import React, { useState } from "react";

export default function Model() {
    const [model, setModel] = useState(false)

    const modelClick = () => {
        setModel(model.style.display("block"));
    }

    const spanClick = () => {
        model.style.display("none")
    }

  return (
    <div>
        <button onclick={modelClick}>{model}</button>
      <div id="myModal" class={model}>
        <div class="modal-content">
          <span class="close" onclick={spanClick}>&times;</span>
          <p>Some text in the Modal..</p>
        </div>
      </div>

    </div>
  );
}
