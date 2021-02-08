class Food{
    constructor(){
        this.image = loadImage('Milk.png');
    }

    display(){

    //use for loop to display bottles
    for(i = 0; i < bottles; i++){
         if(i <= 9){ 
             image (this.image, i*30 + 10, 200, 50, 70); } 
         else{ 
             image (this.image, (i - 10)*30 + 10, 280, 50, 70); } 
        }

    
    }

    getFoodStock(){

    }

    updateFoodStock(){

    }

    deductFood(){

    }
}