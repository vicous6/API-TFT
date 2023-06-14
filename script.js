window.addEventListener("DOMContentLoaded", function() {

    let truc = window.location.href;

    console.log("cocui")
         let puid;
       
         let games = []
    let buttonLOL = document.getElementById("lol");
    buttonLOL.addEventListener("click", function() {
        
        let input = document.getElementById("input").value
        console.log(input);

        fetch(`https://euw1.api.riotgames.com/tft/summoner/v1/summoners/by-name/${input}?api_key=RGAPI-52b54917-de51-4847-abd8-a6cf297acb27`)
            .then(response => response.json())
            .then(data => {
                // console.log(data.puuid);
                puid = data.puuid
                  console.log(puid)
                
                
               

            })




    })
    
    let buttonLOL2 = document.getElementById("lol2");
    buttonLOL2.addEventListener("click", function() {
        
                let url1 = "https://europe.api.riotgames.com/tft/match/v1/matches/by-puuid/";
                let url2 = "/ids?start=0&count=15&api_key=RGAPI-52b54917-de51-4847-abd8-a6cf297acb27"
                let url = url1 + puid + url2
                console.log(url);
                
     fetch(url)
                
                    .then(response => response.json())
                    .then(data => {
                     
                        console.log(data);
                        
                        for(let i = 0 ; i < data.length ; i++){
                            games.push(data[i])
                            console.log(data[i])
                        }
console.log(games)
                    })

  

})

 let buttonLOL3 = document.getElementById("lol3");
 buttonLOL3.addEventListener("click", function() {
          let nombreDeTop1 = 0
          let nombreDeTop2 = 0
          let nombreDeTop3 = 0
          let nombreDeTop4 = 0
          let nombreDeTop5 = 0
          let nombreDeTop6 = 0
          let nombreDeTop7 = 0
          let nombreDeTop8 = 0
                let url1 = "https://europe.api.riotgames.com/tft/match/v1/matches/";
                let url2 = "?api_key=RGAPI-52b54917-de51-4847-abd8-a6cf297acb27"
                
                // pour chaque game trouvé
                for(let i = 0 ; i < games.length; i++){
                    // console.log(i)
                    let url = url1 + games[i] + url2
                    
                    // stocke le temps de jeu de chaque joueur
                   
                      fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        // pour chache joueur dans la game /
                            for(let j = 0 ; j < data.info.participants.length; j++){
                                // push le temps de jeu dans le tableau
                                // console.log("game" + i)
                                // console.log(tabTime)
                                // si le joueur est le joueur selectioner
                                if(data.info.participants[j].puuid === puid){
                                //  console.log(data);    
                                //  console.log(data.info.participants[j].time_eliminated);
                                 console.log(data.info.participants[j].placement)
                                  if(data.info.participants[j].placement=== 1){
                                      nombreDeTop1++
                                  }else if(data.info.participants[j].placement=== 2){
                                      nombreDeTop2++
                                  }else if(data.info.participants[j].placement=== 3){
                                      nombreDeTop3++
                                  }else if(data.info.participants[j].placement=== 4){
                                      nombreDeTop4++
                                  }else if(data.info.participants[j].placement=== 5){
                                      nombreDeTop5++
                                  }else if(data.info.participants[j].placement=== 6){
                                      nombreDeTop6++
                                  }else if(data.info.participants[j].placement=== 7){
                                      nombreDeTop7++
                                  }else if(data.info.participants[j].placement=== 8){
                                      nombreDeTop8++
                                  }
                                  
                                }

                                //  si on est au dernier joueur on check
                               
                            }
                        
                        
                      
                    })
                    
                  
                }
                setTimeout(function() {
   let truc = document.createElement("div")
   let poucent1 = Math.round((nombreDeTop1 / 15 * 100) * 100) / 100  
   truc.innerHTML = "Pourcentage de top 1 sur les 15 dernières games: " + poucent1+ " % ("+ nombreDeTop1 + "game(s) )" 
   let machin = document.getElementsByTagName("section")[0].appendChild(truc)
   
   let truc2 = document.createElement("div")
   let poucent2 = Math.round((nombreDeTop2 / 15 * 100) * 100) / 100  
   truc2.innerHTML = "Pourcentage de top 2 sur les 15 dernières games: " + poucent2+ " % ("+ nombreDeTop2 + "game(s) )" 
   let machin2 = document.getElementsByTagName("section")[0].appendChild(truc2)
   
   let truc3 = document.createElement("div")
   let poucent3 = Math.round((nombreDeTop3 / 15 * 100) * 100) / 100  
   truc3.innerHTML = "Pourcentage de top 3 sur les 15 dernières games: " + poucent3 + " % ("+ nombreDeTop3 + "game(s) )" 
   let machin3 = document.getElementsByTagName("section")[0].appendChild(truc3)
   
   let truc4 = document.createElement("div")
   let poucent4= Math.round((nombreDeTop4 / 15 * 100) * 100) / 100  
   truc4.innerHTML = "Pourcentage de top 4 sur les 15 dernières games: " + poucent4 + " % ("+ nombreDeTop4 + "game(s) )" 
   let machin4 = document.getElementsByTagName("section")[0].appendChild(truc4)
   
   let truc5 = document.createElement("div")
   let poucent5 = Math.round((nombreDeTop5 / 15 * 100) * 100) / 100  
   truc5.innerHTML = "Pourcentage de top 5 sur les 15 dernières games: " + poucent5 + " % ("+ nombreDeTop5 + "game(s) )" 
   let machin5 = document.getElementsByTagName("section")[0].appendChild(truc5)
   
   let truc6 = document.createElement("div")
   let poucent6 = Math.round((nombreDeTop6 / 15 * 100) * 100) / 100  
   truc6.innerHTML = "Pourcentage de top 6 sur les 15 dernières games: " + poucent6 + " % ("+ nombreDeTop6 + "game(s) )" 
   let machin6 = document.getElementsByTagName("section")[0].appendChild(truc6)
   
   let truc7 = document.createElement("div")
   let poucent7 = Math.round((nombreDeTop7 / 15 * 100) * 100) / 100  
   truc7.innerHTML = "Pourcentage de top 7 sur les 15 dernières games: " + poucent7 + " % ("+ nombreDeTop7 + "game(s) )" 
   let machin7 = document.getElementsByTagName("section")[0].appendChild(truc7)
   
   let truc8 = document.createElement("div")
   let poucent8 = Math.round((nombreDeTop8 / 15 * 100) * 100) / 100  
   truc8.innerHTML = "Pourcentage de top 8 sur les 15 dernières games: " + poucent8 + " % ("+ nombreDeTop8 + "game(s) )" 
   let machin8 = document.getElementsByTagName("section")[0].appendChild(truc8)
   
   
   let nombreVictoires = nombreDeTop1+nombreDeTop2+nombreDeTop3+nombreDeTop4
   let poucentVictoire =  Math.round((nombreVictoires/15*100) * 100) / 100  
   let truc9 = document.createElement("div")
   truc9.innerHTML = "Pourcentage de Win sur les 15 dernières games: " + poucentVictoire + " % ("+ nombreVictoires + "game(s) )" 
   let machin9 = document.getElementsByTagName("section")[0].appendChild(truc9)
   }, 2200);
   
   })
   
})