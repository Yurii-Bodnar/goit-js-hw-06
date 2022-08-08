const decrementRef = document.querySelector("[data-action=decrement]")
const incrementRef = document.querySelector("[data-action=increment]")
const counterValueRef = document.querySelector("#value")

const counter = {
    counterValue: 0,
    decrement() {
        this.counterValue -= 1;  
    },
    increment() {
        this.counterValue += 1;
    },
}


decrementRef.addEventListener("click", function () {
    counter.decrement();
    counterValueRef.textContent = counter.counterValue
})
incrementRef.addEventListener("click", function () {
    counter.increment();
    counterValueRef.textContent = counter.counterValue
})
