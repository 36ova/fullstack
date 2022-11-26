from django.shortcuts import render, HttpResponse, get_object_or_404
from django.http import Http404
from .models import Wordlist

# def index(request):
#   return HttpResponse("Hello, World!")

def index(request):
  return render(request, 'index.html')

def react(request):
  return render(request, 'react.html')

def detail(request, wordlist_id):
  print(wordlist_id)
  wordlist = get_object_or_404(Wordlist, pk=wordlist_id)
  return render(request, 'index.html', { 'wordlist': wordlist })

def list(request):
  wordlists = Wordlist.objects.all()
  return render(request, 'list.html', { 'wordlists': wordlists })