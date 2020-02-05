  let massiv = [];
        function random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min; 
        }


        function randomMassiv (A) {
            var i = 10;
            for(let j = 0; j < i; j++) {
                var value = random(1, 100);
                A.push(value);
                console.log(value);
            }
        }
        randomMassiv(massiv);

//Максимум и минимум включаются. Взято с сайта MOZ
//Функция задаёт i-тое кол-во значений в диапазоне 1-20 в массиве A 