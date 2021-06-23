class Reset{
    constructor(){
        this.reset = createButton('reset');
    }
    display(){
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.reset.position(800,450);

        if(score===3){
        this.reset.mousePressed(()=>{
            score=0;      
            security.createButton();
        })
    }

        
    }

    invisible(){
        this.reset.hide();
    }
}