from django.shortcuts import render

# Create your views here.
def home(request):
    return render(request,'home.html')
def ourservices(request):
    return render(request,'ourservices.html')
def gateautomation(request):
    return render(request,'gateautomation.html')
def agriautomation(request):
    return render(request,'agriautomation.html')
def seedemo(request):
    return render(request,'seedemo.html')
def curtain(request):
    return render(request,'curtain.html')