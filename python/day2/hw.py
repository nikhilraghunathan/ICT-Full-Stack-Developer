class csvbase:
    import pandas as pd
    df = pd.read_csv("example_companies.csv")

class csvdir(csvbase):
    def getdata(self,df):
        print(df)

mycsv = csvdir()
mycsv.getdata(mycsv.df)
