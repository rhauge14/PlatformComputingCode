from bank_account import BankAccount


account = BankAccount("00128392", 200000)
print(account)

account.deposit(1000)
account.withdraw(100)
account.get_balance()
print(account)