var direction;
(function (direction) {
    direction[direction["right"] = 1] = "right";
    direction[direction["left"] = 5] = "left";
    direction[direction["up"] = 6] = "up";
    direction[direction["down"] = 7] = "down";
})(direction || (direction = {}));
console.log(direction.down);
