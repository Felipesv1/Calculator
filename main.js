function createCalculator() {
  return {
    display: document.querySelector("#last-calc input"),
 result:document.querySelector('.result-calc'),
    inicia() {
      this.clickButtons();
      this.pressEnter();
    },
    pressEnter(){
        this.display.addEventListener('keyup',e => {
            if(e.keyCode === 13){
                this.account()
            }
        })
    },
    account(){
let count = this.display.value;
try{
    count = eval(count)
    if(!count){
        alert('conta inválida')
        return;
    }
    
this.result.innerText = count


}catch(e){
alert('conta inválida')
return;
}
    },
    clearDisplay(){
        this.display.value = '';
        this.result.innerText = '';
    },
    deleteOne(){
        this.display.value =this.display.value.slice(0,-1)
    },

    clickButtons() {
      document.addEventListener("click", (e) => {
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          this.btnforDisplay(el.innerText);
        }
        if(el.classList.contains('btn-clearRegister')){
            this.clearDisplay()
        }
        if(el.classList.contains('btn-del')){
            this.deleteOne()
        }if(el.classList.contains('btn-eq')){
            this.account()
        }
      });
    },
    btnforDisplay(valor) {
      this.display.value += valor;
      this.display.focus()
    },
  };
}

const calculator = createCalculator();
calculator.inicia();
