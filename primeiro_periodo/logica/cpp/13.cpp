#include <iostream>

using namespace std;

int main()
{
    int i, num, soma;
    i=0;
    num=0;
    soma=0;
    while(i<20){
    cout<<"Digite um numero:"<<endl;
    cin>>num;
    soma=soma+num;


    i++;
    }
    cout<<"A soma de todos os numeros eh "<<soma<<endl;
    return 0;
}
