let setCount = ()=>{
    let clickCount = 0;
    return{
            PositiveCount:document.getElementById("button1").addEventListener("click",function(){
                clickCount++;
                console.log(`Button clicked ${clickCount} times`);
            }),
            NegativeCount: document.getElementById("button2").addEventListener('click', function(){
                clickCount--;
                console.log(`Button Decrement ${clickCount} times`)
        
            }),
    }
}

 let count = setCount();
 count.PositiveCount;
 count.NegativeCount;