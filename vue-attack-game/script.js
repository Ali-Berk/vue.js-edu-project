const app = Vue.createApp({
    data(){
        return{
            playerName:'Ali Berk',
            enemyHealth:100,
            playerHealth:100,
            attackRate:0,
            superAttack:0,
            superAttackCount:4,
            enemySuperAttackCount:4,
            heal:0,
            turn:true,
            isGameOver:false,
        }
    },

    watch:{
        turn(){
            if(this.turn==false){
                console.log('düşmanın sırası.');
                if(this.enemyHealth>20){
                    for (let i = 0; i < 2   e9; i++) {}; 
                    // this.sleep(10000);                   
                    if(this.enemySuperAttackCount <= 0){
                        console.log('süper atak');
                        this.superAttack = Math.random()*100;
                        this.playerHealth -= Math.round(this.superAttack);
                        this.enemySuperAttackCount = 4;
                        this.turn = !this.turn;
                    }
                    else{
                        console.log('atak');
                        this.attackRate = Math.random()*10;
                        this.playerHealth -= Math.round(this.attackRate);
                        this.turn = !this.turn;
                        this.enemySuperAttackCount --;
                    }
    
                }
                else if(this.enemyHealth<20){
                    if((this.playerHealth<20 && this.enemySuperAttackCount <= 0) || (this.playerHealth<5)){
                        if(this.enemySuperAttackCount <= 0){
                            console.log('süper atak2');
                            this.superAttack = Math.random()*100;
                            this.playerHealth -= Math.round(this.superAttack);
                            this.enemySuperAttackCount = 4;
                            this.turn = !this.turn;

                        }
                        else{
                            console.log('atak');
                            this.attackRate = Math.random()*10;
                            this.playerHealth -= Math.round(this.attackRate);
                            this.turn = !this.turn;
                            
                        }
                    }
                    else{
                        console.log('iyileş');
                        this.heal = Math.random()*50;
                        this.enemyHealth += Math.round(this.heal);
                        this.turn = !this.turn;
                    }
                }
            }
        }
    },

    computed:{
        isGameOverTwo(){
            console.log('execute edildi');
            if((this.enemyHealth<=0) || (this.playerHealth<=0) || (this.playerHealth ==0 && this.enemyHealth == 0)){
                this.isGameOver= true;
                console.log('oyun bitti');
                return this.isGameOver;
            }
        },
        whosGonnaWin(){
            if(this.playerHealth>0){
                return true;
            }
            else if(this.enemyHealth>0){
                return false;
            }
        },
    },

    methods:{
        //true oyuncunun sırası
        attack(){
            
            this.attackRate = Math.random()*10;
            if(this.turn === true){
                this.superAttackCount --;
                this.enemyHealth -= Math.round(this.attackRate);
                this.turn = !this.turn;
            }
        },
        superAttackk(){
            console.log(this.superAttackCount);
            this.superAttack = Math.random()*100;
            if(this.superAttackCount<=0 && this.turn === true){
             this.enemyHealth -= Math.round(this.superAttack);
             this.turn = !this.turn;
             this.superAttackCount = 4; 
            }
        },
        healMethod(){
            if(this.turn === true){
                this.heal = Math.random()*50;
                this.playerHealth = Math.round(this.heal);
                this.turn = !this.turn;
                this.superAttackCount --;

            }
        },
        startNewGame(){
            this.isGameOver = false;
            this.enemyHealth = 100;
            this.playerHealth = 100;
            this.enemySuperAttackCount=4;
            this.superAttackCount = 4;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        
    },
})

app.mount('#frontend');
