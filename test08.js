let dp = new Array(19);
for (let i = 0; i < 19; i++) dp[i] = new Array(19).fill(-1);

function RoleDices(face, throws, sum) {
    if (sum == 0 && throws == 0) return 1;

    if (sum < 0 || throws == 0) return 0;

    if (dp[throws][sum] != -1) return dp[throws][sum];

    let ans = 0;
    for (let i = 1; i <= face; i++) {
        ans += RoleDices(face, throws - 1, sum - i);
    }

    return (dp[throws][sum] = ans);
}

// Driver function
let faces = 6,
    throws = 3,
    sum = 12;
console.log(RoleDices(faces, throws, sum));
