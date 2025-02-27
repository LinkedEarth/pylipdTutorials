[![license](https://img.shields.io/github/license/linkedearth/PyleoTutorials.svg)]()
[![PyPI version](https://badge.fury.io/py/pylipd.svg)](https://badge.fury.io/py/pylipd)

# An introduction to the PyLiPD package

This book contains several science-driven examples on how to use the [PyLiPD](https://pylipd.readthedocs.io/en/latest/) python package, which is dedicated to the loading and manipulation of paleoclimate datasets in the [LiPD format](https://lipd.net). 

## Contributors

<a href="https://github.com/LinkedEarth/pylipdTutorials/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=LinkedEarth/pylipdTutorials" />
</a>

Made with [contrib.rocks](https://contrib.rocks).

The notebooks are organized in three levels:

- **Getting Started**: Provides basic tutorials on the various ways to load LiPD datasets and work with a [`LiPD`](https://pylipd.readthedocs.io/en/latest/api.html#lipd-pylipd-lipd-lipd), including export to [`Pandas DataFrame`](https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.html).
- **Basic Functionalities**: These tutorials walk through some of the basic manipulations of LiPD files such as obtaining information about variables, archives, bibliography, location, and working with ensembles. It also highlights some of the pre-defined filtering capabilities.
- **Advanced Querying**: The strength of PyLiPD is that it unlocks advanced querying capabilities through the [`SPARQL`](https://www.w3.org/TR/rdf-sparql-query/) (pronounced 'sparkle') language. However, with great powers comes a learning curve. In this case, you will need to become more familiar with this query language. 

```{tableofcontents}
```

## Acknowledgements
This work was supported by NSF Grant [ICER 2126510](https://nsf.gov/awardsearch/showAward?AWD_ID=2126510&HistoricalAwards=false).