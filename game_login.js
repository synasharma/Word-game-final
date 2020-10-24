function add_users()
{
player_1name=document.getElementById("player_1_username").value;
player_2name=document.getElementById("player_2_username").value;
localStorage.setItem("user_1",player_1name);
localStorage.setItem("user_2",player_2name);
window.location="game_page.html";
}