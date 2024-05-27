from bs4 import BeautifulSoup
import requests
import re
from datetime import datetime
import argparse
import os

soup = BeautifulSoup(requests.get("https://www.topstep.tv/daily-levels/").text, features="html.parser")
contract_titles = ["S&P 500", "NASDAQ-100", "CRUDE OIL", "GOLD"]

def getUpdatedDate(soup):
    updated_pattern = r"Updated:(.*)"
    for i in soup.find_all('p'):
        updated_match = re.search(updated_pattern, i.text)
        if updated_match:
            parsed_date = datetime.strptime(updated_match.group(1).strip(), "%B %d, %Y").strftime("%Y%m%d")
            return parsed_date


def parseContract(p):
    d = {}
    contract_pattern = r"(.+?) \((.*)\)"
    contract_match = re.search(contract_pattern, p.text.lower())
    d["common_name"] = contract_match.group(1)
    d["contract"] =  contract_match.group(2)
    d["contract_prefix"] = contract_match.group(2)[:-2]
    d["levels"] = list()
    # navigate up 3
    parent_element = p.parent.parent.parent
    level_pattern = r"(.+?)\s+(.*)"
    for li in parent_element.find_all('li'):
        pattern_match = re.search(level_pattern, li.text.lower())
        d["levels"].append( { 'level' : float(pattern_match.group(1).replace(',', '')), 'level_name' : pattern_match.group(2) } )
    return d
    


if __name__ == "__main__":
    parser = argparse.ArgumentParser("Script to record tilt to file")
    parser.add_argument("-o", "--output_directory", default="/data/trading/topstep/daily_levels/")
    parser.add_argument('-f', '--filename', default="daily_levels.json")
    parser.add_argument('-v', '--verbose', action="store_true", default=False)
    args = parser.parse_args()

    updated_date = getUpdatedDate(soup)
    if args.verbose:
        print("Updated date: " + updated_date)
    
    
    contracts = []
    for p in soup.find_all('p'):
        for contract in contract_titles:
            if contract.lower() in p.text.lower():
                contract_dict = parseContract(p)
                contract_dict['date'] = updated_date
                contracts.append(contract_dict)
    if args.verbose:
        print(contracts)

    tokens = args.filename.split(".")
    filename = ".".join(tokens[0:-1] + [datetime.now().strftime("%Y%m%d")] + [tokens[-1]])
    output_filename = os.path.join(args.output_directory, filename)

    header_text = "date,symbol,contract,level,level_name\n"
    line_buffering = 1
    with open(output_filename, 'w', line_buffering) as outfile:
        outfile.write(header_text)
        for contract in contracts:
            for level in contract["levels"]:
                outfile.write("%s,%s,%s,%f,%s\n" % (contract["date"], contract["contract_prefix"], contract["contract"], level["level"], level["level_name"]))
            


            
