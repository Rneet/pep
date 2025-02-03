function createAccount(name, balance) {
    const account = {
        name: name,
        balance: balance
    };
    console.log(`Account created for ${name} with an initial balance of ${balance}`);
    return account;
}

function deposit(account, amount) {
    if (amount > 0) {
        account.balance += amount;
        console.log(`Deposited ${amount}. Current balance: ${account.balance}`);
    } else {
        console.log("Kindly add an amount greater than zero.");
    }
}

function withdraw(account, amount) {
    if (amount > 0 && amount <= account.balance) {
        account.balance -= amount;
        console.log(`Withdrawal of ${amount}. Current balance: ${account.balance}`);
    } else if (amount > account.balance) {
        console.log("Insufficient funds.");
    } else {
        console.log("Withdrawal amount must be greater than zero.");
    }
}

const myAccount = createAccount("abc", 0);

deposit(myAccount, 200);

withdraw(myAccount, 100);
