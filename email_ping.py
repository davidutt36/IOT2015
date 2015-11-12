#!/usr/bin/env python

import feedpaser
import time
from datetime import datetime


user='davidutt36@gmail.com'
password='DUPa55w0rd3836'



while True:
    newmails = int(feedparser.parse("https://" + user + ":" + passwd + "@mail.google.com/gmail/feed/atom")["feed"]["fullcount"])
    
    def emailcount(n):
        if n > 0:
            print "you have "+str(n)+" new email(s)"
        else:
            print "you have no new email"
    
    emailcount(newmails) 
    time.sleep(5)
    
          