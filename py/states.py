import os
import pandas as pd
import json

states_df = pd.read_csv('states.csv')

rates_df = pd.read_csv('rates.csv')
rates_df = rates_df[rates_df['age_group'] == 'All']
rates_df = rates_df[rates_df['substance'] == 'total']

pets_df = pd.read_csv('pets.csv')

substates = rates_df['state'].tolist()
subrates = rates_df['value'].tolist()

petstates = pets_df['state'].tolist()
petrates = pets_df['PetOwnershipTotalHouseoldsPerc']
#print(substates)
combined_data = {"values": []}
for state in states_df.itertuples():
    state_name = state.state.strip()
    population = state.population.replace(',','')
    sub = subrates[substates.index(state_name)]
    subpercent = (int(sub)*1000)*100/int(population)
    petpercent = petrates[petstates.index(state_name)]

    state_data = {
        "state": state_name,
        "population": population,
        "totalsub": subpercent,
        "totalpet": petpercent
    }

    combined_data["values"].append(state_data)

with open('statefinal.json', 'w') as json_file:
    json.dump(combined_data, json_file, indent=2)