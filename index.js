// @ts-ignore
import { Markup, Telegraf } from "telegraf";
//import newChatMember from "./eventHandler/newChatMembers.js";
import "./config/db.js";
import start from "./commond/start.js";
// const chatId = -1002286392590;

import text from "./eventHandler/chat.js";

import callback from "./eventHandler/callback.js";

const token = "8247892224:AAE1OEl7fADgsvEiMAz_7ge4uwCkrPMUBAQ";
const bot = new Telegraf(token);
 
bot.start(start);
bot.on("message", text);
bot.on("callback_query", callback);
// bot.on("my_chat_member", async (ctx) => {
//   const chat = ctx.chat;
//   const status = ctx.myChatMember.new_chat_member.status;

//   if (status === "member" || status === "administrator") {
//     if (chat.id !== chatId) {
//       await ctx.reply("❌ این گروه مجاز نیست. ربات فقط در گروه اصلی فعال است.");

//       await bot.telegram.leaveChat(chat.id);
//     }
//   }
// });

//bot.on("new_chat_members",newChatMember)

bot.launch();

// creator
// administrator
