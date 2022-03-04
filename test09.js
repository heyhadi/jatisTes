function multiply(a, b) {
    var aNumRows = a.length,
        aNumCols = a[0].length,
        bNumRows = b.length,
        bNumCols = b[0].length,
        m = new Array(aNumRows); // initialize array of rows
    for (var r = 0; r < aNumRows; ++r) {
        m[r] = new Array(bNumCols); // initialize the current row
        for (var c = 0; c < bNumCols; ++c) {
            m[r][c] = 0; // initialize the current cell
            for (var i = 0; i < aNumCols; ++i) {
                m[r][c] += a[r][i] * b[i][c];
            }
        }
    }
    return m;
}

function display(m) {
    for (var r = 0; r < m.length; ++r) {
        console.log(m[r].join(" "));
    }
}

var a = [
        [8, 3],
        [2, 4],
        [3, 6],
    ],
    b = [
        [1, 2, 3],
        [4, 6, 8],
    ];
console.log("matrix a:");
console.log(a);
console.log("matrix b:");
console.log(b);
console.log("a * b =");
console.log(multiply(a, b));
