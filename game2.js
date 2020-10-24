user_name_1=localStorage.getItem("user_1");//fetching value from local Storage keys and assigning to new variables for webpage 2//
user_name_2=localStorage.getItem("user_2");
user_1_score=0;//setting default score as 0//
user_2_score=0;
document.getElementById("playername1").innerHTML=user_name_1+":&nbsp;";//adding values/names to the HTML scoreboard Id's Syna://
document.getElementById("playername2").innerHTML=user_name_2+":&nbsp;";
document.getElementById("playerscore1").innerHTML=user_1_score;
document.getElementById("playerscore2").innerHTML=user_2_score;
document.getElementById("player_que").innerHTML="Question Turn: "+user_name_1; //setting user 1 as the first player to ask question//
document.getElementById("player_ans").innerHTML="Answer Turn: "+user_name_2; //setting user 2 as the first player to answer the question asked by player 1//

function send_wordque()
{
    word=document.getElementById("word_que").value;
    getword=word.toLowerCase();
    console.log(getword);
    charat1=getword.charAt(1);
    console.log(charat1);
    positionat2=Math.floor(word.length/2);//getting the position of the letter//
    console.log(positionat2);
    charat2=getword.charAt(positionat2);
    console.log(charat2);
    charat3=getword.charAt(word.length-1);
    console.log(charat3);
    removecharat1=getword.replace(charat1,"_");
    removecharat2=removecharat1.replace(charat2,"_");
    removecharat3=removecharat2.replace(charat3,"_");
    console.log(removecharat3);
    questionword="<h4 id='word_display'>Que:"+removecharat3+"</h4>";
    input_tag="<input placeholder='type your answer' type='text' id='ans_input'>";
    button_tag="<br><br><button class='btn btn-info' onclick='check()'>Check your Answer</button>";
    row=questionword+input_tag+button_tag;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word_que").value="";
}

question_turn="player_1";
answer_turn="player_2";

function check()
{
getanswer=document.getElementById("ans_input").value;
answer=getanswer.toLowerCase();
console.log(answer);
if (answer==getword)
{
    if (answer_turn=="player_1")
    {
        user_1_score=user_1_score+1;
        document.getElementById("playerscore1").innerHTML=user_1_score;

    }
    else
    {
        user_2_score=user_2_score+1;
        document.getElementById("playerscore2").innerHTML=user_2_score;
    }
}
if (question_turn=="player_1")
{
    question_turn="player_2"
    document.getElementById("player_que").innerHTML="Question Turn: "+user_name_2;
}
else
{
    question_turn="player_1"
    document.getElementById("player_que").innerHTML="Question Turn: "+user_name_1;
}
if (answer_turn=="player_1")
{
    answer_turn="player_2"
    document.getElementById("player_ans").innerHTML="Answer Turn: "+user_name_2;
}
else
{
    answer_turn="player_1"
    document.getElementById("player_ans").innerHTML="Answer Turn: "+user_name_1;
}
document.getElementById("output").innerHTML="";
}
