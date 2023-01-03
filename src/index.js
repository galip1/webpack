import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; ///bootstrap js dosyası

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack 2");
  alert("hello 2");
  setItem("token", "adflkgdşflgkdfşgfdşgdfşgkfdgşfkdglfdkjghldfjghdfj");
});
