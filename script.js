input = document.querySelector(".text-input");
messages = document.querySelector(".messages");
body = document.querySelector('body');

text = "";
isTyping = false;
let replyIndex = 0;
isReply = false;

let replies = ["Hi! How are you!", "I'm from Western Europe..", "Thats cool!"];

input.addEventListener("focusin", (e) => 
{
    console.log("focused");
    isTyping = true;
})

input.addEventListener("focusout", () => {
    console.log("unfocused");
    isTyping = false;
})

body.addEventListener("keydown", (e) => {
    console.log("pressed");
    if (isTyping) {
        if (e.code == "Enter"){
            text = e.target.value;
            console.log({e, text});
            message = document.createElement("p");
            message.textContent = text;
            message.classList.add("message");
            messages.appendChild(message);
            text = "";
            input.value = "";

            isReply = true;

            setInterval(() => {
                if (isReply){

                    let reply = document.createElement("p");
                reply.textContent = replies[replyIndex];
                replyIndex++;
                reply.classList.add("reply");
                messages.appendChild(reply);
                isReply = false;
            }
            }, 3000)

        }


    }
})