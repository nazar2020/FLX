/* Your code goes here */



const userCard = (number) => {
    let balance = 100,
        transactionLimit = 100,
        historyLogs = [],
        key = number
        const tax = 0.005
    

    return {
        getCardOptions: () => {
            return {balance, transactionLimit, historyLogs, key}
        },
        putCredits: (credits) => {
            balance = balance + credits;
            historyLogs.push({
                operationType : 'Received credits',
                credits : credits,
                operationTime : new Date().toLocaleString('en-GB')
            })
        },
        takeCredits: (credits) => {
            if(credits <= balance && credits <= transactionLimit) {
                balance = balance - credits;
                historyLogs.push({
                    operationType : 'Withdrawal of credits',
                    credits : credits,
                    operationTime : new Date().toLocaleString('en-GB')
                })
            } else {
                console.log('Sorry, but your balance or transaction limit are lower than credits you want to take')
            }
        },
        setTransactionLimit: (credits) => {
            transactionLimit = credits;
            historyLogs.push({
                operationType : 'Transaction limit change',
                credits : credits,
                operationTime : new Date().toLocaleString('en-GB')
            })
        },
        transferCredits: (credits, card) => {
            let taxedCredits = credits * tax + credits;
            if(taxedCredits > balance && taxedCredits > transactionLimit) {
                console.log('Sorry, but your balance or transaction limit are lower than credits you want to tranfer')
            } else {
                this.takeCredits(taxedCredits);
                card.putCredit(credits);
            }
        }
    }
}

class UserAccount {
    constructor (name) {
        this.name = name;
        this.cards = [];
        this.cardsLength = 3;
    }
    addCard() {
        if (this.cards.length < this.cardsLength) {
          this.cards.push(userCard(this.cards.length + 1))
        } else {
          console.log('Sorry, but you can not add more than 3 cards')
        }
    }
    getCardByKey(key) {
      return this.cards[key - 1]
       }
   }