/*import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `β¨ *ENLACE | URL:* ${url}`, m)
  let info = `π *InfΓ³rmate sobre las Novedades y recuerda tener la ΓΊltima versiΓ³n.*\n\nπ *Find out about what's new and remember to have the latest version.*
  `.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, ig, 'ππ£π¨π©πππ§ππ’', null, null, [
['πππ£πͺ πΏππ¨πππ§πππ¨ π', '#descargasmenu'],
['πππ£πͺ πΎπ€π’π₯π‘ππ©π€ | ππͺπ‘π‘ πππ£πͺ β¨', '.allmenu'],
['ππ€π‘π«ππ§ ππ‘ πππ£πͺΜ | π½πππ  π©π€ πππ£πͺ βοΈ', '/menu']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.limit = 2
handler.exp = 35
export default handler*/

import { facebookDl } from './scraper.js'
import { savefrom } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
try {
	const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}

conn.reply(m.chat, `${eg}ππππππ ππ πππππππ, ππ ππππΌ πΏπππΎπΌπππΌππΏπ ππ πππΏππ\n\nππΌππ πΌ ππππππ, ππππ πππΏππ ππ πΏππππππΌπΏπππ`, fkontak, m)
let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || `${eg}πππΏππ πΏπ ππΌπΎππ½πππ` }, { quoted: m })
} catch (e) {
m.reply(`${fg}πΌπππ ππΌπππ ππΌπ, πππΎππππΏπ πππΌπ ππ ππππΌπΎπ ππΌπππΏπ πΏπ ππΌπΎππ½πππ`)
}}
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
export default handler
