//Heros

Bob = document.getElementById("Bob")
Boi = document.getElementById("Boi")
Destructor = document.getElementById("Destructor")
RandomMan = document.getElementById("Random_Man")

//Mobs

MrTongue = document.getElementById("Tongue")
C5 = document.getElementById("C5")
Bobby = document.getElementById("Bobby")

//Pv Heros

PVBob = document.getElementById("PvBob")
PVBoi = document.getElementById("PvBoi")
PVDestructor = document.getElementById("PvDestructor")
PVRandomMan = document.getElementById("PvRandom_Man")

//image heros

//récupération des images des vaisseaux
imgBob = document.getElementById("Bob");
imgBoi = document.getElementById("Boi");
imgDestructor = document.getElementById("Destructor");
imgRM = document.getElementById("RandomMan");

//Pv Mobs

PvTongue = document.getElementById("PvTongue")
PvC5 = document.getElementById("PvC5")
PvBobby = document.getElementById("PvBobby")

//Boutons

AttaqueBob = document.getElementById("boutonAttaqueBob")
AttaqueSpeBob = document.getElementById("boutonAttSpeBob")
DefenseBob = document.getElementById("boutonDefenseBob")

AttaqueBoi = document.getElementById("boutonAttaqueBoi")
AttaqueSpeBoi = document.getElementById("boutonAttSpeBoi")
DefenseBoi = document.getElementById("boutonDefendreBoi")

AttaqueDestructor = document.getElementById("boutonAttaqueDestructor")
AttaqueSpeDestructor = document.getElementById("boutonAttSpeDestructor")
DefenseDestructor = document.getElementById("boutonDefenseDestructor")

AttaqueRM = document.getElementById("boutonAttaqueRM")
AttaqueSpeRM = document.getElementById("boutonAttSpeRM")
DefenseRM = document.getElementById("boutonDenfenseRM")

//detection des appuis boutons
boutonABob.addEventListener('click', boutonAttaqueBob)
boutonDBob.addEventListener('click', boutonDefendreBob)
boutonASBob.addEventListener('click', boutonSpeBob)

boutonABoi.addEventListener('click', boutonAttaqueBoi)
boutonDBoi.addEventListener('click', boutonDefendreBoi)
boutonASBoi.addEventListener('click', boutonSpeBoi)

boutonADest.addEventListener('click', boutonAttaqueDestructor)
boutonDDest.addEventListener('click', boutonDefendreDestructor)
boutonASDest.addEventListener('click', boutonSpeDestructor)


boutonARM.addEventListener('click', boutonAttaqueRM)
boutonDRM.addEventListener('click', boutonDefendreRM)
boutonASRM.addEventListener('click', boutonSpeRM)

//prevois d'enlever les boutons utilisés

boutonUtilisePrecedentBob=999
boutonUtilisePrecedentBoi=999
boutonUtilisePrecedentDestructor=999
boutonUtilisePrecedentRM=999

//Zone Affichage

Affichage = document.getElementById("Affichage")

var tour = 0;
HerosVivants = 4;
MobsVivants = 3;
tourMob=1;
MobSelection=1;
DefBob = false;
DefBoi = false;
DefDest = false;
DefRM = false;
Tonguevivant = true;
C5vivant = true;
Bobbyvivant = true;

function intro() {

    //on cache les boutons non désirés et des stats de vies des ennemis au début de la page
    boutonAttaqueBoi.hidden = true;
    boutonDefendreBoi.hidden = true;
    boutonSpeBoi.hidden = true;
    boutonAttaqueDestructor.hidden = true;
    boutonDefendreDestructor.hidden = true;
    boutonSpeDestructor.hidden = true;
    boutonAttaqueRM.hidden = true;
    boutonDefendreRM.hidden = true;
    boutonSpeRM.hidden = true;
   
    document.getElementById("StatTongue").hidden = true; 
    document.getElementById("StatC5").hidden = true; 
    document.getElementById("StatBobby").hidden = true; 
  
  
    Affichage.innerHTML = "Vous, bob, tombez sur votre Nemesis, Bobby" + "</br>" + "Vous allez devoir vous battre au côté de ces trois... Trucs qui vous accompagnent";
  
  }
  //Choix adversaire
  MrTongue.onclick = function() {

    Affichage.innerHTML = "Vous visez Mr.Tongue";
    console.log("SELECT 1")
    MobSelection=1;
  }
  
  C5.onclick = function() {
  
    Affichage.innerHTML = "Vous avez choisi C5 pour votre attaque";
    console.log("SELECT 2")
    MobSelection=2;
  
  }
  
  Bobby.onclick = function() {
  
    Affichage.innerHTML = "Vous allez attaquer Bobby";
    console.log("SELECT 3")
    MobSelection=3;
  
  }

//bouton attaque perso 1

function boutonAttaqueBob() {
    degatsSurMonstres();
    tour ++;
    //mise en buffer de l'action utilisée pour le tour prochain
    boutonUtilisePrecedentBob=0;
    console.log("action utilisée : " + boutonUtilisePrecedentBob);
    imgBob.src = "img/Bob_The_Buff_Man.gif"
    //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
    boutonAttaqueBob.disabled=true;
    boutonDefendreBob.disabled=true;
    boutonSpeBob.disabled=true;
    setTimeout(function(){
      imgBob.src="img/Bob_Attente.png"; 
      finTourPerso1();
      boutonAttaqueBob.disabled=false;
      boutonDefendreBob.disabled=false;
      boutonSpeBob.disabled=false;
          
    },1500);
    console.log("c'est le tour du héros " + tour);
  
  }
  
  //bouton attaque perso 2
  
  function boutonAttaqueBoi() {
  
    degatsSurMonstres();
    tour ++;
    //mise en buffer de l'action utilisée pour le tour prochain
    boutonUtilisePrecedentBoi=0;
    console.log("action utilisée : " + boutonUtilisePrecedentBoi);
    document.getElementById("Boi").src = "The_Boi.gif"
    //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
    boutonAttaqueBoi.disabled=true;
    boutonDefendreBoi.disabled=true;
    boutonSpeBoi.disabled=true;
    setTimeout(function(){
      document.getElementById("Boi").src="img/Da_Boi.png"; 
      finTourPerso2();
      boutonAttaqueBoi.disabled=false;
      boutonDefendreBoi.disabled=false;
      boutonSpeBoi.disabled=false;
        
    },1500);  
    
    console.log("c'est le tour du héros " + tour);
  
  }
  
  //bouton attaque perso 3
  
  function boutonAttaqueDestructor() {
  
    degatsSurMonstres();
    tour ++;
    //mise en buffer de l'action utilisée pour le tour prochain
    boutonUtilisePrecedentDestructor=0;
    document.getElementById("Destructor").src = "img/Destructor2000.gif"
    //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
    boutonAttaqueDestructor.disabled=true;
    boutonDefendreDestructor.disabled=true;
    boutonSpeDestructor.disabled=true;
    setTimeout(function(){
      document.getElementById("Destructor").src="img/Destructor_attente.png"; 
      finTourPerso3();
      boutonAttaqueDestructor.disabled=false;
      boutonDefendreDestructor.disabled=false;
      boutonSpeDestructor.disabled=false;
          
    },1500);  
    console.log("c'est le tour du héros " + tour);
  
  }
  
  //bouton attaque perso 4
  
  function boutonAttaqueRM() {
  
    degatsSurMonstres();
    tour ++;
    //mise en buffer de l'action utilisée pour le tour prochain
    boutonUtilisePrecedentRM=0;
    document.getElementById("RandomMan").src = "img/Random-Man.gif"
    //on attends la fin du gif en désactivant tous les boutons, puis on les réactive et on passe au tour suivant
    boutonAttaqueRM.disabled=true;
    boutonDefendreRM.disabled=true;
    boutonSpeRM.disabled=true;
    setTimeout(function(){
      document.getElementById("vaisseau4").src="img/random-man_attente.png"; 
      finTourPerso4();
      boutonAttaqueRM.disabled=false;
      boutonDefendreRM.disabled=false;
      boutonSpeRM.disabled=false;
          
    },1500);  
    console.log("c'est le tour du héros " + tour);
  
  }
  
  
  
  
  //bouton défendre
  function boutonDefendreBob() {
    Affichage.innerHTML = "Bob se met devant et contracte pour encaisser les chocs" ;
    //activation de la défense
    DefBob=true;
    tour ++;
    boutonUtilisePrecedentBob=1;
    finTourPerso1();
    console.log("c'est le tour du héros " + tour);
  }
  
  function boutonDefendreBoi() {
    Affichage.innerHTML = "Boi se tort dans tous les sens pour eviter les attaques" ;
    DefBoi=true;
    tour ++;
    boutonUtilisePrecedentBoi=1;
    finTourPerso2();
    console.log("c'est le tour du héros " + tour);
  }
  
  function boutonDefendreDestructor() {
    Affichage.innerHTML = "Destructor dévie l'attaque grâce a son katana" ;
    DefDest=true;
    tour ++;
    boutonUtilisePrecedentDestructor=1;
    finTourPerso3();
    console.log("c'est le tour du héros " + tour);
  }
  
  function boutonDefendreRM() {
    Affichage.innerHTML = "RandomMan se tourne sur le côté pour esquiver, tout simplement" ;
    DefRM=true;
    tour ++;
    boutonUtilisePrecedentRM=1;
    finTourPerso4();
    console.log("c'est le tour du héros " + tour);
  }
  
  
  //boutons actions spéciales
  function boutonSpeBoi() {
    //test s'il reste du mana
    if (manaBob.value>=5){
      Affichage.innerHTML="Il fouette avec son fouet élèctrique" +"</br>" + "</br>" + "Il fais 8 dégats à l'adversaire !"
      manaBoi.value=manaBoi.value -5;


      //test si monstre 1 mort
      if (PVTongue.innerHTML <= 0 && Tonvivant == true) {
        Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
        document.getElementById("mob1").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        Tonguevivant = false;
      }
      if (PVC5.innerHTML <= 0 && C5vivant == true) {
        Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
        document.getElementById("mob2").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        C5vivant = false;
  
      }
      if (PVBobby.innerHTML <= 0 && Bobbyvivant == true) {
        Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
        document.getElementById("mob3").hidden = true;
        monstresVivants=monstresVivants-1;
        mortMonstre();
        Bobbyvivant = false;
  
      }
      tour ++;
      boutonUtilisePrecedentBob=2;
      finTourPerso1();
      console.log("c'est le tour du héros " + tour);
    }
  
  
  
  }
  
  
  
  function boutonSpeBob() {
    //test s'il reste du mana
    if (manaBob.value>=10){
      Affichage.innerHTML="Bob utilise son laser pour voler la vie des ennemis" +"</br>" + "</br>" + "Il redonne 5PV a chaque membre de la team"
      manaBob.value=manaBob.value-10;
      
      //Vol de vie

      PvTongue.innerHTML = PvTongue.innerHTML - 5;
      PvC5.innerHTML = PvC5.innerHTML - 5;
      PvBobby.innerHTML = PvBobby.innerHTML - 5;

      //soin 
      PVBob.innerHTML = PVBoi.innerHTML - (-5);
      PVBoi.innerHTML = PVBoi.innerHTML - (-5);
      PVDestructor.innerHTML = PVBoi.innerHTML - (-5);
      PVRandomMan.innerHTML = PVBoi.innerHTML - (-5);
  
      //mise à jour des barres de vie
      rangeHeros2Recup.innerHTML = PVBoi.innerHTML;
      rangeHeros2Recup.value = PVBoi.innerHTML;
      
      //si vie supérieure à 100 après soin, on remet à 100
      if(PVBoi.innerHTML > 100) {
        PVBoi.innerHTML = 100;
  
        rangeHeros2Recup.innerHTML = 100;
        rangeHeros2Recup.value = 100;
  
      }
      
      tour ++;
      boutonUtilisePrecedentBoi=2;
      finTourPerso2();
      console.log("c'est le tour du héros " + tour);
    }
  
  
  
  }
  
  
  function boutonSpeDestructor() {
    if (manaBoi.value>=20){
      Affichage.innerHTML="Vaisseau 3 active son canon à particule, infligeant 15 dégtas à l'ennemi selectionné !"
      manaDestructor.value=manaDestructor.value-20;
  
      if (mobSelection==1){
        PVTongue.innerHTML = PVTongue.innerHTML - 15;
      //test si monstre 1 mort
        if (PVTongue.innerHTML <= 0 && Tonguevivant == true) {
          Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 1 !";
          document.getElementById("mob1").hidden = true;
          monstresVivants=monstresVivants-1;
          mortMonstre();
          Tonguevivant = false;
        }
      }
    
      if (mobSelection==2){
        PVC5.innerHTML = PVC5.innerHTML - 15;
    
        //test si monstre 2 mort
        if (PVC5.innerHTML <= 0 && C5vivant == true) {
          Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 2 !";
          document.getElementById("mob2").hidden = true;
          monstresVivants=monstresVivants-1;
          mortMonstre();
          C5vivant=false;
        }
      }
      if (mobSelection==3){
        vieBobbyRecup.innerHTML = vieBobbyRecup.innerHTML - 15;
    
          
        //test si monstre 3 mort
        if (vieBobbyRecup.innerHTML <= 0 && Bobbyvivant == true) {
          Affichage.innerHTML = "Félicitation, vous avez vaincu le monstre 3 !";
          document.getElementById("mob3").hidden = true;
          monstresVivants=monstresVivants-1;
          mortMonstre();
          Bobbyvivant = false;
        }
      }
  
      
      tour ++;
      boutonUtilisePrecedentDestructor=2;
      finTourPerso3();
      console.log("c'est le tour du héros " + tour);
    }
  
  
  
  }
  
  
  function boutonSpeRM() {
    if (manaBob.value>=20){
      Affichage.innerHTML="Vaisseau 4 projette des coques d'urgence, qui protègent ses alliés de la moitié des dégats jusqu'à leur prochain tour !"
      manaRM.value=manaRM.value-20;
  
      //activation de toutes les défences, elles seront desactivées à la fin de la prochaine riposte
      defencePerso1=true;
      defencePerso2=true;
      defencePerso3=true;
      defencePerso4=true;
  
      tour ++;
      boutonUtilisePrecedentRM=2;
      finTourPerso4();
      console.log("c'est le tour du héros " + tour);
  
  
    }
  }

  function degatsMobs() {

    //calcul des dégats aléatoires
    Degats =Math.floor(Math.random() * 25) + 1;
    Affichage.innerHTML = "Vous avez infligé " + Degats + " points de dégats au monstre" ;
  
    //action des dégats en fonction de l'ennemi visé
    if (MobSelection==1){
      PVTongue.innerHTML = PVTongue.innerHTML - Degats;
    //test si monstre 1 mort
      if (PVTongue.innerHTML <= 0 && Tonguevivant == true) {
        Affichage.innerHTML = "Tongue est mort";
        document.getElementById("Tongue").hidden = true;
        //on actualise le nombre de monstres estants
        MobsVivants=MobsVivants-1;
        mortMonstre();
        //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
        Tonguevivant = false;
      }
    }
  
    if (MobSelection==2){
      PVC5.innerHTML = PVC5.innerHTML - Degats;
  
      //test si monstre 2 mort
      if (PVC5.innerHTML <= 0 && PVC5 == true) {
        Affichage.innerHTML = "La bombe C5 est désamorcée";
        document.getElementById("C5").hidden = true;
        MobsVivants=MobsVivants-1;
        mortMonstre();
        //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
        C5vivant=false;
      }
    }
    if (MobSelection==3){
      PvBobby.innerHTML = PVBobby.innerHTML - Degats;
  
        
      //test si monstre 3 mort
      if (PVBobby.innerHTML <= 0 && Bobbyvivant == true) {
        Affichage.innerHTML = "Vous avez vaincu le grand Bobby";
        document.getElementById("bobby").hidden = true;
        MobsVivants=MobsVivants-1;
        mortMonstre();
        //on déclare le monstre mort, pour qu'il ne soit pas pris en compte dans l'utilisation du spécial du héros 1
        Bobbyvivant = false;
      }
    }
  }
  
  function mortMonstre() {

    //changement de monstre selectionné et condition de victoire
    if (!(document.getElementById("Tongue").hidden)){
      console.log("SELECT 1")
      MobSelection=1;
    }
    else if (!(document.getElementById("C5").hidden)) {
      console.log("SELECT 2")
      MobSelection=2;
    }
    else if (!(document.getElementById("Bobby").hidden)) {
      console.log("SELECT 3")
      MobSelection=3;
    }
    else {
      //si tous les monstres sont tués, c'est gagné !
      console.log("Victoire !");
      victoire();
      Affichage.innerHTML = "Victoire !";
      //exit pour quitter le programme, et vu que les boutons sont cachés par la fonction victoire, on peut plus relancer, comme prévu
      exit()
  
      }
  
  }


  function finTourPerso1() {

    boutonAttaqueBob.hidden = true;
    boutonDefendreBob.hidden = true;
    boutonSpeBob.hidden = true;
    imgBob.src = "img/Bob_attente.png"
  
  
    if(tour==herosVivants) {
      console.log("Riposte ennemie ! A couvert !");
  
      appelRiposte();
  
      
      tour=0;
  
    }
  
  
    if(PVBoi.innerHTML >0) {
  
      boutonAttaqueBoi.hidden = false;
      boutonDefendreBoi.hidden = false;
      boutonSpeBoi.hidden = false;
      document.getElementById("Boi").src = "img/Da_Boi.png"
      if(boutonUtilisePrecedentBoi==0) {
        boutonAttaqueBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==1) {
        boutonDefendreBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==2) {
        boutonSpeBoi.hidden = true;
      }
  
  
    }
    else if (PVDestructor.innerHTML > 0){
      boutonAttaqueDestructor.hidden = false;
      boutonDefendreDestructor.hidden = false;
      boutonSpeDestructor.hidden = false;
      document.getElementById("Destructor").src = "img/Destructor_attente.png"
      if(boutonUtilisePrecedentDestructor==0) {
        boutonAttaqueDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==1) {
        boutonDefendreDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==2) {
        boutonSpeDestructor.hidden = true;
      }
  
    }
    else if (PVRandomMan.innerHTML > 0){
      boutonAttaqueRM.hidden = false;
      boutonDefendreRM.hidden = false;
      boutonSpeRM.hidden = false;
      document.getElementById("RandomMan").src = "img/random-man_attente.png"
      if(boutonUtilisePrecedentRM==0) {
        boutonAttaqueRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==1) {
        boutonDefendreRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==2) {
        boutonSpeRM.hidden = true;
      }
  
    }  
    else if (PVBob.innerHTML > 0){
      //si jamais il ne reste plus que le héros 1 c'est de nouveau son tour
      boutonAttaqueBob.hidden = false;
      boutonDefendreBob.hidden = false;
      boutonSpeBob.hidden = false;
      imgBob.src = "img/Bob_attente.png"
      if(boutonUtilisePrecedentBob==0) {
        boutonAttaqueBob.hidden = true;monde
      }
      else if(boutonUtilisePrecedentBob==1) {
        boutonDefendreBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==2) {
        boutonSpeBob.hidden = true;
      }
  
    }
    else {
      Affichage.innerHTML = "Game over, bobby à pris possession du monde"
    }
  
  
  }
  
  
  function finTourPerso2() {
    boutonAttaqueBoi.hidden = true;
    boutonDefendreBoi.hidden = true;
    boutonSpeBoi.hidden = true;
    document.getElementById("vaisseau2").src = "img/vaisseau2.png"
  
  
    if(tour==herosVivants) {
      //appel riposte
      console.log("c'est la RIPOSTE");
      appelRiposte();
  
      tour=0;
  
  
  
    }
  
  
    if (PVDestructor.innerHTML > 0){
      boutonAttaqueDestructor.hidden = false;
      boutonDefendreDestructor.hidden = false;
      boutonSpeDestructor.hidden = false;
      document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
      if(boutonUtilisePrecedentDestructor==0) {
        boutonAttaqueDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==1) {
        boutonDefendreDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==2) {
        boutonSpeDestructor.hidden = true;
      }
  
    }
    else if (PVRM.innerHTML > 0){
      boutonAttaqueRM.hidden = false;
      boutonDefendreRM.hidden = false;
      boutonSpeRM.hidden = false;
      document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
      if(boutonUtilisePrecedentRM==0) {
        boutonAttaqueRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==1) {
        boutonDefendreRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==2) {
        boutonSpeRM.hidden = true;
      }
  
    }  
    else if (PVBob.innerHTML > 0){
      boutonAttaqueBob.hidden = false;
      boutonDefendreBob.hidden = false;
      boutonSpeBob.hidden = false;
      imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
      if(boutonUtilisePrecedentBob==0) {
        boutonAttaqueBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==1) {
        boutonDefendreBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==2) {
        boutonSpeBob.hidden = true;
      }
  
    }
    else if(PVBoi.innerHTML >0) {
      //si jamais il ne reste plus que le héros 2 c'est de nouveau son tour
      boutonAttaqueBoi.hidden = false;
      boutonDefendreBoi.hidden = false;
      boutonSpeBoi.hidden = false;
      document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
      if(boutonUtilisePrecedentBoi==0) {
        boutonAttaqueBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==1) {
        boutonDefendreBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==2) {
        boutonSpeBoi.hidden = true;
      }
  
  
    }
    else {
      Affichage.innerHTML = "GAME OVER !"
    }
  }
  
  function finTourPerso3() {
  
    boutonAttaqueDestructor.hidden = true;
    boutonDefendreDestructor.hidden = true;
    boutonSpeDestructor.hidden = true;
    document.getElementById("vaisseau3").src = "img/vaisseau3.png"
  
  
  
    if(tour==herosVivants) {
      //appel riposte
      console.log("c'est la RIPOSTE");
      appelRiposte();
  
      tour=0;
  
  
    }
  
    if (PVRM.innerHTML > 0){
      boutonAttaqueRM.hidden = false;
      boutonDefendreRM.hidden = false;
      boutonSpeRM.hidden = false;
      document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
      if(boutonUtilisePrecedentRM==0) {
        boutonAttaqueRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==1) {
        boutonDefendreRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==2) {
        boutonSpeRM.hidden = true;
      }
  
    }  
    else if (PVBob.innerHTML > 0){
      boutonAttaqueBob.hidden = false;
      boutonDefendreBob.hidden = false;
      boutonSpeBob.hidden = false;
      imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
      if(boutonUtilisePrecedentBob==0) {
        boutonAttaqueBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==1) {
        boutonDefendreBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==2) {
        boutonSpeBob.hidden = true;
      }
  
    }
    else if(PVBoi.innerHTML >0) {
      boutonAttaqueBoi.hidden = false;
      boutonDefendreBoi.hidden = false;
      boutonSpeBoi.hidden = false;
      document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
      if(boutonUtilisePrecedentBoi==0) {
        boutonAttaqueBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==1) {
        boutonDefendreBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==2) {
        boutonSpeBoi.hidden = true;
      }
  
  
    }
    else if (PVDestructor.innerHTML > 0){
          //si jamais il ne reste plus que le héros 3 c'est de nouveau son tour
          boutonAttaqueDestructor.hidden = false;
          boutonDefendreDestructor.hidden = false;
          boutonSpeDestructor.hidden = false;
      document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
      if(boutonUtilisePrecedentDestructor==0) {
        boutonAttaqueDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==1) {
        boutonDefendreDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==2) {
        boutonSpeDestructor.hidden = true;
      }
  
    }
    else {
      Affichage.innerHTML = "GAME OVER !"
    }
  
  }
  
  function finTourPerso4() {
    boutonAttaqueRM.hidden = true;
    boutonDefendreRM.hidden = true;
    boutonSpeRM.hidden = true;
    document.getElementById("vaisseau4").src = "img/vaisseau4.png"
  
  
    if(tour==herosVivants) {
      //appel riposte
  
      appelRiposte();
  
      
      console.log("c'est la RIPOSTE");
      tour=0;
  
    }
  
  
    if (PVBob.innerHTML > 0){
      boutonAttaqueBob.hidden = false;
      boutonDefendreBob.hidden = false;
      boutonSpeBob.hidden = false;
      imgVaisseau1.src = "img/vaisseau1Surbrillance.png"
      if(boutonUtilisePrecedentBob==0) {
        boutonAttaqueBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==1) {
        boutonDefendreBob.hidden = true;
      }
      else if(boutonUtilisePrecedentBob==2) {
        boutonSpeBob.hidden = true;
      }
  
    }
    else if(PVBoi.innerHTML >0) {
      boutonAttaqueBoi.hidden = false;
      boutonDefendreBoi.hidden = false;
      boutonSpeBoi.hidden = false;
      document.getElementById("vaisseau2").src = "img/vaisseau2Surbrillance.png"
      if(boutonUtilisePrecedentBoi==0) {
        boutonAttaqueBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==1) {
        boutonDefendreBoi.hidden = true;
      }
      else if(boutonUtilisePrecedentBoi==2) {
        boutonSpeBoi.hidden = true;
      }
  
  
    }
    else if (PVDestructor.innerHTML > 0){
      boutonAttaqueDestructor.hidden = false;
      boutonDefendreDestructor.hidden = false;
      boutonSpeDestructor.hidden = false;
      document.getElementById("vaisseau3").src = "img/vaisseau3Surbrillance.png"
      if(boutonUtilisePrecedentDestructor==0) {
        boutonAttaqueDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==1) {
        boutonDefendreDestructor.hidden = true;
      }
      else if(boutonUtilisePrecedentDestructor==2) {
        boutonSpeDestructor.hidden = true;
      }
  
    }
    else if (PVRM.innerHTML > 0){
      //si jamais il ne reste plus que le héros 4 c'est de nouveau son tour
      boutonAttaqueRM.hidden = false;
      boutonDefendreRM.hidden = false;
      boutonSpeRM.hidden = false;
      document.getElementById("vaisseau4").src = "img/vaisseau4Surbrillance.png"
      if(boutonUtilisePrecedentRM==0) {
        boutonAttaqueRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==1) {
        boutonDefendreRM.hidden = true;
      }
      else if(boutonUtilisePrecedentRM==2) {
        boutonSpeRM.hidden = true;
      }
  
    }  
    else {
      Affichage.innerHTML = "GAME OVER !"
    }
  
  }
  
  function appelRiposte(){
    //on désactive tous les boutons le temps de l'anim de riposte
    //il y a une méthode qui fait ça en une seule ligne, mais je n'arrive pas à la faire fonctionner
  
    desacBoutons();
    
    //si le monstre 1 est encore vivant, on fait sont anim puis on appelle la fonction de dégats de riposte
    if(Tonguevivant){
      tourMob=1;
      Affichage.innerHTML += "</br>" + "</br>" + "Mr.Tongue Riposte";
      MrTongue.src="img/Mr.Tongue.png";
      setTimeout(function(){
        MrTongue.src="img/Mr.Tongue.png"; 
        setTimeout(function(){
          MrTongue.src="img/Mr.Tongue.png"; 
          setTimeout(function(){
            MrTongue.src="img/Mr.Tongue.png"; 
            riposte()
  
            //on vérifie ensuite si le monstre 2 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte
  
            if(C5vivant){
              tourMob=2;
              Affichage.innerHTML += "</br>" + "</br>" + "C5 attaque ! aux abris !";
              C5.src="img/C5_attente.png";
              setTimeout(function(){
                C5.src="img/C5_attente.png"; 
                setTimeout(function(){
                  C5.src="img/C5_attente.png"; 
                  setTimeout(function(){
                    C5.src="img/C5_attente.png"; 
                    riposte()
  
                    //on vérifie ensuite si le monstre 3 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte
  
                    if(Bobbyvivant){
                      tourMob=3;
                      Affichage.innerHTML += "</br>" + "</br>" + "Bobby attaque !";
                      Bobby.src="img/Bobby_attente.png";
                      setTimeout(function(){
                        Bobby.src="img/Bobby_attente.png"; 
                        setTimeout(function(){
                          Bobby.src="img/Bobby_attente.png"; 
                          setTimeout(function(){
                            Bobby.src="img/Bobby_attente.png"; 
                            riposte()
  
                            //reactivation des boutons
                            acBoutons();
  
  
                          },300);
                        },300);
                      },300);
                    } else {
                      //situation ou seul le monstre 1 et 2 sont vivant, on réactive les boutons
                      acBoutons();
                    }
  
  
  
                  },300);
                },300);
              },300);
            }
  
            //on vérifie si le monstre 2 est mort mais que le monstre 3 est vivant
            if(C5vivant==false && Bobbyvivant==true){
              tourMob=3;
              Affichage.innerHTML += "</br>" + "</br>" + "Bobby attaque !";
              Bobby.src="img/Bobby.png";
              setTimeout(function(){
                Bobby.src="img/Bobby.png"; 
                setTimeout(function(){
                  Bobby.src="img/Bobby.png"; 
                  setTimeout(function(){
                    Bobby.src="img/Bobby.png"; 
                    riposte()
  
                    //et on réactive les boutons, sinon on est bloqués !
                    acBoutons();
  
  
                  },300);
                },300);
              },300);
            } else {
              //situation ou seul le monstre 1 et 2 sont vivant, on réactive les boutons
              acBoutons();
            }
  
          },300);
        },300);
      },300);
  
    }
  
  
    else if(Tonguevivant==false && C5vivant==true){
      //si le monstre 1 n'est pas vivant, on vérifie si le monstre 2 l'est toujours, et on fait la même chose qu'au dessus, sans passer par le mob1
      tourMob=2;
      Affichage.innerHTML += "</br>" + "</br>" + "C5 attaque ! aux abris !";
      C5.src="img/C5.png";
      setTimeout(function(){
        C5.src="img/C5.png"; 
        setTimeout(function(){
          C5.src="img/C5.png"; 
          setTimeout(function(){
            C5.src="img/C5.png"; 
            riposte()
  
            //on vérifie ensuite si le monstre 3 est aussi vivant, on fait sont anim puis on appelle la fonction de dégats de riposte
  
            if(Bobbyvivant){
              tourMob=3;
              Affichage.innerHTML += "</br>" + "</br>" + "Bobby attaque !";
              Bobby.src="img/Bobby.png";
              setTimeout(function(){
                Bobby.src="img/Bobby.png"; 
                setTimeout(function(){
                  Bobby.src="img/Bobby.png"; 
                  setTimeout(function(){
                    Bobby.src="img/Bobby.png"; 
                    riposte()
  
                    //et on réactive les boutons, sinon on est bloqués !
                    acBoutons();
  
  
                  },300);
                },300);
              },300);
            } else {
              //situation ou seul le monstre 2 est vivant, on réactive les boutons
              acBoutons();
            }
  
  
  
          },300);
        },300);
      },300);  }
  
  
    //si les monstre 1 et 2 ne sont pas vivant, on vérifie si le monstre 3 l'est toujours, et on fait la même chose qu'au dessus, sans passer par les mob 1 et 2
  
    else if(Tonguevivant==false && C5vivant==false && Bobbyvivant==true){
      //situation ou seul le monstre 3 est encore vivant
      tourMob=3;
      Affichage.innerHTML += "</br>" + "</br>" + "Bobby attaque !";
      Bobby.src="img/Bobby.png";
      setTimeout(function(){
        Bobby.src="img/Bobby.png"; 
        setTimeout(function(){
          Bobby.src="img/Bobby.png"; 
          setTimeout(function(){
            Bobby.src="img/Bobby.png"; 
            riposte()
  
            //et on réactive les boutons, sinon on est bloqués !
            acBoutons();
  
  
          },300);
        },300);
      },300);
  
    } else {
      //situation où seul le monstre 1 est encore vivant
      acBoutons();
    }
  
  
  }
  
  function acBoutons(){
    boutonAttaqueBob.disabled=false;
    boutonDefendreBob.disabled=false;
    boutonSpeBob.disabled=false;
    boutonAttaqueBoi.disabled=false;
    boutonDefendreBoi.disabled=false;
    boutonSpeBoi.disabled=false;
    boutonAttaqueDestructor.disabled=false;
    boutonDefendreDestructor.disabled=false;
    boutonSpeDestructor.disabled=false;
    boutonAttaqueRM.disabled=false;
    boutonDefendreRM.disabled=false;
    boutonSpeRM.disabled=false;
  
  }
  
  function desacBoutons(){
    boutonAttaqueBob.disabled=true;
    boutonDefendreBob.disabled=true;
    boutonSpeBob.disabled=true;
    boutonAttaqueBoi.disabled=true;
    boutonDefendreBoi.disabled=true;
    boutonSpeBoi.disabled=true;
    boutonAttaqueDestructor.disabled=true;
    boutonDefendreDestructor.disabled=true;
    boutonSpeDestructor.disabled=true;
    boutonAttaqueRM.disabled=true;
    boutonDefendreRM.disabled=true;
    boutonSpeRM.disabled=true;
    
  }
  
  function gameOver() {
  
    document.getElementById("Tongue").hidden = true;
    document.getElementById("C5").hidden = true;
    document.getElementById("Bobby").hidden = true;
    document.body.style.backgroundImage = "GameOver.jpg";
  }
  
  
  function victoire() {
    document.getElementById("PVBob").hidden=true;
    imgBob.hidden=true;
    boutonAttaqueBob.hidden = true;
    boutonDefendreBob.hidden = true;
    boutonSpeBob.hidden = true;
  
    document.getElementById("PVBoi").hidden=true;
    boutonAttaqueBoi.hidden = true;
    boutonDefendreBoi.hidden = true;
    boutonSpeBoi.hidden = true;
  
    document.getElementById("PVDestructor").hidden=true;
    boutonAttaqueDestructor.hidden = true;
    boutonDefendreDestructor.hidden = true;
    boutonSpeDestructor.hidden = true;
  
    document.getElementById("PVRM").hidden=true;
    boutonAttaqueRM.hidden = true;
    boutonDefendreRM.hidden = true;
    boutonSpeRM.hidden = true;

    document.body.style.backgroundImage = "Victoire.jpg";
    manaBob.hidden = true;
    manaBoi.hidden = true;
    manaDestructor.hidden = true;
    manaRM.hidden = true;
  
  
    
  
  }