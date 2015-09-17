from datetime import datetime

def age_check():

    # current time
    now = datetime.now() 

    # gets their age
    age_mo = input("Month as a number (1-12): ")
    age_da = input("Day: ")
    age_yr = input("Year: ")

    # impouts to calculate the difference from now (current date)
    age = datetime(age_yr, age_mo, age_da, 0,0)
    diff = datetime.now() - age

    # days and years converstion
    days = diff.total_seconds()/60/60/24
    years = days/365.2425

    if years >= 21:
        print("Time to join the Drink!")
    elif years >= 18:
        print("Time to get a Army!")
    else:
        print("To Young for Anything, Go Back to School!")
    
age_check()