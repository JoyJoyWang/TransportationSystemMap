import folium
import  time
import requests
from urllib.request import quote
import numpy as np
import pandas as pd
import seaborn as sns
import webbrowser
from folium.plugins import HeatMap
from folium.plugins import HeatMapWithTime


loc=pd.read_csv(r'data4.csv')
xset=loc['x']
yset=loc['y']
lon = np.array([i for i in xset],dtype=float)
lat = np.array([i for i in yset],dtype=float)
i=7

#datamove=pd.DataFrame(columns=['date','lat','lon','scale'])
datamove=[]
datause=[]

for i in range(7,20):
    datestr='May%02d_AM' %(i)
    datenum='May%02d_MD' %(i)
    datenum2='May%02d_PM' %(i)
    scaleset=loc[datestr]
    scaleset2=loc[datenum]
    scaleset3=loc[datenum2]
    scale= np.array([i for i in scaleset],dtype=float)
    scale2= np.array([i for i in scaleset2],dtype=float)
    scale3= np.array([i for i in scaleset3],dtype=float)
    data0=[]
    for i in range(len(xset)):
        data0.append([lat[i],lon[i],scale[i]])
        #data0.append([lat[i],lon[i],scale2[i]])
        #data0.append([lat[i],lon[i],scale3[i]])
    datause.append(data0)
    data0=[]
    for i in range(len(xset)):
        #data0.append([lat[i],lon[i],scale[i]])
        data0.append([lat[i],lon[i],scale2[i]])
        #data0.append([lat[i],lon[i],scale3[i]])
    datause.append(data0)
    data0=[]
    for i in range(len(xset)):
        #data0.append([lat[i],lon[i],scale[i]])
        #data0.append([lat[i],lon[i],scale2[i]])
        data0.append([lat[i],lon[i],scale3[i]])
    datause.append(data0)

    datamove.append(datestr)
    datamove.append(datenum)
    datamove.append(datenum2)
    #data1 = pd.DataFrame([[datenum,lat[i],lon[i],scale[i]] for i in range(len(xset))],columns=['date','lat','lon','scale'])
    #datamove=datamove.append(data1,ignore_index=True)
    #datause.append(data0)
#datause['scale'] = datamove['scale'] / datamove['scale'].sum()
map_osm = folium.Map(location=[40.8,-73.9],zoom_start=10)
#HeatMap(datamove).add_to(map_osm)
timeline=HeatMapWithTime(datause,index=datamove)
timeline.add_to(map_osm)
file_path = r"May.html"
map_osm.save(file_path)
webbrowser.open(file_path)
