const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2250546526324" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2250546526324";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_19_06_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDI0LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMTUsXG4gICAgICAgIDY5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDksXG4gICAgICAgIDU2LFxuICAgICAgICA0LFxuICAgICAgICAyOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNixcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY1LFxuICAgICAgICAyNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTI1LFxuICAgICAgICA4NixcbiAgICAgICAgODMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5MSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjEsXG4gICAgICAgIDQ3LFxuICAgICAgICA5MixcbiAgICAgICAgNTMsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICA3NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNzcsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMyxcbiAgICAgICAgNDEsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICA4NixcbiAgICAgICAgMTkxLFxuICAgICAgICA0MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODMsXG4gICAgICAgIDQ2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjU1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzQsXG4gICAgICAgIDIwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjksXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDYzLFxuICAgICAgICA5MCxcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM0LFxuICAgICAgICAxMCxcbiAgICAgICAgOCxcbiAgICAgICAgMTUyLFxuICAgICAgICA5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICA5OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDM4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA4MFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDY1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA1NSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDQsXG4gICAgICAgIDY1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjU0LFxuICAgICAgICA3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzksXG4gICAgICAgIDM5LFxuICAgICAgICAyLFxuICAgICAgICAxOTksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTA4LFxuICAgICAgICA4NixcbiAgICAgICAgMjAyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiamZta0ovQXdtYjFRelB0MDUzMktRQXBUVjVFWGFacEdYb2VGWnBwcFJTUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidVRqeUxYSUFTYmlsWW9uaGhsRVRpZ1wiLFxuICBcInBob25lSWRcIjogXCIzYTMxMGExNy0yY2ZjLTRjMjItODcwMC0xMTc0NjQ0N2FkZTlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMTgsXG4gICAgICAxNjAsXG4gICAgICA0OSxcbiAgICAgIDIzOSxcbiAgICAgIDIwMyxcbiAgICAgIDEwMCxcbiAgICAgIDE1MSxcbiAgICAgIDc4LFxuICAgICAgMjA2LFxuICAgICAgMjQzLFxuICAgICAgMTI0LFxuICAgICAgNDIsXG4gICAgICAyMzYsXG4gICAgICAxNTMsXG4gICAgICA5LFxuICAgICAgNjMsXG4gICAgICAxNjgsXG4gICAgICAxNjEsXG4gICAgICAxMjRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAzLFxuICAgICAgMTczLFxuICAgICAgNTAsXG4gICAgICAyMTYsXG4gICAgICA1NixcbiAgICAgIDIyNixcbiAgICAgIDIzOSxcbiAgICAgIDE4MyxcbiAgICAgIDEzMyxcbiAgICAgIDk1LFxuICAgICAgMTcsXG4gICAgICAxMjgsXG4gICAgICA2OSxcbiAgICAgIDk1LFxuICAgICAgMjIsXG4gICAgICA1NixcbiAgICAgIDE2MCxcbiAgICAgIDE1LFxuICAgICAgMTQ0LFxuICAgICAgMTk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlhMWjQ0Q1BYXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU0NjUyNjMyNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1Njc5MDYyMzcyNTI5OjI5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ01QUDlKSUdFTTNiLzdNR0dBSWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmxpTXdCU0ZhWWgwaStiMGRPejJCeWRYdWp4V0N4WEJXb0crNTY4YlNYWT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJYNVlwU2dNeVowVVEwaElDTVJVSlVXWExaWVE1bE1yM3pZUFBrczF2c1BuYVE4N1Zqb0xKbm9WRWNDT1R5REJYdmhqd1JxTEhuS3NYaWVsOVJTc2dBdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJKdGp2dTFMSFRjdXFUK1ZTRENqS0J4WSs4MUVqU1cxb1hNSUsyYk1jV0FhL0hMS09oRDlvZWNRUnRvaU9QcjJ2dlpkMVhXaEdZVjZrYkNtK01XNytEZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0NjUyNjMyNDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDExOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzE5NjU5OTg2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
