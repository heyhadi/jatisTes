function fibonacciSum(){
    var i;
    var fib = new Array ();
    fib[0] = 0;  
    fib[1] = 1; 
    var sum = 0;
        for(i=2; i<=10; i++){  
            fib[i] = fib[i-2] + fib[i-1]; 
                var number = parseInt(fib[i]);    
                if (number % 2 == 0) {  
                    var result = sum += fib[i];  
                }  
         }  
    console.log(result);   
}

fibonacciSum()