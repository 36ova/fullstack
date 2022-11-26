from django.db import models
from django.contrib.auth.models import User
from datetime import datetime

class Wordlist(models.Model):
  title = models.CharField(max_length=100)
  date_creation = models.DateTimeField(default=datetime.now)
  user = models.ForeignKey(User, on_delete=models.CASCADE)

  def __str__(self) -> str:
    return self.title + " by " + self.user.username