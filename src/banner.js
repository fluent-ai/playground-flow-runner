// install packages with
// npm i boxen gradient-string figlet
import boxen from 'boxen'
import gradient from 'gradient-string'
import figlet from 'figlet'
console.clear()
const fonts = ['Calvin S', 'Standard', 'ANSI Shadow', 'Bloody', 'Slant Relief']
const scheme = [gradient.vice, gradient.atlas, gradient.retro][Math.floor(Math.random() * 3)]
console.log(
  scheme.multiline(
    boxen(
      figlet.textSync('flowRunner', {
        font: fonts[0],
        horizontalLayout: 'fitted',
      }) + '🏃\nA minimal extensible runner for node based flows',
      { padding: 2, margin: 0, borderStyle: 'round' },
    ),
  ),
)
console.log()
