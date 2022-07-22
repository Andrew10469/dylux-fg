function handler(m) {
  const data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
  
  m.reply(`
*≡ IL DIO DEL BOT*
  *Andrew*
▢ tik tok :
  • http://tiktok.com/@andre._.000_._._
▢ WhatsApp :
  • http://wa.me/+79303876919 
  
 *≡ AIUTANTE*
  *Hypnos*
▢ tik tok : https://www.tiktok.com/@pizza_biesse?_t=8UC5oHnDfBm&_r=1
▢ WhatsApp : http://wa.me/+393477037227
`) 


}

handler.help = ['creador']
handler.tags = ['main']

handler.command = ['owner', 'creator', 'creador', 'dueño', 'fgowner'] 


export default handler
