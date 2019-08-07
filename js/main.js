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

    class SoccerPlayer extends Player {
        constructor(name, score, number) {
            super(name, score);
            this.number = number;
        }
        kick() {
            console.log('Goal!');
        }
    }

    const hyuga = new SoccerPlayer('hyuga', 100, 9);

    hyuga.kick();
    hyuga.showInfo();
    console.log(hyuga.number);
}