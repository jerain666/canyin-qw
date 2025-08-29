// 所有输入和输出元素
const inputs = {
  transferFee: document.getElementById('transferFee'),
  rentDeposit: document.getElementById('rentDeposit'),
  trainingCost: document.getElementById('trainingCost'),
  renovationCost: document.getElementById('renovationCost'),
  adCost: document.getElementById('adCost'),
  equipmentCost: document.getElementById('equipmentCost'),
  initialMaterial: document.getElementById('initialMaterial'),
  threeMonthsRent: document.getElementById('threeMonthsRent'),
  laborCost: document.getElementById('laborCost'),
  marketingCost: document.getElementById('marketingCost'),
  reserveFund: document.getElementById('reserveFund'),
};

// 输出
const totalInvestment = document.getElementById('totalInvestment');

// 毛利率
const unitPrice = document.getElementById('unitPrice');
const ingredientCost = document.getElementById('ingredientCost');
const packagingCost = document.getElementById('packagingCost');
const grossMargin = document.getElementById('grossMargin');

// 盈亏平衡
const dailyRent = document.getElementById('dailyRent');
const dailyLabor = document.getElementById('dailyLabor');
const dailyEnergy = document.getElementById('dailyEnergy');
const dailyOther = document.getElementById('dailyOther');
const dailyCost = document.getElementById('dailyCost');
const breakEven = document.getElementById('breakEven');

// 回本周期
const fixedCostTotal = document.getElementById('fixedCostTotal');
const monthlyProfit = document.getElementById('monthlyProfit');
const paybackPeriod = document.getElementById('paybackPeriod');

// 计算总投资
function calculateTotalInvestment() {
  const total = [
    inputs.transferFee,
    inputs.rentDeposit,
    inputs.trainingCost,
    inputs.renovationCost,
    inputs.adCost,
    inputs.equipmentCost,
    inputs.initialMaterial,
    inputs.threeMonthsRent,
    inputs.laborCost,
    inputs.marketingCost,
    inputs.reserveFund,
  ].reduce((sum, el) => sum + parseFloat(el.value || 0), 0);

  totalInvestment.textContent = total.toFixed(0);
  return total;
}

// 计算毛利率
function calculateGrossMargin() {
  const price = parseFloat(unitPrice.value) || 0;
  const cost = parseFloat(ingredientCost.value) || 0;
  const pack = parseFloat(packagingCost.value) || 0;

  if (price === 0) {
    grossMargin.textContent = '0%';
    return 0;
  }

  const margin = (price - cost - pack) / price;
  grossMargin.textContent = (margin * 100).toFixed(2) + '%';
  return margin;
}

// 计算每日运营成本和盈亏平衡点
function calculateBreakEven() {
  const daily = [
    dailyRent,
    dailyLabor,
    dailyEnergy,
    dailyOther,
  ].reduce((sum, el) => sum + parseFloat(el.value || 0), 0);

  dailyCost.textContent = daily.toFixed(0);

  const margin = calculateGrossMargin();
  if (margin === 0) {
    breakEven.textContent = '0';
    return;
  }

  const breakEvenValue = daily / margin;
  breakEven.textContent = breakEvenValue.toFixed(0);
}

// 计算回本周期
function calculatePayback() {
  const fixed = [
    inputs.trainingCost,
    inputs.renovationCost,
    inputs.adCost,
    inputs.equipmentCost,
  ].reduce((sum, el) => sum + parseFloat(el.value || 0), 0);

  fixedCostTotal.textContent = fixed.toFixed(0);

  const profit = parseFloat(monthlyProfit.value) || 0;
  if (profit === 0) {
    paybackPeriod.textContent = '0';
    return;
  }

  const period = fixed / profit;
  paybackPeriod.textContent = period.toFixed(1);
}

// 绑定所有输入事件
function bindEvents() {
  // 所有金额输入
  Object.values(inputs).forEach(input => {
    input.addEventListener('input', () => {
      calculateTotalInvestment();
      calculatePayback();
      calculateBreakEven();
    });
  });

  // 毛利率相关
  [unitPrice, ingredientCost, packagingCost].forEach(el => {
    el.addEventListener('input', () => {
      calculateGrossMargin();
      calculateBreakEven();
    });
  });

  // 每日成本
  [dailyRent, dailyLabor, dailyEnergy, dailyOther].forEach(el => {
    el.addEventListener('input', calculateBreakEven);
  });

  // 月利润
  monthlyProfit.addEventListener('input', calculatePayback);
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  bindEvents();
  calculateTotalInvestment();
  calculateGrossMargin();
  calculateBreakEven();
  calculatePayback();
});
