from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.keys import Keys

# Get username and password from credentials file
username = ""
password = ""

with open("./credentials.txt") as file:
    username = file.readline().strip()
    password = file.readline().strip()

# Set Chrome options in order to use Chrome in headless mode in 'production'
options = Options()
options.headless = False

# Open 'MeeBook' login page in Chrome
browser = webdriver.Chrome("./chromedriver", options=options)
browser.get("https://app.meebook.com/foraeldre/1")
browser.maximize_window()

# Click login button
login_button = browser.find_element_by_css_selector(
    "body > div.portal-frontpage > div > div.portal-frontpage__main-content > div > div:nth-child(2) > div > div:nth-child(1) > div > a > span")
login_button.click()

# Enter username
username_field = browser.find_element_by_css_selector("#username")
username_field.send_keys(username)
username_field.send_keys(Keys.RETURN)

# Enter password
password_field = browser.find_element_by_css_selector("#form-error")
password_field.send_keys(password)
password_field.send_keys(Keys.RETURN)

# Click 'Ugeplan/Lektie' tab
browser.implicitly_wait(2)
lektie_tab = browser.find_element_by_css_selector(
    "body > div.layout-portal__content > div > div.layout-portal__top > div.layout-box > ul > li.mb-main-tab-menu__item.mb-main-tab-menu__item--zindex-2 > div > a > span")
lektie_tab.click()

# Get 'li' for each kid
week_overview = browser.find_element_by_id("weekPlanSummaryList")
kid_li = week_overview.find_elements_by_tag_name("li")
print(kid_li)

# browser.close()
