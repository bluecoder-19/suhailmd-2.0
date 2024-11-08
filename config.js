const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "263777297128";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_54_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTgxLFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MyxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNCxcbiAgICAgICAgNjYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI3LFxuICAgICAgICAyNixcbiAgICAgICAgMTI4LFxuICAgICAgICA5OSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTA3LFxuICAgICAgICA0MixcbiAgICAgICAgOCxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTMwLFxuICAgICAgICAzMyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMzgsXG4gICAgICAgIDExMixcbiAgICAgICAgMzcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMjUzLFxuICAgICAgICA3MixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0LFxuICAgICAgICAxOCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDQ1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMxLFxuICAgICAgICA0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICA0NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTY4LFxuICAgICAgICA0NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNDIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEwLFxuICAgICAgICA5MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDQsXG4gICAgICAgIDQsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA5NixcbiAgICAgICAgMzEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODMsXG4gICAgICAgIDgxLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5LFxuICAgICAgICA2NixcbiAgICAgICAgODcsXG4gICAgICAgIDY4LFxuICAgICAgICA5MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTE2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjQwLFxuICAgICAgICA4NSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjExLFxuICAgICAgICA4MyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDQzLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDYzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDk2LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTEwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQxLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTUzLFxuICAgICAgICAyMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgNjIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgODksXG4gICAgICAgIDE4MixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIyMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrdGFpRlJJL3NBSDN3Q2ZvdWZmYnlnK1ZmS1pURGdOaUhSc0JYczk5dEFVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJfSlNlMnVaZ1FIV05QRzFtb1VheC1nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjU2NzJiN2RjLTUyMTItNDc2OC1iOWRkLWJhNjM0YTk5MGJiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDEwNSxcbiAgICAgIDY1LFxuICAgICAgMjIzLFxuICAgICAgNjEsXG4gICAgICAxMjQsXG4gICAgICA1MyxcbiAgICAgIDE2NCxcbiAgICAgIDEzOSxcbiAgICAgIDE1MSxcbiAgICAgIDEzNCxcbiAgICAgIDExNCxcbiAgICAgIDU4LFxuICAgICAgMjA2LFxuICAgICAgMjMyLFxuICAgICAgMTk0LFxuICAgICAgMjE3LFxuICAgICAgNDYsXG4gICAgICAyNDEsXG4gICAgICAxMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgNTUsXG4gICAgICAyNDMsXG4gICAgICAxMzksXG4gICAgICAxNjEsXG4gICAgICAxNSxcbiAgICAgIDQzLFxuICAgICAgMTY5LFxuICAgICAgMjE4LFxuICAgICAgMTk3LFxuICAgICAgMTI3LFxuICAgICAgMTM2LFxuICAgICAgMTMzLFxuICAgICAgMTg3LFxuICAgICAgNDMsXG4gICAgICAxMzYsXG4gICAgICA4OSxcbiAgICAgIDk1LFxuICAgICAgMTMzLFxuICAgICAgNzhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQ0FORTI3Q1dcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI2Mzc3NzI5NzEyODozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkdpeXUgVG9taW9rYVwiLFxuICAgIFwibGlkXCI6IFwiMTY2Njk2ODQxMTU4ODE1OjM0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09tRTNLOEJFTis4dWJrR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiWklTV3dlUll1aHBENDVqeThSTU5DSHFrQ215ejliM1NQS3VUR3ZkenRGMD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCI2ZHJSWDVLckdPRDRyYktBcyt4MWUya2xCN2FCOUhaVjFNTHRkcVR2ejNVcTVtTmF5TEpIYjJFSmdDZTZOaGpkYVVGaHIxMCtBNUVEOE9nRnZWaTZCdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFTHBRWkx2QjQzMGU1R2g5Z3BadE9uTW5RRjcrQ0ZMS0RLWGZwSjlmRm55TVpxdG5HVFIycVJ6bWZ5cmxnRFFNVlJNRnF1Ym5RNHZyVHhxM0JGLzdpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNjM3NzcyOTcxMjg6MzRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyNixcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5M1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMDkyMDY2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSXo0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJejQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCIyeWVNNE4xVlZ6VWlaUDdZVDNUR2E1cE5wMWZVYTNnMk9pQ0I2Sll3UHBNPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjM2ODUwOTU0NSxcImN1cnJlbnRJbmRleFwiOjIsXCJkZXZpY2VJbmRleGVzXCI6WzAsMl19LFwidGltZXN0YW1wXCI6XCIxNzMxMDkxNzkwNzI2XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Giyu",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
