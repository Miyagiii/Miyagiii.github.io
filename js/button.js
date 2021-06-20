var i = 0;
var speed = 20;
var txt;
var button;
var running = false;

function clear1()
{

  if(!running)
  {
    running = true;
    button = document.getElementById("button1");
    if(button.innerHTML =="Click to reveal!")
    {
        button.innerHTML = "";
    }
    button.classList.add("clicked");
    txt = 'I am a 21 year old self taught developer from Birmingham with experience in different programming languages. I have been developing software since I was 14 and have skills in both frontend and backend development. I have a strong passion for software development and enjoy a challenge!';
    typeWriter();
  }
}
function clear2()
{
  if(!running)
  {
    running = true;
    button = document.getElementById("button2");
    if(button.innerHTML =="Click to reveal!")
    {
        button.innerHTML = "";
    }
    button.classList.add("clicked");
    txt = "⚪ Completed My BTEC Level 3 Exetended Diploma in IT with D*D*D*<br/><br/>⚪ Completed MTA Security Fundementals<br/><br/>⚪ Completed MTA Introduction to Python<br/><br/>⚪ I have completed several Freelance Projects";
    typeWriter();
  }
}

function clear3()
{
  if(!running)
  {
    running = true;
    button = document.getElementById("button3");
    if(button.innerHTML =="Click to reveal!")
    {
        button.innerHTML = "";
    }
    button.classList.add("clicked");
    txt = "My goals are to take my first into the programming industry and gain experience. My long term goals are to progress with a company and become a senior developer leading my own interesting projects with the creative freedom to make a real difference. ";
    typeWriter();
  }
}

function typeWriter() {
  if (i < txt.length) {
    if(txt.charAt(i) == "<"){
      button.innerHTML += "<br/>";
      i+=4;
    }else{ 
    button.innerHTML += txt.charAt(i);
    }
    i++;
    setTimeout(typeWriter, speed);
  }else{
    running = false;
    i = 0;
  }
}