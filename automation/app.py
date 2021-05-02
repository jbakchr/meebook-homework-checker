from selenium import webdriver
from selenium.webdriver.chrome.options import Options

# Get username and password from credentials file
username = ""
password = ""

with open("./credentials.txt") as file:
    username = file.readline().strip()

# Set Chrome options in order to use Chrome in headless mode in 'production'
options = Options()
options.headless = False

# Open 'MeeBook' login page in Chrome
browser = webdriver.Chrome("./chromedriver", options=options)
browser.get("https://app.meebook.com/foraeldre/1")
browser.maximize_window()


# browser.close()