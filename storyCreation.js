$(document).ready(function(){
    $("#submit").click(function(){gets()});
    $("#reset").click(function(){rst()});
  });
  var name;
  var char;
  var adv;
  var adj;

  function rst() {
    $("#story").html(" ");}
  
  function gets(){
    name = $("#person").val();
    char = $("#character").val();
    adv = $("#adverb").val();
    adj = $("#adjective").val();
    story(name,char,adv,adj); 
  }
  
  function story(name,char,adv,adj){
    var story = "<h3><span>"+name+"</span> got Lesson</h3>"+"<br/>"+
    "Once upon a time I was sitting with my friend <span class=\"highlight\">"+char+"</span> at a restuarant "+
    "<span class=\"highlight\">"+adv+"</span>. "+
    "Suddenly A a child came there, selling a bunch of flowers who looked apparently <span class=\"highlight\">"+adj+"</span>. "+
    "<span class=\"highlight\">"+char+"</span> called that child who was <span class=\"highlight\">"+adj+"</span> "+
    "and asked him who sit with us. <span class=\"highlight\">"+char+"</span> ordered food for him and that little boy got so happy. "+
    "Child ate the food, thanked us and left. Then <span class=\"highlight\">"+char+"</span> said to me “<span class=\"highlight\">"+name+"</span>, You looked the smile on his face because of us, that is best feeling in the world“. "+
    "That was good lesson that <span class=\"highlight\">"+char+"</span> gave me that how to find happiness through these small acts."
    $("#story").html(story);
  }
  