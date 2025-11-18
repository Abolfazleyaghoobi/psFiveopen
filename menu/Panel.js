import { join } from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { Markup } from "telegraf";
const __dirname = dirname(fileURLToPath(import.meta.url));
// const chatId = -1002286392590;
const chatId = -1003292325744;
const panel=async (ctx)=>{
    const member = await ctx.telegram.getChatMember(chatId, ctx.from.id);
    const text = ctx.message.text;
  
    const status = member.status;
 
  
    if (status === "creator" || status === "administrator") {
      if (text === "هایاتو") {
        console.log(58586);
        if (ctx.from.id == 7763463127) {
   
          // send response
          await ctx.replyWithPhoto(
           "https://uploadkon.ir/uploads/550116_25Gemini-Generated-Image-okmkihokmkihokmk.png",
            {
              reply_to_message_id: ctx.message.message_id,
              parse_mode: "HTML",
              caption: `سلام🥰\n چکار بلات انجام بدم`,
              ...Markup.inlineKeyboard([
                [
                  Markup.button.callback("لیست سکوت شده 🔇", "mutedList"),
                  Markup.button.callback("لیست بن شده ها⛔", "bannedList")
                ],
                [
                  Markup.button.callback("کاربران ویژه", "specialUsers"),
                  Markup.button.callback("کاربران محدود شده", "limitUsers")
                ],
                [
                  Markup.button.callback("راهنما", "help")
                ]
              ]),
            }
          );
        }
        //! if is not setaish
         else if (ctx.from.id !== 7763463127) {
          console.log(9898);
          // get pic
          const photos = await ctx.telegram.getUserProfilePhotos(ctx.from.id);
          console.log('photos: ', photos);
          let fileId;
          // //   get pic latest
          if (photos.total_count > 0) {
            fileId = photos.photos[0][0].file_id;
          }
       
          // // send response
          await ctx.replyWithPhoto( 
            "https://uploadkon.ir/uploads/58ec15_25solder.png",
            {
              reply_to_message_id: ctx.message.message_id,
              parse_mode: "HTML",
              caption: `چکار برات انجم بدم ${ctx.from.first_name} عزیز.\n لطفا یکی از گزینه زیر رو انتخاب کنید`,
              ...Markup.inlineKeyboard([
                [
                  Markup.button.callback("لیست سکوت شده 🔇", "mutedList"),
                  Markup.button.callback("لیست بن شده ها⛔", "bannedList")
                ],
                [
                  Markup.button.callback("کاربران ویژه", "specialUsers"),
                  Markup.button.callback("کاربران محدود شده", "limitUsers")
                ],
                [
                  Markup.button.callback("راهنما", "help")
                ]
              ]),
            }
          );
          // await ctx.reply("ali") 
        }
      }
    } else {
      await ctx.replyWithPhoto(
        { source: join(__dirname, "../assets/img/01.png") },
        {
          reply_to_message_id: ctx.message.message_id,
          caption: `میخوای این داشاق رو تو ناکجا آبادت بکنم`,
        }
      );
    }
}
export default panel;