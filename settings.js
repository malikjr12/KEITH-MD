/*I wrote a script to automate my job. Now I just sit back and watch Netflix while it runs.*/

const session = process.env.SESSION || 'KEITH;;;H4sIAAAAAAAAA5VU2bKiSBD9l3rVaMGFxYgbMSCIuAAK4jIxDwUUUOxShYod/vsE3r59+2Gm5w5PRVZG5smT59R3UJSYoBVqwfQ7qGp8hRR1R9pWCEyB3IQhqkEfBJBCMAWNmYxHvBonzkn1uAlOxqHCzouYLYi1rCLv4jjs+n7FZMG8gWcfVI2XYf83BRlOSE13z10N+S4bfnr2R9yOXc/9YYZ5zXRvyGQCzphri/INPLuKENe4iNQqRjmqYbZCrQVx/TX4uuoxof04JbIb2TlU2X3v6OZmGWZqUJKFfW0FIyuL5cqVvga/ZzqWnYvSug24UjeFEG2psig8PzUz3Ro4Op73lMyw57fxO3yCowIFeoAKimn7Zd6h4Z34pX2o4vAeL8/0cEbF5srk27m588s6X60S9h5wg1w7fQ34VT9EukHDPe+cZPe+LLnNTVB0UQwGW8lIWa2asXlyfRSa/ytwq/7QSvp/eG/VgVfBdvNYbvYWPcDLyt2VhM+V1WDJOH7THm5ifDJ8Wx1/DT4OU2XxKCZFwPqnYXx257pDmh51peOBVZydGFtrFkEyiMgnfEib+ncoUbJlUXbJtlvxpggWtvii50E8SrxF2vQcsTYXmpTazPVkQ5mfHdyLzst5YqFYki7xdS1dDG1NGzZLZ3AvcDVzdhJ5+/aaKEWtHoAp++yDGkWY0BpSXBZdjGP6AAZXG/k1oi92AbOKTzBync3+nHve5HbgFa70cXCBnsYddpzN6/45ZmN7HL2BPqjq0keEoGCBCS3rdoMIgREiYPrnX31QoDt931vXbcT2QYhrQvdFU2UlDD6W+nEJfb9sCmq3hT/rDqgGU+YzjCjFRUQ6GpsC1n6Mr2gWQ0rANIQZQT8HRDUKwJTWDfpp2lkZdLyPZtpCsjUb9EH+2gcOwBSIw9GQn4z48VCYTPnRH+TbrSsLq+pbgSjog+yVNmJElh1PGGYi8ILQJXbx50+AXb0AUYgzAqZgZjU+Rqqmmuv5ZaNqmnSKpFkkgc+BPoTxzvzE8TZiZBwXLXZ6xHI2xmWDmPNNbGFUrNmas2Bj2I/sPtq+/UMRMAUZ3Ttj48gZUs/f6eqjaq7ssWkfAz/F7nKMVo9jmR4zUzVT9cSQahAcDoWy3LSFPNtJ6TJNw3awsbLjeDTYxtLt7O9kpVNRHwToin30a7PcdeVosJLW1YKMhdX2YRBZa5XkCtlSklt9biTb4U6qw2Um3BtFoDdmMGt0w+Cj2ePgxJXZPvSVetP8OS944W2dHPCHZF+WyX48Vfilpm5V3W+I0cv5BewW+N+rewfeKYx59n+p8eMt+Rc/ymg/fFgnxb0LZTqoFeahwGRBNd/y83LZirCXDOtkTyZ+wIDn868+qDJIw7LOuxezCOoSB6AP6rLpJKsXYfmbZjNZ1z8mzyCh0qcNHJwjQmFegSnLj/mJyIqs8J5l1WW1gCQGUzB0ef6y7zTdSlVlU0g/XAWk7tMmGnj+DYhCRlFwBwAA';

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
