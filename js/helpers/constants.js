const board = {
    width: 1024,
    height: 1024,
};

const playerShip = {
    width: 45 * (board.width / 1024),
    height: 24 * (board.width / 1024),
};

const enemy = {
    width: 36 * (board.width / 1024),
    height: 24 * (board.width / 1024),
};

const bullet = {
    width: 6 * (board.width / 1024),
    height: 17 * (board.width / 1024),
};