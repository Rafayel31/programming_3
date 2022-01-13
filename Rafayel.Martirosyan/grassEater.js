class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 8;
        this.index = index;
        this.multiply = 0;

        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];

    }
    chooseCell(character) {
        var found = [];

        for (var o in this.directions) {
            var x = this.directions[o][0];
            var y = this.directions[o][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[o]);
                }
            }
        }

        return found;
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

