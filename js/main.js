'use strict';

{
    const a = [2, 4, 10];

    a.splice(2, 0, 7, 8);
    console.log(a);

    const remove = a.splice(1, 2);
    console.log(remove);
}