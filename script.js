input = document.querySelector(".text-input");
messages = document.querySelector(".messages");
body = document.querySelector('body');
reveal = document.querySelector(".reveal-button");
revealCanvas = document.querySelector(".reveal-container")
closeButton = document.querySelector(".close");

text = "";
isTyping = false;
let replyIndex = 0;
isReply = false;

let replies = ["Hi! How are you!", "I'm from Western Europe..", "Thats cool!"];

closeButton.addEventListener("click", ()=> {
    revealCanvas.classList.remove("revealed");
})

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
            message.classList.add("shrink");
            setTimeout(() => {
                message.classList.add("message");
            }, 200)
            messages.appendChild(message);
            text = "";
            input.value = "";

            isReply = true;

            setInterval(() => {
                if (isReply){
                    let reply = document.createElement("p");
                reply.textContent = replies[replyIndex];
                replyIndex++;
                reply.classList.add("shrink");
                setTimeout(() => {
                    reply.classList.add("reply");
                }, 200)
                messages.appendChild(reply);
                isReply = false;
            }
            }, 3000)

        }


    }
})

reveal.addEventListener("click", () => {
    revealCanvas.classList.add("revealed");
})