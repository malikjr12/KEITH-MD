/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU25KiSBD9l3rVGEAEhYiOGEAavCJyEd2Yh1IKKLlalChO+O8b2N0z/bA728tTkVWRefKck/kTFCWu0Ry1QP4JKoIbSFF3pG2FgAzUSxQhAvoghBQCGSwXsYqVc5TZcRCZ8zA1EivavzqCG5diFtc9KzjZw0lQ6PoLePRBdTlk+PiHhAxJsOYpqpdNm5E+0XW9ZDN+kg90GOxZcST6lb8hBz6b1C/g0WWEmOAi1qsE5YjAbI7aNcTka/DZaakmkla5M87yWmWu4mJuHy9JWF+3AdfbJL2QOSh+OE6Vr8HH4XjCN07i5o4XD0a6dQ4lhhHxXGmnPXEvbtWRT2bFyXSVN/g1jgsUTkNUUEzbL/MOJ4sRWeevRPO80f14PTkuizmk4Sm6n1s0m6wMM7lLJ7H4IvAl4XbJYTMLYKrtnXZVsGV8vlvmleWFdftqzIjLmF5gLbfDz8DX5MMr6f/hfbyeje+iIvjjA2+IqbkIdyIV2PrK8FvF3x3yLeLFgO3Z/vBr8O/r+zzj611QjJPl64RBxza9wPrCJw5flmeyJNd6d73yLv+Jd0gv5I/mHoiO6qwSBxrKWp1FF8pYDYzYJnOTSTqJmdhygi1n7e5CBmt+6i9O5iXZVKvCTFllZBrTO1zy41OT9xbkdMg9izVP15dnRylqpyGQuUcfEBTjmhJIcVk8YyzXBzBsHHQkiD7pBZ5iuyfSa3a3lRAH46V02vpLfxsO13Uq2b3Z5kxjvTltRDt+AX1QkfKI6hqFJq5pSdolqmsYoxrIf/3ogwLd6JtwXTme64MIk5p6xaXKShh+qPpxCY/H8lJQpy2OWndABMjs7zCiFBdx3fF4KSA5JrhBWgJpDeQIZjX61SEiKAQyJRf0a2q1MuyI3xicvR5Ie9AH+VMQHAIZSAOeG7DDkTQUeFn8Xn+7dllhVX0rEAV9kD1fcUOO4/mBOJBYSeBYWfzexR+/8HXpQkQhzmogA22xSG8jRdWnrn1e6oah2LGixQr43c+HMd6ITzJvKEy5/VoQGOmVSZ0dG7ZlvhMr7OZ+5c1fm1dpHjtBbr/8QxIgg2hjl3deY4X1mt1Tw0gCyWjm3riEOqlcVV20e+JXM52f7K+iyDDtECFaRbk3djmndSfW3XEyXZ2sNmcfBnTT3BdI7VzUByFq8BF9LuaVx3m6522BEgOleXJLRLo7nhVqhbl7oomtQcW+GfF1lw17+yw23euYoUSaxDdWDzcrXTS4sqoz0awSPrDy8AbPifJm2efIZO+rCj/N1CnV/UYYPSe/gJ1+/6ncG+7OX+yj/ynF+yr5l3FUd3vfspzV1u2hiNlEgp6vzON5llvnXSpk0NeSwy1ySj0TUvB4/OiDKoM0KkneLcwiJCUOQR+Q8tIZdlpE5R+Kacp0qr03nsGaKr+HwMU5qinMKyBzo+FIkPgBz7+9WpOyMmGdABnwG2nPS52jW6WqHArpx0wBpfummQ0efwPp1EC5bwcAAA==';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "254";
const author = process.env.OWNER_NAME || 'Asad Malik';
const packname = process.env.PACKNAME || 'Asad';
const dev = process.env.OWNER_NUMBER || '923275374285';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'Asad-MD';
const mode = process.env.MODE || 'private';
const gcpresence = process.env.GC_PRESENCE || 'tru';
const antionce = process.env.ANTIVIEWONCE || 'true';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'recording';
const herokuapikey = process.env.HEROKU_API_KEY || '';
const herokuAppname = process.env.HEROKU_APP_NAME || '';
const url = process.env.URL || 'https://files.catbox.moe/mikdi0.jpg';
const gurl = process.env.GURL || 'https://whatsapp.com/channel/0029Vaan9TF9Bb62l8wpoD47';
const reactemoji = process.env.EMOJI || '🔗';
const antitag = process.env.ANTITAG || 'true';
const groupControl = process.env.GROUP_CONTROL || 'true';
const anticall = process.env.ANTICALL || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const antimention = process.env.ANTIMENTION || 'true';
const antibot = process.env.ANTIBOT || 'true';
const antilink = process.env.ANTILINK || 'true';
const antibad = process.env.ANTIBAD || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'true';
const chatbot = process.env.CHATBOT || 'false';
const greet = process.env.GREET || 'true';
const autodownloadstatus = process.env.AUTODOWNLOAD_STATUS || 'false';
const autostatusreply = process.env.AUTOREPLY_STATUS || 'true';
const autostatusmsg = process.env.AUTOSTATUS_MSG || 'Status View By 💗Asad Malik';
const greetmsg = process.env.GREET_MSG || 'my owner is unavailable text back later';
const timezone = process.env.TIMEZONE || 'Africa/Nairobi';
const autoread = process.env.AUTOREAD || 'true';
const permit = process.env.PM_PERMIT || 'true';
const voicechatbot = process.env.VOICECHATBOT || 'trul';
const voicechatbot2 = process.env.VOICECHATBOT2 || 't';
const anticallmsg = process.env.ANTICALL_MSG || 'Keith declined your 🤙 call';
const autobio = process.env.AUTOBIO || 'true';



module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  autodownloadstatus,
  botname,
  voicechatbot,
  voicechatbot2,
  reactemoji,
  autobio,
  antilink: groupControl, // Use groupControl for antilink
  antibad: groupControl, // Use groupControl for antibad
  mode,
  prefix,
  anticall,
  autostatusreply,
  autostatusmsg,
  autolike,
  anticallmsg,
  mycode,
  chatbot,
  author,
  herokuAppname,
  herokuapikey,
  url,
  gurl,
  packname,
  dev,
  greet,
  greetmsg,
  DevKeith,
  gcpresence,
  permit,
  antionce,
  session,
  antitag,
  antidelete,
};
