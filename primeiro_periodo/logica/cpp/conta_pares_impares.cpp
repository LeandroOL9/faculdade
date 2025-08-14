#include <iostream>

using namespace std;

int main()
{
    int i, num,par,inp;
    i=0;
    par=0;
    inp=0;

    do{ cout << "Escreva um numero" << endl;
    cin>>num;

    if(num%2==0){
        par++;
    }else{inp++;}

    }while(num >=0);
    cout<<"A quantidade de numeros pares foi de "<<par<<" e de numeros impares de "<<inp;
    return 0;
}
