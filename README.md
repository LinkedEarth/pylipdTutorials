[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/LinkedEarth/pylipdTutorials/HEAD)
[![DOI](https://zenodo.org/badge/509538632.svg)](https://zenodo.org/badge/latestdoi/509538632)

# pylipdTutorials: A Gentle Introduction to working with LiPD files in Python

A collection of science-driven tutorials for using the [PyLiPD](https://pylipd.readthedocs.io/en/latest/) python package. 

## Contents:

The `notebooks` folder contains [Jupyter Notebooks](https://jupyter.org/) that illustrate the main functionalities of the PyliPD package. 

The notebooks are organized in three levels:

- Level 0: Basic functionalities, such as loading a dataset in the LiPD format, working with the resulting `LiPD` object, and exporting the information to a [Pandas DataFrame](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html) for further analysis.
- Level 1: Using wrapper functions to get information about the variables contained in the datasets, filtering by specific metadata (e.g., variable name), obtaining a bilbiography and working with age ensembles.
- Level 2: Using [SPARQL](https://www.w3.org/TR/rdf-sparql-query/) directly to query the `LiPD` object. 

## Read-only

You may start by browsing this repository to consult its notebooks, which are rendered by the Github website or by using [nbviewer](https://nbviewer.org). If you like what you see, we encourage you to experiment with them, as per the following section.

## How to run these notebooks

### Using myBinder

[myBinder](https://mybinder.org/) allows you to run the notebooks in a no-install cloud container. This is the best solution if you just want to get you feet wet with the code. Simply click on the "launch Binder" badge at the top of the page. The notebooks will be automatically pulled into your workspace. Beware: it takes a few minutes for the BinderHub to be spun up the first time around. After repeated uses (not just by you) it becomes much faster, but the first time you launch might need to coincide with a coffee break, a run around the nearest park, or catching up on the literature.

### Local installation

If it's love at first sight and you want to take PyLiPD home with you, you may use the `environment.yml` file with `conda` to install the required packages within an `anaconda` or `miniconda` installation. That is, open a terminal, navigate to a folder containing `environment.yml` , then run the command :

`conda env create -f environment.yml`

This will install all the required packages and their dependencies. It may take a few minutes the first time.

If you are new to conda, just know that it is an environment manager for Python. What is an environment, you may ask? Think of it as a piece on your computer where all the Python libraries that you need for a specific application live in perfect harmony. To access this paradise, you need to activate the environment. If you used the `environment.yml` file:

`conda activate pylipd`

## Acknowledgements

This work was supported by NSF Grant [ICER 2126510](https://nsf.gov/awardsearch/showAward?AWD_ID=2126510&HistoricalAwards=false).


