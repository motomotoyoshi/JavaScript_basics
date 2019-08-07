'use strict';

{
    class Player {
        constructor(name, score) {
            this.name = name;
            this.score = score;
        }

        showInfo() {
            console.log(`name: ${this.name} score: ${this.score}`);
        }
    }

    const yura = new Player('yura', 90);
    const oki = new Player('oki', 80);

    // console.log(yura);
    yura.showInfo();
    oki.showInfo();
}