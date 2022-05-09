import chalk from 'chalk';
import figlet from 'figlet';
import columnify from 'columnify';
import icon from 'nf-icons'

let data = [
  ['ชื่อเล่น', ''],
  ['เพื่อน ๆ ชอบเรียก', ''],
  ['เรียนที่', ''],
  ['อาหารที่ชอบ', ''],
  ['สีโปรด', `${chalk.bgHex('#1C75C0')(' #1C75C0 ')} ฟ้า (French Blue)`],
  ['งานอดิเรก', ''],
  ['ช่องทางการติดต่อ', [
    [icon.names.FA_FACEBOOK_SQUARE, '-'],
    [icon.names.FA_INSTAGRAM, '-'],
    [icon.names.FA_GITHUB, 'ptsgrn'],
    [icon.names.MDI_EMAIL_OPEN, 'me@patsag.one'],
    [icon.names.FA_EXTERNAL_LINK, '-'],
    [icon.names.FA_QUESTION_CIRCLE, `More at: ${chalk.underline('linktr.ee/-')}`],
  ].map(([i, t]) => [icon.utf16(i), t].join(' ')).join('\n')],
].map(([key, value]) => ({
  'ถาม': chalk.white.bold(key),
  'ตอบ':value
}))
let logo = chalk.yellow(figlet.textSync('dtXXX', { font: 'Colossal' }))
console.log(logo)
console.log(columnify(data, {
  columnSplitter: ' | ',
  columns: ['ถาม', 'ตอบ'],
  headingTransform: (heading) => chalk.white.bold.underline(heading),
  preserveNewLines: true,
}))
