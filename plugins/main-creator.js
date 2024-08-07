let handler = async (m, { conn, usedPrefix, isOwner }) => {
let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;⁩ᘛCriss;;\nFN:ᘛCriss⁩\nORG:ᘛCriss\nTITLE:\nitem1.TEL;waid=51913776697:51913776697\nitem1.X-ABLabel:ᘛCriss⁩\nX-WA-BIZ-DESCRIPTION:\nX-WA-BIZ-NAME:ᘛCriss⁩\nEND:VCARD`
await conn.sendMessage(m.chat, { contacts: { displayName: 'ᘛCriss', contacts: [{ vcard }] }}, {quoted: m})
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler
