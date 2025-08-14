#include <iostream>

using namespace std;

int main()
{
    int i, num,notas;
    i=0;
    notas=0;
    while(i<15){ cout << "Escreva uma nota" << endl;
    cin>>num;

    if(num>=6){notas++;}
    i++;
    }
    cout<<"A quantidade de notas positivo foi de "<<notas;
    return 0;
}
