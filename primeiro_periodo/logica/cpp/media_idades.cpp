#include <iostream>

using namespace std;

int main()
{
    int i, num, soma, media;
    i=0;
    num=0;
    soma=0;
    media=0;
    while(i<10){
    cout<<"Digite a idade de uma pessoa:"<<endl;
    cin>>num;

    soma=soma+num;
    media=soma/10;

    i++;
    }
    cout<<"A media de idade dessas 10 pessoas eh "<<media<<endl;
    return 0;
}
