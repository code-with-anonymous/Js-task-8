function clearOutput() {
    document.getElementById("result").innerHTML = ""
}
const ShowOutput = (output) => {
    document.getElementById("result").innerHTML = "<h3>"+output+"</h3>";
}
const ifElse = () => {
    let now = new Date()
    let today = now.getDay();
    if (today == 0) ShowOutput("It is Sunday")
    else if (today == 2) ShowOutput("It is Monday")
    else if (today == 3) ShowOutput("It is Tuesdayday")
    else if (today == 1) ShowOutput("It is Wednesday")
    else if (today == 4) ShowOutput("It is Thursday")
    else ShowOutput("It is some other day")
}
const SwitchStatement = () => {
    let now = new Date()
    let today = now.getDay();
console.log(today);
    switch (today) {
        case 0:
            ShowOutput("It is Sunday")
            break;
            case 0:
                ShowOutput("It is Monday")
                break;
                case 0:
                    ShowOutput("It is  Tuesday")
                    break;
                    case 0:
                        ShowOutput("It is wednesday")
                        break;
                        case 0:
                            ShowOutput("It is Thursday")
                            break;
        default:
            ShowOutput("It is some other day")
            break;
    }
}
const askname=()=>{

do {
   var userName=    prompt("Please enter your name")
} while (userName==="" || userName.length<3 || userName==null);
   ShowOutput(userName)
}