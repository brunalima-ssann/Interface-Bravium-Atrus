import pandas as pd
import json

# ---------- Ler Excel de carros ----------
carros_excel = r'C:\Users\BrunaSantosLima\Desktop\interface - Atrus\carros.xlsx'
df_carros = pd.read_excel(carros_excel)

# Converter para JSON
carros_json = df_carros.to_dict(orient='records')
with open('carros.json', 'w', encoding='utf-8') as f:
    json.dump(carros_json, f, indent=4, ensure_ascii=False)

print("✅ carros.json gerado com sucesso!")

# ---------- Ler Excel de motoristas ----------
motoristas_excel = 'motoristas.xlsx'
df_motoristas = pd.read_excel(motoristas_excel)

# Converter para JSON
motoristas_json = df_motoristas.to_dict(orient='records')
with open('motoristas.json', 'w', encoding='utf-8') as f:
    json.dump(motoristas_json, f, indent=4, ensure_ascii=False)

print("✅ motoristas.json gerado com sucesso!")