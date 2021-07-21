class Quiz {
  constructor(){
    this.title = createElement('h1')
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();  
    }
  }

  play(){
    //write code here to hide question elements
    

    //write code to change the background color here
       
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    this.title.html("Result Time");
    this.title.position(350, 0);


    //call getContestantInfo( ) here
contestant.getPlayerInfo();



    //write condition to check if contestantInfor is not 
    

    //write code to add a note here
    if(allContestants!== undefined){
      fill("blue")
      textSize(20)
      text("Note : Contestant who answered correct are highlighted in green color",130,230)

      
      for(var plr in allContestants){
        var correctAns ="2"
        if(correctAns === allContestants[plr].answer){
          fill("green")
        }else{
          fill("red")
        }
      }
        
      }
    }


    //write code to highlight contest who answered correctly
 

}
