import db from '../lib/database.js'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw `❗El grupo no admite contenido nsfw \n\n Para habilitar escriba \n*${usedPrefix}enable* nsfw`
  var {age} = db.data.users[m.sender]
   if (age <17) throw conn.reply(m.chat, '❎ hey pervertito, la smetti di vedere queste cose?? sei minorenne. vatti a guardare i me contro te', m) 
   
   let pw = ["https://meme-api.herokuapp.com/gimme/pussy", "https://meme-api.herokuapp.com/gimme/LegalTeens"] 
 let nk = pw[Math.floor(Math.random() * pw.length)]
    let res = await fetch(nk)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw '❎ Error'
    conn.sendButton(m.chat, '✅ Aquí tienes', igfg, json.url, [['▷▷ Siguiente', `${usedPrefix + command }`]], m)
}
handler.help = ['pussy']
handler.tags = ['nsfw']
handler.command = ['pussy']
handler.limit = true
handler.register = true



export default handler
