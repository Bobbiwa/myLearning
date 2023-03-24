class ScorePanel {
    //用来记录分数和等级
    score: number;
    level: number;
    //存放分数和等级的元素节点
    scoreElement: HTMLElement;
    levelElement: HTMLElement;
    constructor() {
        this.score = 0;
        this.level = 1;
        this.scoreElement = document.getElementById('score')!;
        this.levelElement = document.getElementById('level')!;
    }
    //加分的方法
    addScore() {
        this.score++;
        this.scoreElement.innerHTML = this.score + ''

        //当等级提升至10的倍数时，升一级
        if (this.score % 10 === 0) this.levelUp()
    }
    //升级的方法
    levelUp() {
        if (this.level < 10) {
            this.level++;
            this.levelElement.innerHTML = this.level + ''
        }
    }
}

export default ScorePanel