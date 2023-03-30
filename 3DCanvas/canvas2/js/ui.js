class Ui{
    constructor({addFunction, delFunction, changeWidth, changeColor, changeA, changeB, switchCheckBox, createFuncObject}){
        this.addFunction = addFunction;
        this.delFunction = delFunction;
        this.changeWidth = changeWidth;
        this.changeColor = changeColor;
        this.changeA = changeA;
        this.changeB = changeB;
        this.switchCheckBox = switchCheckBox;
        this.createFuncObject = createFuncObject;
        this.num = 0;
        document.getElementById("addFunction").addEventListener("click", () => this.addFunctionHandler());

        document.querySelector('.menu-button').addEventListener('click', function (event) {
            document.querySelector('.container').classList.toggle('active-container')
        });

    }

    addFunctionHandler(){
        const inputFunc = this.createInput(this.keyUpFunctionHandler, "f(x)");

        const inputColor = this.createInput(this.keyUpColorHandler, "Color");

        const inputWidth = this.createInput(this.keyUpWidthHandler, 'Ширина');

        const inputA = this.createInput(this.keyUpAHandler, 'a');

        const inputB = this.createInput(this.keyUpBHandler, 'b');

        const button = document.createElement('div');
        button.innerHTML = '&#10006';
        button.dataset.num = this.num;
        button.addEventListener('click', () => {
            div.removeChild(Block);
            this.delFunction(button.dataset.num);
        })
        button.className = "delButton";

        const checkDerivative = document.createElement('input');
        checkDerivative.setAttribute('type', 'checkbox');
        checkDerivative.dataset.num = this.num;
        checkDerivative.addEventListener('click', (event) => this.switchCheckBoxHandler(event))
        checkDerivative.className = "checkDerivative";
        
        const Block = document.createElement("div");
        Block.className = 'Block';
        Block.appendChild(checkDerivative);
        Block.appendChild(inputFunc);
        Block.appendChild(inputColor);
        Block.appendChild(inputWidth);
        Block.appendChild(inputA);
        Block.appendChild(inputB);
        Block.appendChild(button);

        const div = document.querySelector('.funcInputs');

        div.appendChild(Block);

        this.createFuncObject(this.num);

        this.num++;
        
    }

    keyUpFunctionHandler = (event) => {
        try {
            let f;
            eval(`f = function(x) {return ${event.target.value};}`);
            this.addFunction(event.target.dataset.num, f);
        } catch (e) {
            console.log(e);
        }
    }

    createInput(handler, placeholder) {
        const input = document.createElement('input');
        input.dataset.num = this.num;
        input.addEventListener('keyup', (event) => handler(event));
        input.setAttribute('placeholder', placeholder);
        return input;
    }

    keyUpColorHandler = (event) => {
        this.changeColor(event.target.dataset.num, event.target.value);
    }

    keyUpWidthHandler = (event) => {
        this.changeWidth(event.target.dataset.num, event.target.value);
    }

    keyUpAHandler = (event) => {
        this.changeA(event.target.dataset.num, event.target.value);
    }

    keyUpBHandler = (event) => {
        this.changeB(event.target.dataset.num, event.target.value);
    }

    switchCheckBoxHandler(event) {
        this.switchCheckBox(event.target.dataset.num);
    }

}