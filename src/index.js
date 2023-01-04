import { setItem } from "./utils/storage";
import "./index.scss";
import "bootstrap"; ///bootstrap js dosyası

document.getElementById("btnClick").addEventListener("click", () => {
  alert("Hello Webpack 2");
  alert("hello 2");
  const arr = [123, 56, 42, 3, 26, 5];

  console.log(getArray(...arr));

  setItem("token", "adflkgdşflgkdfşgfdşgdfşgkfdgşfkdglfdkjghldfjghdfj");
});

const getArray = (arr) => {
  return arr.filter((x) => x > 10).reduce((t, x) => x + t, 0);
};
