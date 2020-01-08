import json
from elasticsearch import Elasticsearch
from pprint import pprint
import xlrd
import os


es = Elasticsearch(
    ['localhost'],
    port=9200
)
id = 0

for root, dirs, files in os.walk("poly", topdown=False):
    for filename in files:
        print(filename)
        if filename.endswith('.xls'):
            file = os.path.join(root, filename)
            loc = (file)
            wb = xlrd.open_workbook(loc)

            sheet_names = wb.sheet_names()
            list = []
            for sheet in wb.sheets():
                for row in range(1, sheet.nrows):
                    for column in range(sheet.ncols):
                        list.append(sheet.cell(row, column).value)

                    obj = {
                        "id": id,
                        "FID": list[0],
                        "ID_UA": list[1],
                        "OB_ID": list[2],
                        "SIFKO": list[3],
                        "PARCELA": list[4],
                        "ZAD_SPR": list[5],
                        "VRS_AKT": list[6],
                        "BARVA_POLIGONA": list[7],
                        "GEOMETRY": list[8]
                    }
                    es.index(index='poly', doc_type='Poly', id=id, body=obj)
                    id += 1
                    list.clear()

'''file = 'zgradbeMT\SI.MOP.PISUA.UA.xls'

# Give the location of the file
loc = (file)

# To open Workbook
wb = xlrd.open_workbook(loc)

sheet_names = wb.sheet_names()
list = []
for sheet in wb.sheets():
    for row in range(1,sheet.nrows):
        for column in range(sheet.ncols):
            list.append(sheet.cell(row, column).value)
        print(list)
        print("")
        obj = {
            "id": id,
            "FID": list[0],
            "ID_UA_L": list[1],
            "SIF_PU": list[2],
            "NAZ_UPR_ORG": list[3],
            "STEV_ZAD": list[4],
            "OB_ID": list[5],
            "SIF_VRS_UA_KRA_SIF": list[6],
            "VRS_AKT_2": list[7],
            "NAZ_UPR_POS": list[8],
            "OBJ": list[9],
            "DAT_IZD": list[10],
            "MAX_DAT_PRA": list[11],
            "DAT_RAZ": list[12],
            "ZAD_SPR": list[13],
            "VRS_AKT": list[14],
            "DAT_ZAC_GRA": list[15],
            "GEOMETRY": list[16]
        }
        es.index(index='stavbeLokacija', doc_type='Blog', id=id, body=obj)
        id += 1
        list.clear()'''

