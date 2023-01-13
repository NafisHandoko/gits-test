// import package yang dibutuhkan
const prompt = require('prompt-sync')();

// user input
const n = Number(prompt('jumlah pemain: '));
const scores = prompt('deret skor: ').split(' ').map(Number);
const n_gits = Number(prompt('permainan yang diikuti GITS: '));
const gits_scores = prompt('deret skor GITS: ').split(' ').map(Number);

var gits_rank = []
if (n === scores.length && n_gits === gits_scores.length) {
    for (let i = 0; i < gits_scores.length; i++) {
        var rank = []
        var rank_num = 1
        var all_scores = scores
        all_scores.push(gits_scores[i])
        all_scores = all_scores.sort(function (a, b) {
            return b - a;
        })
        for (let j = 0; j < all_scores.length; j++) {
            if (all_scores[j] < all_scores[j - 1]) {
                rank_num = rank_num + 1
            }
            rank.push(rank_num)
        }
        for (let j = 0; j < all_scores.length; j++) {
            if (all_scores[j]===gits_scores[i]) {
                gits_rank.push(rank[j])
                break;
            }
        }
    }
    console.log(gits_rank.join(' '))
}