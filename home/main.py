#!/usr/bin/env python

import requests
from bs4 import BeautifulSoup
import os
from urllib.parse import urljoin

URL = "https://app.combovideos.com.br/weather/bar-salmeron.xml"


response = requests.get(URL)
with open('feed.xml', 'wb') as file:
    file.write(response.content)

# CASO UM DIA PRECISE, ABAIXO ELE CRIA UMA PASTA, BAIXA OS ICONES E ADICIONA NA MESMA

# # URL da página que contém os links para os arquivos PNG
# urlxml = "https://app.combovideos.com.br/weather/"

# # Pasta onde os arquivos PNG serão salvos
# output_folder = "icons"

# # Crie a pasta se ela não existir
# os.makedirs(output_folder, exist_ok=True)

# # Faça a solicitação HTTP para a página
# response = requests.get(urlxml)

# if response.status_code == 200:
#     # Analise a página HTML com BeautifulSoup
#     soup = BeautifulSoup(response.content, "html.parser")

#     # Encontre todos os links para arquivos PNG
#     png_links = [urljoin(urlxml, a["href"]) for a in soup.find_all("a") if a["href"].endswith(".png")]

#     for link in png_links:
#         # Crie o caminho completo para salvar o arquivo
#         file_path = os.path.join(output_folder, os.path.basename(link))

#         # Faça o download do arquivo PNG
#         with requests.get(link, stream=True) as r:
#             r.raise_for_status()
#             with open(file_path, "wb") as f:
#                 for chunk in r.iter_content(chunk_size=8192):
#                     f.write(chunk)

#     print(f"{len(png_links)} arquivos PNG baixados com sucesso.")
# else:
#     print(f"Não foi possível acessar a página: {urlxml}")