#include <iostream>
#include <locale.h>
using namespace std;

int main(){
    setlocale(LC_ALL, "portuguese");     
    int i=0, num=0, soma=0;

    while(i<20){
    cout<<"Digite um numero:"<<endl;
    cin>>num;
    if(num>=0){
    soma=soma+num;
    }
    i++;
    }
    cout<<"A soma de todos os numeros eh "<<soma<<endl;
    return 0;
}
