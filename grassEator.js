class GrassEater extends livingCreature{

    constructor(x, y, index) {
        super(x, y, index)
        this.energy = 8;
    }

    move() {
        this.energy--;
        var newCell = random(this.chooseCell(0));
        if (newCell) {

            console.log(this.energy);
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            matrix[this.y][this.x] = 2;
        }

    }

    eat() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in grassArr) {
                if (newX == grassArr[i].x && newY == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
                console.log("eat");
            }
            this.energy += 2;

        } else {
            this.move();
        }
    }




    mul() {

        if (this.energy >= 10) {

            var newCell = random(this.chooseCell(0));
            if (newCell) {
                this.energy = 7;
                var neweater = new GrassEater(newCell[0], newCell[1], this.index);
                eaterArr.push(neweater);
                matrix[newCell[1]][newCell[0]] = 2;

            }
        }
    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0;
            console.log("fytg");
            for (var i in eaterArr) {
                if (this.x == eaterArr[i].x && this.y == eaterArr[i].y) {
                    eaterArr.splice(i, 1);
                    break;
                }

            }
        }

    }

}
