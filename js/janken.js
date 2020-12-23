new Vue({
    el: "#app",
    data:{
        hand: ['goo','choki','paa'],
        enemyHand: '',
        enemyHandImg: '',
        result: '勝負しようぜ！',
        resultImg: 'https://3.bp.blogspot.com/-U3kmeMjOX2Q/XBRfN5C7IMI/AAAAAAABQ3I/AObwl3DOG84xCAx9U20OE9dIteSen18cACLcBGAs/s800/yakuza_kowai.png'
    },
    methods:{
        fight: function(myHand){
            // 相手の手をランダムに決める
            // 0,1,2のいずれかの数字をランダムに生成
            let index = Math.floor(Math.random() * Math.floor(3));
            this.enemyHand = this.hand[index];

            // じゃんけん画像
            if(this.enemyHand === 'goo'){
                this.enemyHandImg = 'https://2.bp.blogspot.com/-VhlO-Yfjy_E/Uab3z3RNJQI/AAAAAAAAUVg/fX8VnSVDlWs/s220/janken_gu.png';
            }else if(this.enemyHand === 'choki'){
                this.enemyHandImg = 'https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s270/janken_choki.png';
            }else if(this.enemyHand === 'paa'){
                this.enemyHandImg = 'https://3.bp.blogspot.com/-qZtyoue9xKs/Uab30IG0Q5I/AAAAAAAAUVk/qnH8a2OgrvI/s290/janken_pa.png';
            }

            // 自分の手と相手の手を比較する
            console.log('相手の手:'+this.enemyHand);
            console.log('自分の手:'+myHand);

            // 引き分け判定
            if(this.enemyHand === myHand){
                console.log('引き分け');
                this.result = "引き分け";
            }

            // 勝ち判定
            if(this.enemyHand === 'goo' && myHand === 'paa'){
                console.log("勝ち！");
                this.result = "勝ち！";
            }
            if(this.enemyHand === 'choki' && myHand === 'goo'){
                console.log("勝ち！");
                this.result = "勝ち！";
            }
            if(this.enemyHand === 'paa' && myHand === 'choki'){
                console.log("勝ち！");
                this.result = "勝ち！";
            }

            // 負け判定
            if(this.enemyHand === 'goo' && myHand === 'choki'){
                console.log("負け・・・");
                this.result = "負け・・・";
            }
            if(this.enemyHand === 'choki' && myHand === 'paa'){
                console.log("負け・・・");
                this.result = "負け・・・";
            }
            if(this.enemyHand === 'paa' && myHand === 'goo'){
                console.log("負け・・・");
                this.result = "負け・・・";
            }
        }
    }
});
