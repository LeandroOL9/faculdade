#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");     
    int i=0, num=0, soma=0;

    while(i<5){
    cout<<"Digite um numero:"<<endl;
    cin>>num;
    if(num>=10 && num<=50){
    soma=soma+num;
    }

    i++;
    }
    cout<<"A soma de todos os numeros em um intervalo de 10 a 50 eh "<<soma<<endl;
    return 0;
}