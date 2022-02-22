let sign = "x";
let player = document.getElementById("player");

function print(number) {
  let num = document.getElementById("b" + number);
  console.log(num);

  if (num.innerText == "") {
    num.innerText = sign;
    win();
    check();
    player.innerHTML = "<center>" + "Next Turn " + sign + "</center>";
  }
}

function check() {
  if (sign == "x") sign = "o";
  else sign = "x";
}

function getBox(no) {
  return document.getElementById("b" + no).innerHTML;
}

function move(a, b, c, m) {
  if (getBox(a) == m && getBox(b) == m && getBox(c) == m) return true;
  else return false;
}

function win() {
  if (
    move(1, 2, 3, sign) ||
    move(4, 5, 6, sign) ||
    move(7, 8, 9, sign) ||
    move(1, 4, 7, sign) ||
    move(2, 5, 8, sign) ||
    move(3, 6, 9, sign) ||
    move(1, 5, 9, sign) ||
    move(3, 5, 7, sign)
  ) {
    player.innerHTML = "<center>" + sign + " is the Winner" + "</center>";
    for (let i = 1; i <= 9; i++) {
      document.getElementById("b" + i).innerHTML = "";
    }
    throw "game end";
  }
}
