from django.db import models
from django.contrib.auth.models import User
from wordlist.models import Wordlist

class Entry(models.Model):
  word = models.CharField(max_length=40)
  definition = models.TextField()
  synonym = models.TextField(blank=True)
  context = models.TextField(blank=True)
  wordlist = models.ForeignKey(Wordlist, on_delete=models.CASCADE)
  
  def __str__(self) -> str:
    return self.word