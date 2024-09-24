function getTagFiledById(id) {
    const navAmountInputGetVAlue = document.getElementById(id).innerText;
    const navAmountInputGetVAlueNumber = parseFloat(navAmountInputGetVAlue);
    return navAmountInputGetVAlueNumber;
}


function getInputFiledById(id) {
    const navAmountInputGetVAlue = document.getElementById(id).value;
    const navAmountInputGetVAlueNumber = parseFloat(navAmountInputGetVAlue);
    return navAmountInputGetVAlueNumber;
}

