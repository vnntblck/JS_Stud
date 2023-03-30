window.onload = function(){

    //const graph2d = new Graph2d();
    const graph3d = new Graph3D();

    // const ui = new Ui({addFunction, delFunction, changeWidth, changeColor, changeA, changeB, switchCheckBox, createFuncObject});

    function addFunction(num, f){
        graph2d.funcs[num].f = f;
    }

    function delFunction(num){
        graph2d.funcs[num] = null;
    }

    function changeWidth(num, width) {
        graph2d.funcs[num].width = width;
    }

    function changeColor(num, color) {
        graph2d.funcs[num].color = color;
    }

    function changeA(num, value) {
        graph2d.funcs[num].a = value - 0;
    }

    function changeB(num, value) {
        graph2d.funcs[num].b = value - 0;
    }

    function switchCheckBox(num) {
        graph2d.funcs[num].derivative = !graph2d.funcs[num].derivative;
    }

    function createFuncObject(num) {
        graph2d.funcs[num] = {
            f: null,
            color: 'black',
            width: 2,
            a: 0,
            b: 0,
        }
    }

    



}