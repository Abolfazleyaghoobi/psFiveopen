// فایل: /api/bot.js
import { Telegraf } from "telegraf";
import start from "../commond/start.js";
import text from "../eventHandler/chat.js";
import callback from "../eventHandler/callback.js";

// توکن ربات از محیط Vercel گرفته میشه
const bot = new Telegraf(process.env.BOT_TOKEN);

// ثبت هندلرها
bot.start(start);
bot.on("message", text);
bot.on("callback_query", callback);

// فقط یکبار ساخت handler برای Vercel
export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // دریافت آپدیت و پردازشش
      await bot.handleUpdate(req.body);

      return res.status(200).send("ok");
    } catch (error) {
      console.error("Error handling update", error);
      return res.status(500).send("error");
    }
  }

  // اگر متد غیر از POST بود
  res.status(405).send("Method Not Allowed");
}
