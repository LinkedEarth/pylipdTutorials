Search.setIndex({"docnames": ["intro", "notebooks/L0_lipd_object", "notebooks/L0_loading_lipd_datasets", "notebooks/L1_working_with_ensembles"], "filenames": ["intro.md", "notebooks/L0_lipd_object.ipynb", "notebooks/L0_loading_lipd_datasets.ipynb", "notebooks/L1_working_with_ensembles.ipynb"], "titles": ["An introduction to the PyLiPD package", "Basic manipulation of <code class=\"docutils literal notranslate\"><span class=\"pre\">pylipd.LiPD</span></code> object", "Reading LiPD formatted datasets with <code class=\"docutils literal notranslate\"><span class=\"pre\">PyLiPD</span></code>", "Working with ensembles in <code class=\"docutils literal notranslate\"><span class=\"pre\">PyLiPD</span></code>"], "terms": {"thi": [0, 1, 2, 3], "small": 1, "sampl": [], "give": [], "you": [0, 1, 2, 3], "feel": [], "how": [0, 3], "content": [], "structur": [], "It": [0, 1], "show": [], "off": [], "few": [], "major": [], "file": [0, 1, 3], "type": 1, "well": [], "some": [0, 1, 2], "doe": [], "go": [], "depth": [1, 3], "ani": [], "particular": 3, "topic": [], "check": [1, 2, 3], "out": [2, 3], "document": 1, "more": [0, 1, 2, 3], "inform": [0, 1], "page": [], "bundl": [], "see": [1, 2, 3], "tableofcont": [], "read": [0, 1, 3], "lipd": [0, 3], "format": [0, 3], "dataset": [0, 3], "pylipd": [], "basic": [2, 3], "manipul": [0, 2, 3], "object": [0, 3], "work": [0, 2], "ensembl": 0, "deborah": [1, 2, 3], "khider": [1, 2, 3], "analysi": 1, "an": [1, 2, 3], "exist": [1, 2], "5": [1, 2, 3], "minut": [1, 2, 3], "queri": [0, 1, 2], "none": [1, 2, 3], "tutori": [0, 1, 2, 3], "assum": [1, 2, 3], "knowledg": [1, 2, 3], "python": [0, 1, 2, 3], "panda": [0, 1, 3], "If": [1, 2, 3], "ar": [0, 1, 2, 3], "familiar": [0, 1, 2, 3], "code": [1, 2, 3], "languag": [0, 1, 2, 3], "librari": [1, 3], "http": [1, 2, 3], "link": [1, 2, 3], "earth": [1, 2, 3], "ec_workshops_pi": [1, 2, 3], "notebook": [0, 1, 2, 3], "us": [0, 1, 2, 3], "follow": [1, 2, 3], "nurhati": [1, 2], "i": [1, 2], "s": [1, 2, 3], "cobb": [1, 2], "k": [1, 2, 3], "m": [1, 2, 3], "di": [1, 2], "lorenzo": [1, 2], "e": [1, 2], "2011": [1, 2], "decad": [1, 2], "scale": [1, 2], "sst": [1, 2], "salin": [1, 2], "variat": [1, 2], "central": [1, 2], "tropic": [1, 2, 3], "pacif": [1, 2, 3], "signatur": [1, 2], "natur": [1, 2, 3], "anthropogen": [1, 2], "climat": [1, 2], "chang": [1, 2], "journal": [1, 2], "24": [1, 2], "13": [1, 2], "3294": [1, 2], "3308": [1, 2], "doi": [1, 2, 3], "10": [1, 2, 3], "1175": [1, 2], "2011jcli3852": [1, 2], "1": [1, 2, 3], "euro2k": [1, 2], "databas": 1, "pages2k": [1, 2], "consortium": [1, 2], "emil": [1, 2], "geai": [1, 2], "j": [1, 2], "mckai": [1, 2], "n": [1, 2], "et": [1, 2, 3], "al": [1, 2, 3], "A": [1, 2], "global": [1, 2], "multiproxi": [1, 2], "temperatur": [1, 2], "reconstruct": [1, 2], "common": [1, 2], "era": [1, 2], "sci": [1, 2], "4": [1, 2, 3], "170088": [1, 2], "2017": [1, 2], "1038": [1, 2, 3], "sdata": [1, 2], "88": [1, 2], "import": [1, 2, 3], "famliar": 1, "r": [1, 2], "util": 1, "function": [1, 2, 3], "abil": 1, "expand": 1, "timeseri": 1, "capabl": [0, 1], "wa": [0, 1, 3], "also": [0, 1, 2], "present": [1, 2], "previou": 1, "iter": 1, "retain": 1, "compatbl": 1, "eas": 1, "transit": 1, "re": [1, 2], "unsur": 1, "about": [0, 1], "what": 1, "context": 1, "first": [1, 2, 3], "let": [1, 2, 3], "load": [0, 1, 3], "singl": [1, 2], "data_path": [1, 2, 3], "ocn": [1, 2], "palmyra": [1, 2], "lpd": [1, 2, 3], "d": [1, 2, 3], "0": [1, 2, 3], "00": [1, 2, 3], "100": [1, 2, 3], "72it": [], "now": [1, 2], "get": 1, "all": [1, 2, 3], "note": [1, 2, 3], "get_timeseri": 1, "requir": 1, "pass": [1, 3], "name": [1, 2, 3], "onli": [1, 2, 3], "want": [1, 2], "your": [1, 2], "can": [1, 2, 3], "get_all_dataset_nam": [1, 2, 3], "call": [1, 2], "ts_list": 1, "dict": 1, "abov": [1, 2], "return": [1, 2, 3], "dictionari": 1, "organ": [0, 1], "kei": 1, "dict_kei": 1, "each": [1, 2, 3], "store": [1, 2, 3], "list": [1, 2, 3], "preserv": 1, "essenti": [1, 2], "metadata": [1, 2], "valu": [1, 3], "pair": 1, "although": 1, "easi": 1, "navig": 1, "across": 1, "variou": [0, 1], "One": [1, 3], "simpl": 1, "wai": [0, 1, 2], "do": [1, 2], "so": [1, 2], "datafram": [0, 1, 3], "df": [1, 3], "to_datafram": 1, "true": [1, 2], "mode": 1, "time_id": 1, "hasurl": 1, "datacontributor": 1, "datasetnam": [1, 3], "googledataurl": 1, "createdbi": 1, "lipdvers": [1, 2], "studynam": 1, "googlemetadataworksheet": 1, "paleodata_hasmeanvalu": 1, "paleodata_qccertif": 1, "paleodata_proxyobservationtyp": 1, "paleodata_wdspaleourl": 1, "paleodata_variabletyp": 1, "paleodata_valu": [1, 3], "paleodata_descript": 1, "paleodata_inferredvariabletyp": 1, "paleodata_datatyp": 1, "paleodata_qcnot": 1, "paleodata": 1, "ag": [1, 2, 3], "mint": 2, "isi": 2, "edu": 2, "palmi": [], "hlf": [], "mne": [], "doc": 1, "googl": 1, "com": 1, "spreadsheet": 1, "1aifocq": 1, "matlab": [], "3": [1, 2, 3], "nurhati2011_palmyra": [], "oax0htr": 1, "8": [1, 3], "977298": [], "nja": [], "sr": 1, "ca": 1, "www1": [], "ncdc": [], "noaa": [], "gov": [], "pub": [], "paleo": 1, "measur": 1, "96": 1, "9": [1, 3], "91": 1, "94": 1, "92": 1, "89": 1, "87": [1, 2], "81": 1, "nan": 1, "1942": [], "210000": [], "infer": 1, "1998": 1, "29": 1, "21": [1, 2], "04": 1, "1997": 1, "year": [1, 3], "ad": [1, 3], "float": 1, "2": [1, 2, 3], "914484": [], "d18o": [1, 3], "41": [1, 3], "47": [1, 2], "49": 1, "43": [1, 2, 3], "48": 1, "53": [1, 3], "duplic": 1, "modern": 1, "record": [1, 3], "c": [1, 2, 3], "168336": [], "767006": [], "39": [1, 2], "35": [1, 3], "36": [1, 3], "22": 1, "33": [1, 3], "d18osw": 1, "residu": 1, "calcul": 1, "coupl": 1, "srca": 1, "row": [1, 3], "93": 1, "column": 1, "filter": [0, 1], "have": 1, "look": 1, "avail": [1, 2, 3], "properti": 1, "which": [0, 1, 2], "correspond": 1, "header": 1, "index": [1, 3], "geo_meanlon": [1, 3], "geo_meanlat": [1, 3], "geo_meanelev": [1, 3], "geo_typ": 1, "geo_pages2kregion": 1, "geo_ocean": 1, "geo_sitenam": 1, "pub1_author": 1, "pub1_titl": 1, "pub1_url": 1, "pub1_urld": 1, "pub1_citekei": 1, "pub1_institut": 1, "pub1_doi": 1, "pub2_author": 1, "pub2_titl": 1, "pub2_publish": 1, "pub2_doi": 1, "pub2_journ": 1, "pub2_citekei": 1, "pub2_link": 1, "pub2_dataurl": 1, "pub2_volum": 1, "pub2_year": 1, "pub2_pag": 1, "pub3_author": 1, "pub3_journ": 1, "pub3_titl": 1, "pub3_volum": 1, "pub3_doi": 1, "pub3_link": 1, "pub3_year": 1, "pub3_dataurl": 1, "pub3_publish": 1, "pub3_issu": 1, "pub3_citekei": 1, "pub3_pag": 1, "originaldataurl": 1, "googlespreadsheetkei": 1, "archivetyp": [1, 3], "tabletyp": 1, "paleodata_measurementtablemd5": 1, "paleodata_paleodatatablenam": 1, "paleodata_filenam": 1, "paleodata_googleworksheetkei": 1, "paleodata_measurementtablenam": 1, "yearunit": 1, "paleodata_hasmedianvalu": 1, "paleodata_sensorspeci": 1, "paleodata_tsid": 1, "paleodata_sensorgenu": 1, "paleodata_incompil": 1, "paleodata_hasminvalu": 1, "paleodata_hasresolution_hasminvalu": 1, "paleodata_hasresolution_hasmedianvalu": 1, "paleodata_hasresolution_hasmaxvalu": 1, "paleodata_hasresolution_hasmeanvalu": 1, "paleodata_hasresolution_unit": 1, "paleodata_hasmaxvalu": 1, "paleodata_useinglobaltemperatureanalysi": 1, "paleodata_numb": 1, "paleodata_not": 1, "paleodata_missingvalu": 1, "paleodata_unit": [1, 3], "paleodata_iso2kui": 1, "paleodata_ocean2kid": 1, "paleodata_interpret": 1, "paleodata_pages2kid": 1, "paleodata_proxi": [1, 3], "paleodata_variablenam": [1, 3], "dtype": 1, "sr_ca": 1, "henc": 1, "why": 1, "variabl": [0, 1, 2, 3], "its": 1, "associ": [1, 2, 3], "notic": 1, "two": [1, 2, 3], "sinc": [1, 3], "coral": [1, 2], "stand": 1, "reason": 1, "delta": 1, "18": 1, "o": 1, "other": 1, "seawat": 1, "qcnote": 1, "field": 1, "In": [0, 1, 2, 3], "fact": 1, "necessari": 1, "howev": [0, 1], "becom": [0, 1], "when": [1, 3], "collect": 1, "shown": 1, "next": 1, "exampl": [0, 1], "To": [1, 2, 3], "here": 1, "df_cut": 1, "iloc": 1, "length": 1, "veri": 1, "pyleoclim": [1, 3], "softwar": 1, "initi": 1, "contain": [0, 1, 2, 3], "subject": 1, "sever": [0, 1, 2], "larg": 1, "overwhelm": 1, "need": [0, 1, 2], "case": [0, 1, 3], "therefor": 1, "ha": 1, "nifti": 1, "get_timeseries_essenti": [1, 3], "grab": 1, "geograph": 1, "locat": [0, 1], "includ": [0, 1], "archiv": [0, 1, 2], "proxi": 1, "df_essenti": 1, "paleodata_proxygener": [1, 3], "time_variablenam": [1, 3], "time_valu": [1, 3], "time_unit": [1, 3], "depth_variablenam": [1, 3], "depth_valu": [1, 3], "depth_unit": [1, 3], "162": 1, "permil": [1, 3], "mmol": 1, "mol": 1, "The": [0, 1, 3], "through": [0, 1, 2, 3], "alwai": [1, 2], "remain": 1, "same": 1, "path": [1, 2], "d_dir": [1, 2], "load_from_dir": [1, 2], "31": [1, 2], "16": [1, 2], "42": 2, "05it": 2, "32": [1, 2], "44": 1, "68it": [], "52": 2, "97it": [], "68": 2, "36it": [], "27": 2, "46": [1, 2], "78it": [], "our": [1, 2], "df_dir": 1, "head": 1, "redsea": [1, 2], "feli": [1, 2], "2000": [1, 2], "85": [], "34": 1, "6": [1, 2, 3], "12": [1, 3], "82": 3, "05": 3, "02": [1, 3], "62": 1, "1995": 1, "583": [], "417": [], "25": [1, 3], "083": [], "1994": 1, "arc": [1, 2], "forfjorddalen": [1, 2], "mccarrol": [1, 2], "2013": [1, 2, 3], "tree": 1, "73": 3, "15": [1, 3], "200": [], "1100": [], "1101": [], "1102": [], "1103": [], "1104": [], "1105": [], "1106": [], "110": [], "mxd": 1, "6724083323": [], "9420877372": [], "9158317899": [], "na": 1, "eur": [1, 2], "tallinn": [1, 2], "tarand": [1, 2], "2001": [1, 2], "59": [1, 3], "40": 1, "75": [], "7": [1, 3], "degc": 1, "histor": 1, "1500": 1, "1501": 1, "1502": 1, "1503": 1, "1504": 1, "1505": 1, "1506": 1, "150": 1, "size": 1, "shape": 1, "83": [1, 3], "we": [1, 2, 3], "expandad": 1, "uniqu": 1, "arrai": 1, "juliandai": 1, "trsgi": 1, "uncertainty_temperatur": 1, "sampleid": 1, "densiti": 1, "d13c": 1, "sampledens": 1, "thick": 1, "interest": [1, 3], "df_temp": 1, "centraleurop": [1, 2], "dobrovoln\u00fd": 1, "2009": [1, 2], "199": 1, "321": 1, "842": 1, "667": 1, "997": 1, "101": 1, "documentari": 1, "17": [1, 2], "centralandeasternpyrene": [1, 2], "pla": [1, 2], "2004": [1, 2, 3], "lake": 1, "sediment": 1, "2280": [], "09114": [], "19458": [], "07387": [], "42006": [], "chrysophyt": [], "1984": [], "1963": [], "1943": [], "1932": [], "1916": [], "45": [2, 3], "bp": 3, "lakesilvaplana": [1, 2], "trachsel": [1, 2], "2010": [1, 2], "80": [], "1791": [], "181707222": [], "111082797": [], "001382129": [], "008": [], "reflect": [], "1176": [], "1177": [], "1178": [], "1179": [], "1180": [], "1181": [], "118": 3, "leav": 1, "everyth": 1, "relat": 1, "uncertainti": [1, 3], "df_filt": 1, "europeanalp": [1, 2], "b\u00fcntgen": [], "70": [], "2050": [], "405": [], "395": [], "209": [], "244": [], "658": [], "trw": 1, "500": 1, "499": [], "498": [], "497": [], "496": [], "495": [], "494": [], "keep": 1, "problem": 1, "delet": 1, "behav": 1, "similarli": 1, "These": [0, 1], "underpin": 1, "adavanc": 1, "discuss": 1, "later": 1, "make": [1, 2], "copi": [1, 2], "d_test": 1, "print": [1, 2, 3], "dobrovoln_": [1, 2], "b_ntgen": [1, 2], "tjeggelva": [1, 2], "bjorklund": [1, 2], "2012": [1, 2], "indigirka": [1, 2], "hugh": [1, 2], "1999": [1, 2], "spannagelcav": [1, 2], "mangini": [1, 2], "2005": [1, 2, 3], "aqabajordanaq19": [1, 2], "heiss": [1, 2], "jamtland": [1, 2], "wilson": [1, 2], "2016": [1, 2], "rapid": [1, 2], "5p": [1, 2], "moffa": [1, 2], "sanchez": [1, 2], "2014": [1, 2], "northernspain": [1, 2], "mart_n": [1, 2], "chivelet": [1, 2], "maritimefrenchalp": [1, 2], "aqabajordanaq18": [1, 2], "tornetrask": [1, 2], "melvin": [1, 2], "easterncarpathianmountain": [1, 2], "popa": [1, 2], "2008": [1, 2, 3], "polarur": [1, 2], "2015": [1, 2], "larocqu": [1, 2], "tobler": [1, 2], "coastofportug": [1, 2], "abrant": [1, 2], "tatramountain": [1, 2], "spanishpyrene": [1, 2], "dorado": [1, 2], "linan": [1, 2], "finnishlakeland": [1, 2], "helama": [1, 2], "seebergse": [1, 2], "northernscandinavia": [1, 2], "esper": [1, 2], "gulfofalaska": [1, 2], "kittelfjal": [1, 2], "l_tschental": [1, 2], "2006": [1, 2, 3], "stockholm": [1, 2], "leijonhufvud": [1, 2], "akademiinaukicecap": [1, 2], "opel": [1, 2], "And": 1, "last": 1, "entri": [1, 3], "d_eur": 1, "expect": 1, "process": 1, "prudent": 1, "origin": 1, "than": [1, 3], "rem": 1, "allow": [2, 3], "write": [2, 3], "open": 2, "web": 2, "add": 2, "togeth": 2, "time": [2, 3], "mose": 2, "swart": 2, "p": 2, "rosenheim": 2, "b": 2, "evid": 2, "multidecad": 2, "eastern": [2, 3], "north": [2, 3], "atlant": 2, "paleoceanographi": 2, "pa3010": 2, "1029": 2, "2005pa001257": 2, "stott": 2, "l": 2, "timmermann": 2, "thunel": 2, "2007": [2, 3], "southern": 2, "hemispher": 2, "deep": 2, "sea": 2, "warm": 2, "led": 2, "deglaci": 2, "atmospher": 2, "co2": 2, "rise": 2, "scienc": [0, 2, 3], "new": 2, "york": 2, "y": 2, "318": 2, "5849": 2, "435": 2, "438": 2, "1126": 2, "1143791": 2, "tudhop": 2, "w": 2, "chilcott": 2, "mcculloch": 2, "t": [2, 3], "cook": 2, "chappel": 2, "ellam": 2, "el": 2, "ni\u00f1o": 2, "oscil": 2, "glacial": 2, "interglaci": 2, "cycl": 2, "291": 2, "1511": 2, "1517": 2, "1057969": 2, "tiernei": 2, "abram": 2, "anchuka": 2, "evan": 2, "giri": 2, "kilbourn": 2, "h": [2, 3], "surfac": 2, "past": 2, "four": 2, "centuri": 2, "30": [2, 3], "226": 2, "252": 2, "1002": 2, "2014pa002717": 2, "orsi": 2, "cornuel": 2, "severinghau": 2, "littl": 2, "ic": 2, "cold": 2, "interv": 2, "west": 2, "antarctica": 2, "borehol": 2, "antarct": 2, "sheet": 2, "divid": 2, "geophi": 2, "lett": 2, "l09710": 2, "2012gl051260": 2, "orient": 2, "program": 2, "oop": 2, "paramet": [2, 3], "g": 2, "repres": 2, "procedur": 2, "applic": 2, "ubiquitu": 2, "advantag": [2, 3], "over": 2, "method": [2, 3], "relationship": 2, "between": 2, "clearli": 2, "defin": [0, 2], "action": 2, "deal": [2, 3], "directli": [2, 3], "creat": [2, 3], "empti": 2, "23": 3, "71it": [], "easili": 2, "data_url": 2, "org": [2, 3], "iso2k100_co06mop": 2, "1_0_2": 2, "co06mop": 2, "d2": 2, "98it": [], "both": 2, "simpli": 2, "64it": [], "62it": [], "d3": 2, "54it": 2, "19": 2, "51": [], "60it": [], "54": 3, "90it": [], "58": [], "56": [], "03it": [1, 2], "85it": [], "57": 2, "75it": 1, "92it": 2, "still": 2, "describ": [2, 3], "append": 2, "them": 2, "82it": 1, "81it": [], "graph": 2, "support": [0, 2], "complex": 2, "sparql": [0, 2], "wrap": 2, "facilit": 2, "know": [2, 3], "lipd_remot": 2, "set_endpoint": 2, "linkedearth": 2, "graphdb": 2, "repositori": 2, "lipdverse3": 2, "load_remote_dataset": 2, "madanglagoonpapuanewguinea": 2, "kuhnert": 2, "md98_2181": 2, "ant": 2, "cach": 2, "endpoint": 2, "done": [2, 3], "plan": 2, "mulitpl": 2, "hundr": 2, "thousand": 2, "mai": 2, "choos": 2, "__name__": 2, "__main__": 2, "notat": 2, "d_parallel": 2, "01": 3, "08": 3, "29it": [], "40it": [], "76it": 2, "after": 2, "intial": 2, "resum": 2, "onc": 2, "one": [2, 3], "differ": [2, 3], "cours": 2, "d_merg": 2, "tabl": 3, "handl": 3, "from": 3, "mccabe": 3, "glynn": 3, "johnson": 3, "strong": 3, "influenc": 3, "drought": 3, "southwestern": 3, "america": 3, "854": 3, "geosci": 3, "617": 3, "621": 3, "ngeo1862": 3, "lawrenc": 3, "liu": 3, "z": 3, "herbert": 3, "evolut": 3, "plio": 3, "pleistocn": 3, "glaciat": 3, "312": 3, "5770": 3, "79": 3, "crystal": 3, "odp846": 3, "50": 3, "89it": [], "06": [], "02it": [], "get_ensemble_t": 3, "ensemblet": 3, "ensemblevariablenam": 3, "ensemblevariablevalu": 3, "ensemblevariableunit": 3, "ensembledepthnam": 3, "ensembledepthvalu": 3, "ensembledepthunit": 3, "mm": 3, "chron0model0ensemble0": 3, "kyr": 3, "63": [1, 3], "most": 3, "like": 3, "variant": 3, "unit": 3, "vector": 3, "axi": 3, "particularli": 3, "match": 3, "regard": 3, "model": 3, "obtain": [0, 3], "dsname": 3, "ensemblevarnam": 3, "methodobj": 3, "For": 3, "part": 3, "demo": 3, "cave": 3, "rememb": 3, "zero": 3, "previous": 3, "df_t": 3, "speleothem": 3, "1386": 3, "61": [1, 3], "vpdb": 3, "ensembleseri": 3, "book": 0, "driven": 0, "dedic": 0, "paleoclim": 0, "made": 0, "contrib": 0, "rock": 0, "three": 0, "level": 0, "provid": 0, "export": 0, "walk": 0, "bibliographi": 0, "highlight": 0, "pre": 0, "advanc": 0, "strength": 0, "unlock": 0, "pronounc": 0, "sparkl": 0, "great": 0, "power": 0, "come": 0, "learn": 0, "curv": 0, "nsf": 0, "grant": 0, "icer": 0, "2126510": 0, "50it": [], "world": [], "center": [], "paleoclimatolog": [], "nurhati2010httpswwwncdcnoaagovpaleostudy8609da": [], "www": [], "studi": [], "8609": [], "porit": [], "lutea": [], "pacificnurhati2011": 1, "co11nupm01bt1": [], "ocn_129": 1, "season": [], "subann": [], "origina": 1, "ocean2k_v1": 1, "co11nupm01b": [], "interpdirect": [], "neg": [], "variabledeta": [], "climateinterpretation_season": 1, "pub2_issu": [], "14": 1, "77it": [], "37": [], "23it": 2, "94it": [], "55it": [], "32it": [], "20": [1, 2], "31it": [], "38it": 1, "37it": [], "30it": [], "07it": [], "96it": [], "10it": [], "08it": [], "03": 1, "26": [], "11it": [], "09": [], "featur": 1, "wp": 1, "47it": 1, "24it": 1, "65": [1, 2], "77": 1, "95it": 1, "04it": [1, 2], "146": 1, "590": 1, "230": 1, "685": 1, "427": 1, "062": 1, "133": 1, "153": 1, "653": 1, "800": 1, "801": 1, "802": 1, "803": 1, "804": 1, "805": 1, "806": 1, "807": 1, "808": 1, "66": 1, "90": [1, 2], "600": 1, "250": 1, "891": 1, "892": 1, "893": 1, "894": 1, "895": 1, "896": 1, "897": 1, "898": 1, "899": 1, "97": 1, "84": 1, "78": 1, "28": [1, 2], "325": 1, "130": 1, "1996": 1, "603": 1, "643": 1, "074": 1, "671": 1, "750": 1, "11": 1, "000": 1, "1830": 1, "87088": 1, "90377": 1, "94562": 1, "93462": 1, "91326": 1, "midg": 1, "0300": 1, "5900": 1, "9000": 1, "6000": 1, "0000": 1, "3250": 1, "4000": 1, "7500": 1, "2475": 1, "3375": 1, "650": 1, "08710426": 1, "816246622": 1, "166560665": 1, "08398": 1, "783": 1, "784": 1, "785": 1, "786": 1, "787": 1, "788": 1, "789": 1, "790": 1, "791": 1, "22it": 2, "56it": 2, "28it": 2, "01it": 2, "74it": 2, "66it": 2, "65it": 2, "93it": 2, "64": 2, "49it": 2, "16it": 2, "34it": 2, "46it": 3}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"welcom": [], "your": [], "jupyt": [], "book": [], "get": 0, "start": 0, "function": 0, "basic": [0, 1], "manipul": 1, "pylipd": [0, 1, 2, 3], "lipd": [1, 2], "object": [1, 2], "author": [1, 2, 3], "preambl": [1, 2, 3], "goal": [1, 2, 3], "keyword": [1, 2, 3], "pre": [1, 2, 3], "requisit": [1, 2, 3], "relev": [1, 2, 3], "packag": [0, 1, 2, 3], "data": [1, 2, 3], "descript": [1, 2, 3], "demonstr": [1, 2, 3], "extract": [1, 3], "time": 1, "seri": 1, "from": [1, 2], "format": [1, 2], "dataset": [1, 2], "work": [1, 3], "one": 1, "multipl": 1, "remov": 1, "pop": 1, "out": 1, "read": 2, "load": 2, "local": 2, "file": 2, "url": 2, "directori": 2, "remot": 2, "lipdgraph": 2, "databas": 2, "parallel": 2, "merg": 2, "ensembl": 3, "inform": 3, "paleodata": 3, "an": 0, "introduct": 0, "contributor": 0, "acknowledg": 0}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 56}})