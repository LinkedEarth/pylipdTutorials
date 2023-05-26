# pylipdTutorials: A Gentle Introduction to working with LiPD files in Python

A collection of science-driven tutorials for using the [PyLiPD](https://pylipd.readthedocs.io/en/latest/) python package. 

## Contents:

The `notebooks` folder contains [Jupyter Notebooks](https://jupyter.org/) that illustrate the main functionalities of the PyliPD package. 

The notebooks are organized in three levels:

- Level 0: Basic functionalities, such as loading a dataset in the LiPD format, working with the resulting `LiPD` object, and exporting the information to a [Pandas DataFrame](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) for further analysis.
- Level 1: Using wrapper functions to get information about the variables contained in the datasets, filtering by specific metadata (e.g., variable name), obtaining a bilbiography and working with age ensembles.
- Level 2: Using [SPARQL](https://www.w3.org/TR/rdf-sparql-query/) directly to query the `LiPD` object. 
