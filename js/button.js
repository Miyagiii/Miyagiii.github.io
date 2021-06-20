var i = 0;
var index = 0;
var speed = 50;
var txt;
function clear1()
{
    index = 0;

    if(document.getElementsByClassName("button")[index].innerHTML =="Click to reveal!")
    {
        document.getElementsByClassName("button")[index].innerHTML = "";
    }
    document.getElementsByClassName("button")[index].classList.add("clicked");
    txt = 'I am a 21 year old self taught developer from Birmingham with experience in different programming languages. I have been developing software since I was 14 and have skills in both frontend and backend development. I have a strong passion for software development and enjoy a challenge!';
    typeWriter();
}
function clear2()
{
    index = 1;

    if(document.getElementsByClassName("button")[index].innerHTML =="Click to reveal!")
    {
        document.getElementsByClassName("button")[index].innerHTML = "";
    }
    document.getElementsByClassName("button")[index].classList.add("clicked");
    txt = 'test';
    typeWriter();
}
function typeWriter() {
  if (i < txt.length) {
      
    document.getElementsByClassName("button")[index].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}