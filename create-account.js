function createAccount(pin, amount) {
    return {
        checkBalance(inputPin){
            if (inputPin !== pin) return "Invalid PIN";
            return `$${amount}`;
        },
        deposit(inputPin, newAmount) {
            if (inputPin !== pin) return "Invalid PIN.";
            amount += newAmount;
            return `Succesfully deposited $${newAmount}. Current balance $${amount}.`;
        },
        withdraw(inputPin, withdrawalAmount){
            if (inputPin !== pin) return "Invalid PIN.";
            if (withdrawalAmount > amount)
            return "Withdrawal amount exceeds balance. Transaction canceled";
            amount -= withdrawalAmount;
            return `Succesfully withdrew $${withdrawalAmount}. Current balance: $${amount}`;
        },
        changePin(oldPin, newPin){
            if (oldPin !== pin) return "Invalid pin.";
            pin = newPin;
            return "PIN changed.";
        }
    };
}

module.exports = { createAccount };
