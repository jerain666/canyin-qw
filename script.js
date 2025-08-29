// 计算建店总成本
function calculateSetupCost() {
    const deposit = parseFloat(document.getElementById('deposit').value) || 0;
    const transferFee = parseFloat(document.getElementById('transfer-fee').value) || 0;
    const rentDeposit = parseFloat(document.getElementById('rent-deposit').value) || 0;
    const techFee = parseFloat(document.getElementById('tech-fee').value) || 0;
    const decoration = parseFloat(document.getElementById('decoration').value) || 0;
    const adCost = parseFloat(document.getElementById('ad-cost').value) || 0;
    const equipment = parseFloat(document.getElementById('equipment').value) || 0;

    const totalCost = deposit + transferFee + rentDeposit + techFee + decoration + adCost + equipment;
    document.getElementById('total-setup-cost').textContent = totalCost.toFixed(2);
}

// 计算毛利率
function calculateGrossMargin() {
    const snackPrice = parseFloat(document.getElementById('snack-price').value) || 0;
    const ingredientCost = parseFloat(document.getElementById('ingredient-cost').value) || 0;
    const packagingCost = parseFloat(document.getElementById('packaging-cost').value) || 0;
    
    if (snackPrice <= 0) {
        alert("请输入有效的小吃单价");
        return;
    }
    
    const grossProfit = snackPrice - ingredientCost - packagingCost;
    const marginPercentage = (grossProfit / snackPrice) * 100;
    
    document.getElementById('gross-margin').textContent = marginPercentage.toFixed(2);
}

// 计算盈亏平衡点
function calculateBreakEven() {
    const monthlyRent = parseFloat(document.getElementById('monthly-rent').value) || 0;
    const monthlyLabor = parseFloat(document.getElementById('monthly-labor').value) || 0;
    const monthlyEnergy = parseFloat(document.getElementById('monthly-energy').value) || 0;
    const monthlyMisc = parseFloat(document.getElementById('monthly-misc').value) || 0;
    const daysOpen = parseFloat(document.getElementById('days-open').value) || 30;
    
    const grossMarginEl = document.getElementById('gross-margin');
    const grossMargin = parseFloat(grossMarginEl.textContent) || 0;
    
    if (grossMargin <= 0) {
        alert("请先计算毛利率");
        return;
    }
    
    const totalMonthlyCost = monthlyRent + monthlyLabor + monthlyEnergy + monthlyMisc;
    const dailyCost = totalMonthlyCost / daysOpen;
    const breakEven = dailyCost / (grossMargin / 100);
    
    document.getElementById('break-even').textContent = breakEven.toFixed(2);
}

// 计算回本周期
function calculateROI() {
    const fixedCost = parseFloat(document.getElementById('fixed-cost').value) || 0;
    const monthlyProfit = parseFloat(document.getElementById('monthly-profit').value) || 0;
    
    if (monthlyProfit <= 0) {
        alert("月净利润必须大于0");
        return;
    }
    
    const roiPeriod = fixedCost / monthlyProfit;
    document.getElementById('roi-period').textContent = roiPeriod.toFixed(2);
}
