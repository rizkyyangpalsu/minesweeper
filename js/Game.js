class Game {
    constructor(row, column, bombs) {
        this.row = row;
        this.column = column;
        this.number_of_bombs = bombs;
        this.number_of_cells = row * column;
        this.maps = [];
    }

    start() {
        for (let r = 0; r < this.row; r++) {
            this.maps[r] = [];
            for (let c = 0; c < this.column; c++) {
                this.maps[r][c] = new Tile(r, c, false);
            }
        }

        this.initBombs();
        this.check();
    }

    render() {
        let element = document.querySelector('.field');
        element.innerHTML = '';

        this.maps.forEach((value, index) => {
            let tr = document.createElement('tr');
            value.forEach((item, key) => {
                tr.appendChild(item.getTile())
            });
            element.appendChild(tr);
        });
    }

    initBombs() {
        let chance = Math.floor(this.number_of_bombs / this.number_of_cells * this.number_of_cells  );

        for (let i = 0; i < chance; i++) {
            let row = Math.floor(Math.random() * chance);
            let column = Math.floor(Math.random() * chance);
            this.maps[row][column].bomb = true
        }
    }

    check() {
        this.maps.forEach((row) => {
            row.forEach((column) => {
                column.neighbors()
            })
        })
    }
}