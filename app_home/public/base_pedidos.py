# automatizar
import pandas as pd
import json
import os

try:
    file_path = "Base pedidos.xlsm"

    if not os.path.exists(file_path):
        raise FileNotFoundError(f"Arquivo não encontrado: {file_path}")

    # Lê a planilha
    data = pd.read_excel(file_path, sheet_name="Planilha 1")

    # Converte o DataFrame em lista de dicionários
    registros = data.to_dict(orient="records")

    # Salva formatado (indentado)
    output_file = "pedidos.json"
    with open(output_file, "w", encoding="utf-8") as f:
        json.dump(registros, f, ensure_ascii=False, indent=4)

    print(f"Arquivo '{output_file}' criado com sucesso!")

except Exception as e:
    print("Ocorreu um erro:", e)
