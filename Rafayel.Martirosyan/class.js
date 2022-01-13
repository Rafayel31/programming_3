
class Grass {

    constructor(x, y, index) {
        this.x = x;
        this.y = y;
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

        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }

        return found;
    }

    mul() {
        this.multiply++;
        var newCell = random(this.chooseCell(0));
        if (newCell && this.multiply >= 4) {
            var newGrass = new Grass(newCell[0], newCell[1], this.index);
            grassArr.push(newGrass);
            matrix[newCell[1]][newCell[0]] = 1;
            this.multiply = 0;
        }
    }
}



//////////////////////////////////////////////////////////////////////////////////////////
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



///////////////////////////////////////////////////////////////////////////////////



class Predator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
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
///////////////////////////////////////////////////////////////////////////////////

class Hunter {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 15;
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
            [this.x + 1, this.y + 1],
            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]

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
            matrix[this.y][this.x] = 4;
        }
    }


    eat() {
        var newCell = random(this.chooseCell(3));
        if (newCell) {
            var newX = newCell[0];
            var newY = newCell[1];
            matrix[newY][newX] = 4;
            matrix[this.y][this.x] = 0;
            this.x = newX;
            this.y = newY;
            for (var i in PredatorArr) {
                if (newX == PredatorArr[i].x && newY == PredatorArr[i].y) {
                    PredatorArr.splice(i, 1);
                    break;

                }
                this.y = newY;
                this.x = newX;
                this.energy += 2;
            }
        }
        else {
            this.move();
        }
    }




    mul() {

        if (this.energy >= 15) {

            var newCell = random(this.chooseCell(0));
            if (newCell) {
                var neweater = new Hunter(newCell[0], newCell[1], 4);
                HunterArr.push(neweater);
                matrix[newCell[1]][newCell[0]] = 4;
                this.energy = 8;
            }
        }
    }
    die() {
        if (this.energy <= 0) {
            if (this.a) { matrix[this.y][this.x] = this.a; }
            else { matrix[this.y][this.x] = 0; }
            for (var i in HunterArr) {
                if (this.x == HunterArr[i].x && this.y == HunterArr[i].y) {
                    HunterArr.splice(i, 1);
                    break;
                }
            }
        }

    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Terminator {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 20;
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