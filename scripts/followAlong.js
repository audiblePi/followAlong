var link = " ";
var nodeCount;

function openScoreDIV(id)
{
    if (nodeCount == 1)
    {
        close(id)
        return;
    }
    if (nodeCount > 0)
    {
        close(id);
    }
    var boxId = "box" + id;
    var currentNode = document.getElementById(boxId);
    var newNode = document.createElement("p");
    
    nodeCount++;
    if (currentNode.childNodes.length > 0)
        close(id);
    
    link = "<center><img width='700' src='png/scan0" + id + ".png'></center>";
    newNode.innerHTML = link;
    currentNode.setAttribute("class", "videocontainer");
    currentNode.appendChild(newNode);
    newNode.addEventListener("click", function() { expand(id); }, false);
}//end openScoreDIV()


function openVideoDIV(id)
{
    if (nodeCount > 0)
    {
        close(id);
    }
        
    var boxId = "box" + id;
    var currentNode = document.getElementById(boxId);
    var newNode = document.createElement("p");
    nodeCount++;
    if (currentNode.childNodes.length > 0)
        close(id);
    
    link = "<center><video width='100%' controls><source src='http://www.realdealent.org/dev/followAlong/mp4/0" + id + "_100.mp4'></video></center>";
    newNode.innerHTML = link;
    currentNode.setAttribute("class", "videocontainer");
    currentNode.appendChild(newNode);
}//end openVideoDIV()

function openVideo120(id)
{
    if (nodeCount > 0)
    {
        close(id);
    }
        
    var boxId = "box" + id;
    var currentNode = document.getElementById(boxId);
    var newNode = document.createElement("p");
    nodeCount++;
    if (currentNode.childNodes.length > 0)
        close(id);
    
    link = "<center><video width='100%' controls><source src='http://www.realdealent.org/dev/followAlong/mp4/0" + id + "_120.mp4'></video></center>";
    newNode.innerHTML = link;
    currentNode.setAttribute("class", "videocontainer");
    currentNode.appendChild(newNode);
}//end openVideo120()

function expand(id)
{
    //window.alert(link);
    newWindow = window.open('', '', 'toolbar=no, menubar=no, resizable=yes'); 
    newWindow.document.write("<head><title>Follow Along!</title></head>");
    newWindow.document.write("<body onClick='window.close()'><center><img width='100%' src='png/scan0" + id + ".png'></center></body");
}

function close(id)
{
    var boxId = "box" + id;
    var currentNode = document.getElementById(boxId);
    var child = currentNode.firstChild;
    currentNode.removeChild(child);
    nodeCount = 0;
}//en close()

function hover(id)
{
    var buttonId = "button" + id;
    var button = document.getElementById(buttonId);
    var colors = new Array();
    colors[0] = " ";
    colors[1] = "#ffffff";
    colors[2] = "yellow";
    colors[3] = "orange";
    colors[4] = "green";
    colors[5] = "purple";
    colors[6] = "blue";
    colors[7] = "red";
    colors[8] = "brown";
    colors[9] = "black";
    //for (i=1; i<10; i++)
        button.style.backgroundColor = colors[id];
}//end hover()

function hoverOff(id)
{
    var buttonId = "button" + id;
    var button = document.getElementById(buttonId);
    button.style.backgroundColor = "";
}//end hoverOff()

function buildMenu()
{
    nodeCount = 0;
    var buttonArray = new Array();
    buttonArray[0] = " ";
    buttonArray[1] = "White Belt - Hot Cross Buns";
    buttonArray[2] = "Yellow Belt - Gently Sleep";
    buttonArray[3] = "Orange Belt - Merrily We Roll Along";
    buttonArray[4] = "Green Belt - It's Raining";
    buttonArray[5] = "Purple Belt - Old MacDonald Had A Farm";
    buttonArray[6] = "Blue Belt - When The Saints";
    buttonArray[7] = "Red Belt - Twinkle, Twinkle, Little Star";
    buttonArray[8] = "Brown Belt - Amazing Grace";
    buttonArray[9] = "Black Belt - Ode To Joy";
    
    var colors = new Array();
    colors[0] = " ";
    colors[1] = "#ffffff";
    colors[2] = "yellow";
    colors[3] = "orange";
    colors[4] = "green";
    colors[5] = "purple";
    colors[6] = "blue";
    colors[7] = "red";
    colors[8] = "brown";
    colors[9] = "black";
    document.getElementById("home").removeChild(document.getElementById("homePNG"));
    
    for (var i=1; i<10; i++)
    {
        var currentDIV = document.getElementById(i);
        var newButton = document.createElement("div");
        var buttonId = "button" + i;
        var innerButtons = "<button class='mainButton' id='scoreButton" + i + "'>" + buttonArray[i] + "</button>" +           "<button class='innerButton' id='video100Btn" + i + "'>Slow</button>" +
        	"<button class='innerButton' id='video120Btn" + i + "'>Fast</button>";
        
        newButton.setAttribute("id", buttonId);
        newButton.setAttribute("class", "button");
        newButton.innerHTML = innerButtons;
        currentDIV.appendChild(newButton);
    }//end for()   
    
    document.getElementById("scoreButton1").addEventListener("click", function() { openScoreDIV("1"); }, false);
    document.getElementById("scoreButton2").addEventListener("click", function() { openScoreDIV("2"); }, false);
    document.getElementById("scoreButton3").addEventListener("click", function() { openScoreDIV("3"); }, false);
    document.getElementById("scoreButton4").addEventListener("click", function() { openScoreDIV("4"); }, false);
    document.getElementById("scoreButton5").addEventListener("click", function() { openScoreDIV("5"); }, false);
    document.getElementById("scoreButton6").addEventListener("click", function() { openScoreDIV("6"); }, false);
    document.getElementById("scoreButton7").addEventListener("click", function() { openScoreDIV("7"); }, false);
    document.getElementById("scoreButton8").addEventListener("click", function() { openScoreDIV("8"); }, false);
    document.getElementById("scoreButton9").addEventListener("click", function() { openScoreDIV("9"); }, false);
    
    document.getElementById("video100Btn1").addEventListener("click", function() { openVideoDIV("1"); }, false);
    document.getElementById("video100Btn2").addEventListener("click", function() { openVideoDIV("2"); }, false);
    document.getElementById("video100Btn3").addEventListener("click", function() { openVideoDIV("3"); }, false);
    document.getElementById("video100Btn4").addEventListener("click", function() { openVideoDIV("4"); }, false);
    document.getElementById("video100Btn5").addEventListener("click", function() { openVideoDIV("5"); }, false);
    document.getElementById("video100Btn6").addEventListener("click", function() { openVideoDIV("6"); }, false);
    document.getElementById("video100Btn7").addEventListener("click", function() { openVideoDIV("7"); }, false);
    document.getElementById("video100Btn8").addEventListener("click", function() { openVideoDIV("8"); }, false);
    document.getElementById("video100Btn9").addEventListener("click", function() { openVideoDIV("9"); }, false);
    
    document.getElementById("video120Btn1").addEventListener("click", function() { openVideo120("1"); }, false);
    document.getElementById("video120Btn2").addEventListener("click", function() { openVideo120("2"); }, false);
    document.getElementById("video120Btn3").addEventListener("click", function() { openVideo120("3"); }, false);
    document.getElementById("video120Btn4").addEventListener("click", function() { openVideo120("4"); }, false);
    document.getElementById("video120Btn5").addEventListener("click", function() { openVideo120("5"); }, false);
    document.getElementById("video120Btn6").addEventListener("click", function() { openVideo120("6"); }, false);
    document.getElementById("video120Btn7").addEventListener("click", function() { openVideo120("7"); }, false);
    document.getElementById("video120Btn8").addEventListener("click", function() { openVideo120("8"); }, false);
    document.getElementById("video120Btn9").addEventListener("click", function() { openVideo120("9"); }, false);
    
    document.getElementById("button1").addEventListener("mouseover", function() { hover("1"); }, false);
    document.getElementById("button2").addEventListener("mouseover", function() { hover("2"); }, false);
    document.getElementById("button3").addEventListener("mouseover", function() { hover("3"); }, false);
    document.getElementById("button4").addEventListener("mouseover", function() { hover("4"); }, false);
    document.getElementById("button5").addEventListener("mouseover", function() { hover("5"); }, false);
    document.getElementById("button6").addEventListener("mouseover", function() { hover("6"); }, false);
    document.getElementById("button7").addEventListener("mouseover", function() { hover("7"); }, false);
    document.getElementById("button8").addEventListener("mouseover", function() { hover("8"); }, false);
    document.getElementById("button9").addEventListener("mouseover", function() { hover("9"); }, false);
    
    document.getElementById("button1").addEventListener("mouseout", function() { hoverOff("1"); }, false);
    document.getElementById("button2").addEventListener("mouseout", function() { hoverOff("2"); }, false);
    document.getElementById("button3").addEventListener("mouseout", function() { hoverOff("3"); }, false);
    document.getElementById("button4").addEventListener("mouseout", function() { hoverOff("4"); }, false);
    document.getElementById("button5").addEventListener("mouseout", function() { hoverOff("5"); }, false);
    document.getElementById("button6").addEventListener("mouseout", function() { hoverOff("6"); }, false);
    document.getElementById("button7").addEventListener("mouseout", function() { hoverOff("7"); }, false);
    document.getElementById("button8").addEventListener("mouseout", function() { hoverOff("8"); }, false);
    document.getElementById("button9").addEventListener("mouseout", function() { hoverOff("9"); }, false);

}//end buildMenu()

	 
function start()
{
    document.getElementById("homePNG").addEventListener("click", function() { buildMenu(); }, false);
} // end function start()

window.addEventListener( "load", start, false );