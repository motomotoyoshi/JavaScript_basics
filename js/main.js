'use strict';

{
    const o = {
        a: 3,
        b: 6,
    };

    Object.keys(o).forEach(key => {
        console.log(`${key}: ${o[key]}`);
    });
}