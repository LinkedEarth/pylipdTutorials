# Standard, Standards, and More Standards.

Although `PyLiPD` allows you to open, manipulate, and soon write any LIPD files, its querying functionalities are most powerful when the file is "standard". But what does "standard" actually mean?

Following the definition of [Khider et al. (2019)](https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2019PA003632), a standard is comprised of three elements:
1. A standard representation of the data
2. A standard terminology for the data
3. Standard guidelines for the data

## Standard representation of the data

First, we need to define the categories for which we need information and the relationship amongst them. [LiPD](https://lipd.net), and by extension, the [ontology](http://linked.earth/pylipdTutorials/graph.html) over which `PyLiPD` operates, create these categories and associated relationship. This provides us with the necessary structure to be able to retrieve some information such as the name of a variable or the values associated with that variable. 

We also recognize that the format needs to be flexible enough for new categories to be added, so each scientist can describe their data with as many details as necessary to ensure reproducbility of the work. LiPD and its associated ontology allow for this flexibility: anyone can add new categories while respecting some of the fundamental structure of the LiPD representation. 

## A standard terminology for the data

While the structure allows us to retrieve the name of the variable, it doesn't allow for querying over specific names. This is feasbile through a language called SPARQL, and we provided examples of its use [in this tutorial](http://linked.earth/pylipdTutorials/notebooks/L2_custom_queries.html). 

However, it is impossible to write a query without knowing the name of the variable. And it helps if variables that are the same use the same name. Although tools like [regular expressions](https://en.wikipedia.org/wiki/Regular_expression) can help with flexible queries, it can be dangerous to use as two concepts similar enough to return a flexible match are actually very different (e.g., air temperature vs thermocline temperature on a query meant to match for temperature). Therefore, a standard terminology for key information in paleoclimate is needed. 

In 2021, NOAA published the [Paleoenvironmental Standard Terms (PaST) Thesaurus](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2020PA004193) that standardizes information about variables, units, measurement materials, etc. The LinkedEarth team has adopted the PaST Thesaurus for the standardization of LiPD files found on the [LipdVerse](https://lipdverse.org) or the [LipdGraph](https://linkedearth.graphdb.mint.isi.edu). Note that this nomenclature is not enforced and you may name your variables as you wish, but you may want to keep in mind this terminology to help you write powerful queries for your datasets. 

A list of the standardized terms for LiPD files can be accessed [here](https://lipdverse.org/vocabulary/). 

## Standard guidelines for the reporting of datasets

The last part of the standardization process is to create a list of the categories that should always have information to ensure re-use of the data. For instance, a paleoclimate datasets obtained from a coral is not useful if there is no information about where the coral sample was taken from.

Starting in 2016, the LinkedEarth team led an effort to create a reporting standard for paleoclimate datasets, surveying the community about which categories are necessary to ensure re-use of the data. [PaCTS](https://agupubs.onlinelibrary.wiley.com/doi/pdf/10.1029/2019PA003632) was the result of this effort. However, this standard is difficult to implement in practice as too many catagories were deemed necessary, leaving it as an aspirational standard.

We are interested in hearing from you regarding what categories you access the most in a file! Please, start a discussion on our [Discourse](https://discourse.linked.earth) forum. 





