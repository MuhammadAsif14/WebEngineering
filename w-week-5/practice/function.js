function greet(name) {
    return 'Hello, ' + name + '!';
}

    const a=greet("Asif");

    console.log(a);


    const greet2 = (name) => {
        return 'Hello, ' + name + '!';
        };

        console.log(greet2("Asif"));

        (function() {
            console.log('I am immediately invoked.');
            })();

            const numbers = [1, 2, 3, 4, 5];
            const doubled = numbers.map(function(num) {
            return num * 2;
            });
            console.log(doubled);