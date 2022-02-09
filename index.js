// 難度
const difficulty = 2; 
// 挖礦的獎勵
const miningReward = 10;

// 創建新的區塊鏈
const BlockChain = require('./BlockChain.js');
const Transaction = require('./Transaction.js');
const coin = new BlockChain(difficulty, miningReward);

const Sakura = "Sakura";
const Ming = "Ming";

console.time("系統時間");

// 系統給Sakura10塊錢
coin.createTransaction(new Transaction(null, Sakura, 10));
// Sakura給Ming5塊錢
coin.createTransaction(new Transaction(Sakura, Ming, 5));

console.log("Sakura 的帳戶餘額為 " + coin.getBalance(Sakura)); 
console.timeLog("系統時間");

// Sakura挖礦，獲得的報酬化為新的交易
// 因此要等到下一次有人挖完礦才會入帳
coin.minePendingTransactions(Sakura);

console.log("Sakura 的帳戶餘額為 " + coin.getBalance(Sakura));
console.timeLog("系統時間");

// 有人挖礦，所以上次Sakura挖礦的報酬入帳了
coin.minePendingTransactions("unknown_user");

console.log("Sakura 的帳戶餘額為 " + coin.getBalance(Sakura));
console.log("Ming 的帳戶餘額為 " + coin.getBalance(Ming));
console.timeEnd("系統時間");
