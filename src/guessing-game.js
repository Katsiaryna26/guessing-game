class GuessingGame {
    constructor(min,max) {
        this.min=min;
        this.max=max;  
    }

    setRange(min, max) {
     this.min=min;
     this.max=max;
      
    }

    guess() { 
        this.mid = Math.round((this.max-this.min)/2 + this.min);  
        
    return this.mid;

    }

    lower() {
this.max=this.mid;
    }

    greater() {
this.min=this.mid;
    }
}

module.exports = GuessingGame;
