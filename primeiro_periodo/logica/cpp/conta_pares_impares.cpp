#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");    
    int i=0,par=0,inp=0,num;

    do{ cout << "Escreva um numero" << endl;
    cin>>num;

    if(num%2==0){
        par++;
    }else{inp++;}

    }while(num >=0);
    cout<<"A quantidade de numeros pares foi de "<<par<<" e de numeros impares de "<<inp;
    return 0;
}