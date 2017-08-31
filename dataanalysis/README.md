## Data Analysis Challenge

### Dependencies & Install
I ran the included .ipynb in a jupyter notebook. You will need python 2 and jupyter to run it, along with the following python packages: pandas, numpy, and matplotlib.

A short way to pull dependencies for the notebook is to install anaconda by following the directions [here](https://www.anaconda.com/download)

Otherwise, [the jupyter page](http://jupyter.org/install.html) should be helpful in installing jupyter. 

The python dependencies will be pulled in via anaconda, or you can also install them by using pip: `pip install -r requirements.txt`

The other notebook is run in python 3 and requires similar dependencies: pandas, numpy, matplotlib, and scikit-learn. 

### Results

As is visible on the data analysis ipynb, I found that the AOV that was stated by the problem was indeed problematic because of several outliers. After manually combing through the entries, I removed some outlying data (justifications in the code). The AOV went from  \$3145.13 to \$302.58 after modifications, much closer to the original median of \$284.0. 

Additionally, after searching around for anomaly detection methods, I found a isolation forest method that seemed to have applications in anomaly detection. The problem with this approach, obviously, is that the unsupervised algorithm needs to be tested against actual answers - and I don't know for sure whether any of these transactions was "abnormal." However, given our earlier explanation of abnormality in the data analysis ipynb, it seems that the results of the isolation forest support my AOV.

