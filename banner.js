// install packages with
// npm i boxen gradient-string figlet
import boxen from "boxen";
import gradient from "gradient-string";
import figlet from "figlet";
console.clear();
const fonts = ["Calvin S", "Standard", "ANSI Shadow", "Bloody", "Slant Relief"];
const scheme = [gradient.vice, gradient.atlas, gradient.retro][
  Math.floor(Math.random() * 3)
];
console.log(
  scheme.multiline(
    boxen(
      figlet.textSync("flowrunner", {
        font: fonts[2],
        horizontalLayout: "fitted",
      }) +
        `  
            🏄 Testing the methods for running flows  🏄`,
      { padding: 2, margin: 0, borderStyle: "round" }
    )
  )
);
