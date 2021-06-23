class System{

    constructor(){}

    authenticate(actualCode,enterCode){
        textSize(50);
        fill("black");
        text(code,300,300)
        //add code to return true if correct answer entered.
        if(actualCode === enterCode.toUpperCase()){
           return true;
        }
        else{
            return false;
        }
        

        
    }

}