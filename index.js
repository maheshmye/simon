var colindex=["green","red","yellow","blue"]
var rancol
var mancol
var rangamepat=[]
var mangamepat=[]
level=0
started=false
$(document).keypress(function()
{
    if(!started)
    {
        $("#level-title").text("level - "+level)
    }
    ranumgen()
    started=true
})
function ranumgen()
{    level++
    $("#level-title").text("level - "+level)
     mangamepat=[]
    var ran=Math.floor(Math.random()*4)
    colorsel=colindex[ran]
     rangamepat.push(colorsel)
    console.log(colorsel)
    $("."+colorsel).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100)
    playsound(colorsel)
}
$(".btn").click(function(){
    var manclicked=$(this).attr("id")
    mangamepat.push(manclicked)
    playsound(manclicked)
    $("."+manclicked).addClass("pressed")
    setTimeout(function()
    {
        $("."+manclicked).removeClass("pressed")
    },200)
    checkAnswer(mangamepat.length-1)
})
function checkAnswer(s){
if(mangamepat[s]===rangamepat[s])
{    console.log("sucess")
     if(mangamepat.length===rangamepat.length)
     {
         setTimeout(function()
         {
            ranumgen() 
         },1000)
     }}
else{
    $("body").addClass("game-over")
    setTimeout(function(){
        $("body").removeClass("game-over")
    },300)
    $("#level-title").text("game-over press any key to restart")
    var sound=new Audio("sounds/wrong.mp3")
    sound.play()
    startover()
}}
function playsound(s)
{
    var mansound=new Audio("sounds/"+s+".mp3")
    mansound.play()
}

function startover()
{
    level=0
    rangamepat=[]
    started=false
}