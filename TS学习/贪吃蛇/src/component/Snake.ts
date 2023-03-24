class Snake {
    head: HTMLElement;
    bodies: HTMLCollection;
    element: HTMLElement;
    constructor() {
        this.head = document.querySelector('#snake > div')!
        this.bodies = document.getElementById('snake')!.getElementsByTagName('div')
        this.element = document.getElementById('snake')!
    }
    get X() {
        return this.head.offsetLeft
    }
    get Y() {
        return this.head.offsetTop
    }
    //设置蛇头坐标
    set X(value: number) {
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER")
        }
        this.head.style.left = value + 'px'
    }
    set Y(value: number) {
        if (value < 0 || value > 290) {
            throw new Error("GAME OVER")
        }
        this.head.style.top = value + 'px'
    }
    addBody() {
        this.element.insertAdjacentHTML("beforeend", "<div></div>")
    }
}

export default Snake