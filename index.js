const batteryBatches = [
  { amount: 4 },
  { amount: 5 },
  { amount: 3 },
  { amount: 4 },
  { amount: 4 },
  { amount: 5 },
  { amount: 6 },
];

const totalBatteries = batteryBatches.reduce((sum, batch) => sum + batch.amount, 0);

module.exports = {
  totalBatteries
};

