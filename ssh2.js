const password = 'tp@ittpS'
const ssh = require('ssh2')
ssh.connect({
  host: 'avt.ittps.ru',
  username: 'steel',
  port: 2222,
  password,
  tryKeyboard: true,
})

// Or if you want to add some custom keyboard-interactive logic:

ssh.connect({
  host: 'tun.ittps.ru',
  username: 'root',
  port: 2222,
  tryKeyboard: true,
  onKeyboardInteractive(name, instructions, instructionsLang, prompts, finish) {
    if (prompts.length > 0 && prompts[0].prompt.toLowerCase().includes('password')) {
      finish([password])
    }
  }
})