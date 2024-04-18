import { _ as n } from "./index.vue.81a3fdcd.js";
import { _ } from "./Slide.7e03da7a.js";
import {
  _ as c,
  aC as m,
  a1 as g,
  af as l,
  a4 as u,
  a3 as f,
  a5 as e,
} from "./entry.16c5462c.js";
import "./useForm.3e4d564e.js";
import "./Loader.9d1555c7.js";
import "./Select.74f8e480.js";
import "./marketplace.0e0b3079.js";
const S = c({
  __name: "index",
  setup(d) {
    const { pump: t, dump: s, rewards: p, "pump-id": a, bridge: r } = m();
    return (h, P) => {
      const o = n,
        i = _;
      return (
        g(),
        l(
          i,
          {
            "is-full-screen": e(t).isFullScreen,
            "child-page": e(a),
            "pages-left": [e(s)],
            "pages-right": [e(p), e(a), e(r)],
          },
          { default: u(() => [f(o)]), _: 1 },
          8,
          ["is-full-screen", "child-page", "pages-left", "pages-right"]
        )
      );
    };
  },
});
export { S as default };
