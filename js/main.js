'use strict';

{
    const a = [2, 4, 10, 99];

    a.forEach(item => {
        console.log(item);
    });

    a.forEach((item, index) => {
        console.log(`${index}: ${item}`);
    });
}