function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
  }
      
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    var degree = time*360;
    var secondDegree = degree/60 - 180;
    var minuteDegree = degree/(60*60) - 180;
    var hourDegree = degree/(60*60*6)*0.5 - 180;
    document.querySelector("#seconds").style = "transform: rotate("+secondDegree+"deg)";
    document.querySelector("#minutes").style = "transform: rotate("+minuteDegree+"deg)";
    document.querySelector("#hour").style = "transform: rotate("+hourDegree+"deg)";
  }, 1000);
  