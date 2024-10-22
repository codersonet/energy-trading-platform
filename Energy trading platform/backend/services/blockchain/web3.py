from web3 import Web3
import os

# Set up the connection to the blockchain
def connect_to_blockchain():
    blockchain_url = os.getenv('BLOCKCHAIN_URL')  # Example: "https://mainnet.infura.io/v3/your-project-id"
    web3 = Web3(Web3.HTTPProvider(blockchain_url))
    
    if web3.isConnected():
        print("Connected to blockchain")
    else:
        print("Failed to connect to blockchain")

    return web3

# Function to get the balance of an address
def get_balance(address):
    web3 = connect_to_blockchain()
    balance = web3.eth.get_balance(address)
    return web3.fromWei(balance, 'ether')
  
