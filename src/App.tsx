import type { Component } from "solid-js";

import logo from "./logo.svg";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <div class={styles.App}>
      <header>{/*put nav/title here*/}</header>
      {/* <div class={styles["creation-zone"]}>
        <div id="injection-zone">preview</div>
        <div>creation tool</div>
      </div> */}
      <div class={styles["zone-2"]}>
        <div class={styles["preview-section"]}>
          Preview
          <div class={styles["preview-component"]}>
            <label>Favorite color</label>
            <input />
          </div>
        </div>
        <div>
          <ul class={styles["tlvl-list"]}>
            <li class={styles.range}>
              Label
              <input value="Favorite color" />
            </li>
            <li>
              <input type="checkbox" />
              customize
            </li>
            <li>
              <input type="checkbox" />
              customize
            </li>
            <li>
              <input type="checkbox" />
              customize
            </li>
            <li>
              <input type="checkbox" />
              customize
            </li>
            <li>
              <input type="checkbox" />
              customize
            </li>
            <li class={styles.range}>
              customize
              <input type="range" />
            </li>
            <li class={styles.range}>
              customize
              <input type="range" />
            </li>
            <li class={styles.range}>
              customize
              <input type="range" />
            </li>
            <li class={styles.range}>
              customize
              <input type="range" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
