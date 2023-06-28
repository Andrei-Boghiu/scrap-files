 // Create the Button
    const ButtonHTML = `
                    <button class="btn">Click me</button>
                    `;
    const ButtonCSS = `

                    .btn {
                        display: inline-block;
                        outline: 0;
                        cursor: pointer;
                        border: 2px solid #72d0f7;
                        padding: 0 12px;
                        height: 35px;
                        border-radius: 6px;
                        background-color: #5cbef7;
                        color: #fff;
                        font-size: 16px;
                        box-shadow: 0 6px 18px 0 rgb(0, 179, 255, 0.4);
                        animation: float 6s ease-in-out infinite;
                        transform: translatey(0px);
                        }
                    .btn:hover {
                         background: rgb(0, 179, 255, 0.9);
                         box-shadow: 0 4px 26px 0 rgb(0, 179, 255);;
                        }
                    .btn:active {
                        transform: scale(0.95);
                        }
                    `;
    const ButtonContent = `<style>${ButtonCSS}</style>${ButtonHTML}`;
    const Button = document.createElement("div");
    Button.innerHTML = ButtonContent;

    // Wait for the div
    const intervalAppendAlreadyLiveButton = setInterval(() => {
        const targetDiv = document.body.querySelector('div')
        

        if (targetDiv) {
            targetDiv.prepend(AlreadyLiveButton);
            clearInterval(intervalAppendAlreadyLiveButton);
                // rest of the code here
        }
    }, 100)
