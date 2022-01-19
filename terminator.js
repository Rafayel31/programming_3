class Terminator extends livingCreature{
    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 20;
    }

    move() {
        this.energy--;
        var found = [];
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(1));
        found.push(newCell);
        found.push(newCell1);
        if (newCell1 || newCell) {


            if (newCell1 && newCell) {
                var rr = Math.round(Math.random());
                var newX = found[rr][0];
                var newY = found[rr][1];
            }
            else if (newCell1 && !newCell) {
                var newX = newCell1[0];
                var newY = newCell1[1];
            }
            else if (!newCell1 && newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
            }


            if (this.a) { matrix[this.y][this.x] = this.a; }
            else { matrix[this.y][this.x] = 0; }
            this.x = newX;
            this.y = newY;
            this.a = matrix[newY][newX];
            matrix[this.y][this.x] = 5;
        }
    }


    eat() {
        var found = [];
        var newCell = random(this.chooseCell(4));
        var newCell1 = random(this.chooseCell(3));
        found.push(newCell);
        found.push(newCell1);
        if (newCell1 || newCell) {


            if (newCell1 && newCell) {
                var rr = Math.round(Math.random());
                var newX = found[rr][0];
                var newY = found[rr][1];
            }
            else if (newCell1 && !newCell) {
                var newX = newCell1[0];
                var newY = newCell1[1];
            }
            else if (!newCell1 && newCell) {
                var newX = newCell[0];
                var newY = newCell[1];
            }
            matrix[newY][newX] = 5;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in HunterArr) {
                if (newX == HunterArr[i].x && newY == HunterArr[i].y) {
                    HunterArr.splice(i, 1);
                    break;
                }
            }
            for (var i in PredatorArr) {
                if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
            this.energy += 2;

        }
        else {
            this.move();
        }
    }




    mul() {

        if (this.energy >= 20) {

            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var neweater = new Terminator(newCell[0], newCell[1], 5);
                TerminatorArr.push(neweater);
                matrix[newCell[1]][newCell[0]] = 5;
                this.energy = 10;
            }
        }
    }
    die() {
        if (this.energy <= 0) {
            if (this.a) { matrix[this.y][this.x] = this.a; }
            else { matrix[this.y][this.x] = 0; }
            for (var i in TerminatorArr) {
                if (this.x == TerminatorArr[i].x && this.y == TerminatorArr[i].y) {
                    TerminatorArr.splice(i, 1);
                    break;
                }
            }
        }

    }
}