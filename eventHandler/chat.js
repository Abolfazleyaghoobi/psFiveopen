
import banMember from "../Chat Membe MNG/banMember.js";
import muteMember from "../Chat Membe MNG/muteMember.js";
import unbanMember from "../Chat Membe MNG/unbanMember.js";
import unmuteMember from "../Chat Membe MNG/unmuteMember.js";
import limiter from "../menu/Limiter..js";
import panel from "../menu/Panel.js";
// 8060165800

const text = async (ctx) => {
    const text=ctx.message.text;
    // console.log('text: ', text);
    // console.log(ctx.chat.id);
    if (text==="هایاتو") {
        panel(ctx)
    }else if(text==="محدود"){ 
        limiter(ctx)
    } 
    else if(text==="بن"){
        banMember(ctx)
    }else if (text === "آنبن" || text==="انبن") {
        unbanMember(ctx)
    }else if(text==="سکوت"){
            muteMember(ctx)
    }else if(text === "آنسکوت" || text==="انسکوت"){
        unmuteMember(ctx)

    }
  } 
  export default text; 