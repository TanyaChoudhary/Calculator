document.addEventListener('DOMContentLoaded', (event) => {
    let string = "";
    let buttons = document.querySelectorAll('.button');
    console.log('Buttons:', buttons);
    Array.from(buttons).forEach((button) => {
        button.addEventListener('click', (e) => {
            console.log('Button clicked :', e.target.innerHTML);
            if(e.target.innerHTML === '=') {
                try {
                    string = eval(string);
                    document.querySelector('input').value = string;
                } catch (error) {
                    document.querySelector('input').value = "Error";
                }
            }
             else if(e.target.innerHTML === "C") {
                string = "";
                document.querySelector('input').value = string;
            } else {
                string += e.target.innerHTML;
                document.querySelector('input').value = string;
            }
        });
    });
});