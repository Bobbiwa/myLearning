import Snake from "./Snake";
import Food from "./food";
import ScorePanel from "./ScorePanel";
//控制其他所有类
class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive: boolean;

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.isLive = true;
        this.init()
    }
    //游戏初始化：调用后游戏即开始
    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
    }

    //键盘按下响应
    keydownHandler(event: KeyboardEvent) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            this.direction = event.key
        }
    }

    //控制蛇移动
    run() {
        let X = this.snake.X
        let Y = this.snake.Y

        switch (this.direction) {
            case "ArrowUp":
                Y -= 10
                break;
            case "ArrowDown":
                Y += 10
                break;
            case "ArrowLeft":
                X -= 10
                break;
            case "ArrowRight":
                X += 10
                break;
        }

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message)
            this.isLive = false;
        }


        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)

    }

}

export default GameControl