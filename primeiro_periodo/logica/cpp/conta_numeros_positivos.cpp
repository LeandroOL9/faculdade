#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");
    int num,i=0,numposi=0;

    while(i<10){ cout << "Escreva um numero" << endl;
    cin>>num;

    if(num>0){numposi++;}
    i++;
    }
    
    cout<<"A quantidade de numero positivo foi de "<<numposi;
    return 0;
}