function marathonTime(){

  var time = prompt("What is your marathon time?");

  if(time<4){
    alert("You are fast!");
  } else if(time>=4 && < 5){
    alert("Your time is average");
  } else {
    alert("You have got room to improve");
  }
}

marathonTime();
