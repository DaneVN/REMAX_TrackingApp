const VAT = 15 / 100;

export function AgentCommission(data) {
  //logic for commission on purchase price
  if (!data.grossCommision) {
    const purchasePrice = data.purchasePrice;
    const vatOnAgentSplit = data.commissionOnPurchasePrice * (VAT + 1);

    const commisionFactor =
      parseFloat(vatOnAgentSplit / 100) * (data.agentSplit / 100);

    const grossCommission = purchasePrice * commisionFactor;

    const lessVat = grossCommission - grossCommission / (1 + VAT);
    const totalAfterVat = (grossCommission - lessVat).toFixed(2);
    const royalty = totalAfterVat * (data.royalty / 100);
    const totalAfterRoyalty = (totalAfterVat - royalty).toFixed(2);

    const unitySplit = (
      totalAfterVat * (data.unitySplit / 100) -
      royalty
    ).toFixed(2);

    const paye = unitySplit * (data.paye / 100);
    //return results in object format
    return {
      purchasePrice: parseInt(purchasePrice).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      commissionPercentage: commisionFactor,
      grossCommission: parseInt(grossCommission).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      vatOnGrossCommission: parseInt(lessVat).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      totalAfterVat: parseInt(totalAfterVat).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      royalty: parseInt(royalty).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      totalAfterRoyalty: parseInt(totalAfterRoyalty).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      unitySplit: parseInt(unitySplit).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      paye: parseInt(paye).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      nettPaymentToAgent: parseInt(unitySplit - paye).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
    };
  } else {
    //logic for fixed gross commission
    const grossCommission = data.grossCommision;
    const lessVat = grossCommission - grossCommission / (1 + VAT);
    const totalAfterVat = (grossCommission - lessVat).toFixed(2);
    const royalty = totalAfterVat * (data.royalty / 100);
    const totalAfterRoyalty = (totalAfterVat - royalty).toFixed(2);

    const unitySplit = (
      totalAfterVat * (data.unitySplit / 100) -
      royalty
    ).toFixed(2);

    const paye = unitySplit * (data.paye / 100);
    //return results in object format
    return {
      purchasePrice: parseInt(data.purchasePrice).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      grossCommission: parseInt(grossCommission).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      vatOnGrossCommission: parseInt(lessVat).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      totalAfterVat: parseInt(totalAfterVat).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      royalty: parseInt(royalty).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      totalAfterRoyalty: parseInt(totalAfterRoyalty).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      unitySplit: parseInt(unitySplit).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      paye: parseInt(paye).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
      nettPaymentToAgent: parseInt(unitySplit - paye).toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR",
      }),
    };
  }
}
