// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = 2

switch (month) {
    case 1:
        console.log("Jan");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:
        console.log("March");
        break;

    default:
        console.log("Defaulter");
        
        break;
}

//we can also pass string values

let months = "Feb"

switch (months) {
    case "Jan":
        console.log("First month");
        break;
    case "Feb":
        console.log("Second month");
        break;
    case "March":
        console.log("third month");
        break;

    default:
        console.log("Defaulter");
        break;
}