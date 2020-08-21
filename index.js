var old = '00'
var ne
var queen = {
    position: {
        x: 0,
        y: 0
    }
};


function move(numberOfSteps, direction) {
    let temp;
    let temp1;
    switch (direction) {
        case "E":
            temp = queen.position.y + numberOfSteps;
            if (temp > 8 || temp < 0) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.y = temp;
            }
            break;

        case "W":
            temp = queen.position.y - numberOfSteps;
            if (temp > 8 || temp < 0) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.y = temp;
            }
            break;

        case "S":
            temp = queen.position.x + numberOfSteps;
            if (temp > 8 || temp < 0) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
            }
            break;

        case "N":
            temp = queen.position.x - numberOfSteps;
            if (temp > 8 || temp < 0) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
            }
            break;

        case "SE":
            temp = queen.position.x + numberOfSteps;
            temp1 = queen.position.y + numberOfSteps;
            if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "NW":
            temp = queen.position.x - numberOfSteps;
            temp1 = queen.position.y - numberOfSteps;
            if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "SW":
            temp = queen.position.x + numberOfSteps;
            temp1 = queen.position.y - numberOfSteps;
            if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        case "NE":
            temp = queen.position.x - numberOfSteps;
            temp1 = queen.position.y + numberOfSteps;
            if ((temp > 8 || temp < 0) || (temp1 > 8 || temp1 < 0)) {
                console.log("Out of boundry");
                document.write("Out of boundry");
            } else {
                queen.position.x = temp;
                queen.position.y = temp1;
            }
            break;

        default:
            document.write("Invalid Input");
    }

}

function play() {
    var value = document.getElementById('position').value;
    var input = value.split(" ");
    input.forEach(num => {
        let number = Number(num.slice(num.length - 1));
        let dir = num.slice(0, num.length - 1);
        move(number, dir.toUpperCase())
    });
    // making the font size to normal of the queen's previous ppsition 
    ne = queen.position.x.toString() + queen.position.y.toString()
    var selector = document.getElementById(old)
    selector.style.fontSize = '15px'
    old = ne
    // making the font size to 35px as it indicate the queen's current position
    var selector = document.getElementById(old)
    selector.style.fontSize = '35px'


}
// making the font size to 35px as it indicate the queen's initial position
var selector = document.getElementById(old)
selector.style.fontSize = '35px'