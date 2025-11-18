import { TelegramUser } from "../models/User.model.js";

// const chatId = -1002286392590;
const chatId = -1003292325744;
const muteMember = async (ctx) => {
    const member = await ctx.telegram.getChatMember(chatId, ctx.from.id);
    const text = ctx.message.text;
    const status = member.status;
    if (status==="creator" || status==="administrator") {
        const replyUser = ctx.message.reply_to_message;
        if (!replyUser) {
            return ctx.reply("روی پیام کاربر ریپلای کن که تا سکوتش کنی."); 
        }
        const { id, first_name, username } = replyUser.from;
        const result= await TelegramUser.findOne({ telegramId: id });
        if (result) {
            if (!result.isMute) {
                await TelegramUser.findOneAndUpdate({ telegramId: id },{isMute:true});
                await ctx.telegram.restrictChatMember(chatId, id, {
                     can_send_messages: false,
                     can_send_media_messages: false,
                     can_send_other_messages: false,
                     can_send_polls: false,
                     can_add_web_page_previews: false,
                     can_change_info: false,
                     can_invite_users: false,
                     can_pin_messages: false,
                })
                await ctx.reply(`اینقدری که (${first_name})زر زدی اخرش بهت سکوت دادن😎😎`)
            }else{
                await ctx.reply(`عزیزم سکوت خورده نیاز نیست دوباره سکوتش کنی \n <<<${first_name} @${username?username:"ریدم بهت که ایدی نداری"} >>>`)
            }
            
        }else{
            await TelegramUser.create({
                telegramId: id,
                first_name:first_name,
                username:username,
                isMute:true,
            });
            await ctx.telegram.restrictChatMember(chatId, id, {
                 can_send_messages: false,
                 can_send_media_messages: false,
                 can_send_other_messages: false,
                 can_send_polls: false,
                 can_add_web_page_previews: false,
                 can_change_info: false,
                 can_invite_users: false,
                 can_pin_messages: false,
            })
            await ctx.reply(`اینقدری که (${first_name})زر زدی اخرش بهت سکوت دادن😎😎`)
        }
        
    }
}
export default muteMember