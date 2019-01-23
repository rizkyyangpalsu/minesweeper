class Tile {
    constructor(row, column, type) {
        this.row = row;
        this.column = column;
        this.bomb = type;
    }

    getTile() {
        let td = document.createElement('td');
        td.setAttribute('id', this.row + '-' + this.column);
        let icon = document.createElement('i');

        td.onclick = () => {
            if (Number.isInteger(this.bomb)) {
                icon.innerText = this.bomb.toString().replace('00', '')
            }

            if (this.bomb === true) {
                icon.setAttribute('class', 'fa fa-bomb')
            }

            if (this.bomb === false) {
                icon.setAttribute('class', 'fa fa-cat')
            }
        };
        td.oncontextmenu(function(){
            alert("adsdsd")
        });

        td.appendChild(icon);

        return td;
    }

    neighbors() {
        let maps = game.maps;

        maps.forEach((row) => {
            row.forEach((column) => {
                if (maps[this.row][this.column].bomb === true) {
                    // Left check
                    if (maps[this.row][this.column - 1] !== undefined) {
                        let tile = maps[this.row][this.column - 1];
                        tile.bomb = (Number.isInteger(tile.bomb) ? tile.bomb + 1 : 1);
                    }
                    // Top check
                    if (maps[this.row - 1] !== undefined) {
                        let tile = maps[this.row - 1][this.column];
                        tile.bomb = (Number.isInteger(tile.bomb) ? tile.bomb + 1 : 1);
                    }
                    // Right check
                    if (maps[this.row][this.column + 1] !== undefined) {
                        let tile = maps[this.row][this.column + 1];
                        tile.bomb = (Number.isInteger(tile.bomb) ? tile.bomb + 1 : 1);
                    }
                    // Bottom check
                    if (maps[this.row + 1] !== undefined) {
                        let tile = maps[this.row + 1][this.column];
                        tile.bomb = (Number.isInteger(tile.bomb) ? tile.bomb + 1 : 1);
                    }

                    return true;
                }

                return false
            })
        })
    }
}