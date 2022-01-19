class Predator extends livingCreature{

    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 15;
    }

    move() {
        this.energy--;
        var found = [];
        var newCell = random(this.chooseCell(0));
        var newCell1 = random(this.chooseCell(1));
        found.push(newCell);
        found.push(newCell1);

        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            if (this.a) { matrix[this.y][this.x] = this.a; }
            else { matrix[this.y][this.x] = 0; }
            this.x = newX;
            this.y = newY;
            this.a = matrix[newY][newX]
            matrix[this.y][this.x] = 3;
        }

    }

    eat() {
        var newCell = random(this.chooseCell(2));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 3;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in eaterArr) {
                if (newX == eaterArr[i].x && newY == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }
            }
            this.y = newY;
            this.x = newX;
            this.energy += 2;

        } else {
            this.move();
        }
    }




    mul() {

        if (this.energy >= 12) {

            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var neweater = new Predator(newCell[0], newCell[1], this.index);
                PredatorArr.push(neweater);
                matrix[newCell[1]][newCell[0]] = 3;
                this.energy = 6;
            }
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            for (var i in PredatorArr) {
                if (this.x == PredatorArr[i].x && this.y == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;
                }
            }
        }

    }

}